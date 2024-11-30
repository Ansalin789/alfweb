import { useEffect, useState } from 'react';
import Image from 'next/image'; // Import the Next.js Image component


const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);  // Initialize state

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('http://localhost:3000/api/blogs'); // Replace with your actual API endpoint
      const data = await response.json();
      setBlogs(data.blogs || data);  // Update state with fetched data
    };

    fetchBlogs();
  }, []); // Empty dependency array means this runs once on component mount

  return (
    <div>
      {blogs.map(blog => (
        <div key={blog.id}>
          {/* <Image src={blog.image} width={60} height={60} alt='' /> */}
          <Image src={blog.image} alt=''/>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <p>{blog.author}</p>

        </div>
      ))}
    </div>
  );
};

export default BlogPage;
