import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Breadcumb from "@/src/components/Breadcumb";
import Layout from "@/src/layout/Layout";

const BlogDetails = () => {
  const [blog, setBlog] = useState(null); // State to hold the blog data
  const [error, setError] = useState(null); // State to hold error messages
  const router = useRouter(); // Get the router object
  const { id } = router.query; // Extract the blog ID from the URL

  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) return; // Ensure ID is available before fetching
      try {
        const response = await fetch(`http://localhost:3000/api/blogs/${id}`); // Fetch the specific blog by ID
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBlog(data); // Set the fetched blog data
      } catch (error) {
        console.error("Error fetching blog:", error);
        setError(error.message); // Set the error message
      }
    };

    fetchBlog();
  }, [id]);

  if (error) return <div>Error: {error}</div>; // Show error message if there's an error
  if (!blog) return <div>Loading...</div>; // Show loading state while fetching

  return (
    <Layout>
      <Breadcumb pageName={"Blog Details"} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="blog-single-items">
              <div className="blog-thumb">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="blog-content">
                <h5>{blog.title}</h5>
                <div className="blog-meta">
                  <span>By {blog.author}</span> -{" "}
                  <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                </div>
                <p>{blog.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetails;
