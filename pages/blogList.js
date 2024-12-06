import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';  // Ensure react-toastify is installed

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const endpoint = 'http://localhost:3000/api/blogs';
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log("data>>>",data);
    setBlogs(data.blogs || data);
  };

  
  


  const deleteBlog = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/blogs/${id}`);
      console.log("BlogList component loaded", response.data);
      toast.success(response?.data?.msg || 'Blog deleted successfully');
      fetchBlogs(); // Refresh blog list
    } catch (error) {
      console.error('Error deleting blog:', error.response?.data || error.message);
      toast.error('Failed to delete the blog.');
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
    <h1>All Blogs</h1>
    <table>
      <thead>
        <tr>
          <th>Author Name</th>
          <th>Blog Title</th>
          <th>Date</th>
          <th>Image</th> {/* Added Image Column */}
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(blogs) ? (
          blogs.map((blog) => (
            <tr key={blog._id}>
              <td>{blog.author}</td>
              <td>{blog.title}</td>
              <td>{new Date(blog.createdAt).toLocaleDateString()}</td>
              <td>
                {/* Display the image if the blog has an image URL */}
                {blog.image ? (
                  <img src={blog.image} style={{ width: '100px', height: 'auto' }} />
                ) : (
                  <span>No image available</span>
                )}
              </td>
              <td>
                <button onClick={() => deleteBlog(blog._id)}>Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5">No blogs found</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
  
  );
};

export default BlogList;
