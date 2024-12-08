import Breadcumb from "@/src/components/Breadcumb";
import PagginationFuntion from "@/src/components/PagginationFuntion";
import Layout from "@/src/layout/Layout";
import { getPagination, pagination } from "@/src/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from './blog-grid.module.css'; // Adjust the path if necessary

const BlogGrid = () => {
  const [blogs, setBlogs] = useState([]); // State to store blogs fetched from the API
  const [active, setActive] = useState(1); // Current active page for pagination
  const [state, setState] = useState([]); // Pagination state
  const sort = 3; // Number of blogs per page

  // Fetch blogs from the API
  const fetchBlogs = async () => {
    try {
      const endpoint = "http://localhost:3000/api/blogs";
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setBlogs(data.blogs || data);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    }
  };

  // Fetch blogs when the component mounts
  useEffect(() => {
    fetchBlogs();
  }, []);

  // Handle pagination when active page changes
  useEffect(() => {
    const list = document.querySelectorAll(".single_box_");
    setState(getPagination(list.length, sort));
    pagination(".single_box_", sort, active);
  }, [active, blogs]);

  return (
    <Layout>
      <Breadcumb pageName={"Blog Grid"} />
      <div className="blog-area style-two page">
        <div className="container">
          <div className="row">
            {/* Render blogs */}
            {blogs.slice((active - 1) * sort, active * sort).map((blog) => (
              <div
                key={blog.id}
                className="col-lg-4 col-md-6 single_box_"
                style={{ marginBottom: "20px" }}
              >
                <div className="single-blog-box">
                  <div className="single-blog-thumb">
                    {blog.image && (
                      <img
                        src={blog.image}
                        alt={blog.title}
                        style={{ width: "100%", height: "200px", objectFit: "cover" }}
                      />
                    )}
                    <div className="blog-top-button">
                      <a href="#">{blog.title}</a>
                    </div>
                  </div>
                  <div className="em-blog-content">
                    <div className="meta-blog-text">
                      <p>{blog.title}</p>
                    </div>
                    <div className="em-blog-title">
                      <h2>
                        <Link legacyBehavior href="/blog-details">
                          <a>{blog.content}</a>
                        </Link>
                      </h2>
                    </div>
                    <div className="em-blog-icon">
                      <div className="em-blog-thumb">
                        <img
                          src="assets/images/resource/blog-icon.png"
                          alt="icon"
                        />
                      </div>
                      <div className="em-blog-icon-title">
                        <h6>Author: {blog.author}</h6>
                      </div>
                    </div>
                    <div className={styles.blogButton}>
                        <Link legacyBehavior href={`/blog-details/${blog._id}`}>
                         <a>
                          Learn More <i className="bi bi-plus" />
                          </a>
                        </Link>
                          </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination */}
          <div className="row">
            <div className="col-12">
              <div className="pagination justify-content-center mt-4">
                <PagginationFuntion
                  setActive={setActive}
                  active={active}
                  state={state}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  
  );
};

export default BlogGrid;
