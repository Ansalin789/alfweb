'use client';

import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import styles from './addBlog.module.css';

const AddBlog = () => {
  const [data, setData] = useState({
    title: '',
    content: '',
    author: '',
    image: '', // Will store the base64-encoded image
  });

  // Handle input field changes
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
    console.log(`[DEBUG] Updated field "${name}": ${value}`);
  };

  // Handle image selection and convert to base64
  const onImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setData((prev) => ({ ...prev, image: reader.result }));
        console.log('[DEBUG] Selected image (base64):', reader.result);
      };
      reader.readAsDataURL(file); // Convert image to base64
    }
  };

  // Handle form submission
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!data.title || !data.content || !data.author || !data.image) {
      toast.error('All fields (title, content, author, and image) are required');
      console.log('[DEBUG] Validation failed: Missing fields');
      return;
    }

    try {
      // Send POST request
      const response = await axios.post('http://localhost:3000/api/blogs', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Handle response
      if (response.status === 201) {
        toast.success('Blog added successfully!');
        console.log('[DEBUG] Blog added:', response.data);
        setData({ title: '', content: '', author: '', image: '' });
      } else {
        toast.error('Error adding blog');
        console.log('[DEBUG] Unexpected response:', response);
      }
    } catch (error) {
      console.error('[DEBUG] Error during blog submission:', error.response || error.message);
      toast.error('Failed to add blog. Please try again.');
    }
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className={`${styles.form} ${styles.formSm}`}>
        {/* Image Upload */}
        <p className={styles.title}>Upload Thumbnail</p>
        <label htmlFor="image" className={styles.label}>
          <img
            className={styles.image}
            src={data.image || '/'} // Placeholder if no image is selected
            alt="Thumbnail"
            width={140}
            height={70}
          />
        </label>
        <input onChange={onImageChange} type="file" id="image" hidden />

        {/* Blog Title */}
        <p className={styles.title}>Blog Title</p>
        <input
          name="title"
          onChange={onChangeHandler}
          value={data.title}
          className={styles.input}
          type="text"
          placeholder="Enter title"
        />

        {/* Blog Content */}
        <p className={styles.content}>Blog Description</p>
        <textarea
          name="content"
          onChange={onChangeHandler}
          value={data.content}
          className={`${styles.input} ${styles.textarea}`}
          placeholder="Enter content"
          rows={6}
        />

        {/* Blog Author */}
        <p className={styles.author}>Author</p>
        <input
          name="author"
          onChange={onChangeHandler}
          value={data.author}
          className={styles.input}
          type="text"
          placeholder="Enter author name"
        />

        {/* Submit Button */}
        <button type="submit" className={styles.button}>
        Add Blog 
        </button>
      </form>
    </>
  );
};

export default AddBlog;
