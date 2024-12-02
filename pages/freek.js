import React from "react";
import Link from 'next/link'; 
import Layout from "@/src/layout/Layout";
import Breadcumb from "@/src/components/Breadcumb";
import styles from './freek.module.css';

const categories = [
  {
    id: 1,
    title: "For Students",
    description: "Useful resources for students!",
    articles: 28,
    icon: "📖",
    link: "/Student", 
  },
  {
    id: 2,
    title: "For Teachers",
    description: "Help for teachers!",
    articles: 24,
    icon: "📖",
    link: "/Teacher", 
  },
];

const Freek = () => {
  return ( 
    <Layout> 
            <Breadcumb pageName={"FAQ"} />

    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>
          Advice and answers from the <span>Al Furqan Network Team</span>
        </h1>
        {/* Search Bar */}
            {/* <div className="flex justify-center w-full max-w-xl px-4">
            <input
                type="text"
                className={styles.searchInput}
                placeholder="Search for articles..."
            />
            </div> */}
      </div>

      {/* Article Categories in 2 Columns */}
      <div className={styles.gridContainer}>
        {categories.map((category) => (
          <Link href={category.link} key={category.id} passHref>
            <div className={styles.categoryCard}>
              {/* Icon and Text Section */}
              <div className="flex items-start mb-4">
                <div className={styles.icon}>{category.icon}</div>
                <div>
                  <h2 className={styles.title}>{category.title}</h2>
                  <p className={styles.description}>{category.description}</p>
                </div>
              </div>

              {/* Article Info */}
              <div className={styles.articleInfo}>
                <p>
                  By <span className="font-medium">Support</span> • {category.articles} articles
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div> 
    </Layout>
  );
};

export default Freek;
