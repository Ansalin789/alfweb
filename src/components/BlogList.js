import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem';
import Blogs from '../components/api/Blog.json'

const BlogList = () => {

    const [menu,setMenu] = useState("All");
    const [blogs,setBlogs] = useState([]);

    const fetchBlogs = async () =>{
    //   const response = Blogs.blogs
      const endpoint = 'http://localhost:3000/api/blog'

      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json(); // Parse the response as JSON
      console.log("Fetched blogs:", data);

    //   console.log("Fetched blogs:", response);
      setBlogs(response);
    }

    useEffect(()=>{
      fetchBlogs();
    },[])

  return (
    <div>
    <h1>Blogs</h1>
    <ul>
      {blogs.map((blog) => (
        <li key={blog._id}>
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
          <p>Author: {blog.author}</p>
          <p>Category: {blog.category}</p>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default BlogList
