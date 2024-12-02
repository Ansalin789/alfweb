import React, { useState } from "react";
import Layout from "@/src/layout/Layout"; 
import Breadcumb from "@/src/components/Breadcumb";
import styles from "./Student.module.css";

const faqData = [
  {
    category: "Troubleshooting problems",
    questions: [
      { question: "I am having connection problems", answer: "Please check your internet connection or try restarting your router." },
      { question: "I am trying to connect to my teacher but it says she is in another meeting, how can I fix the problem?", answer: "If your teacher is in another meeting, wait until they are available, or contact support." },
    ],
  },
  {
    category: "Academics",
    questions: [
      { question: "How long and how frequent are my classes?", answer: "Classes typically last 45 minutes and occur twice a week." },
      { question: "Why are my lessons being recorded?", answer: "Recordings are made for review purposes and to assist students in revising their lessons." },
    ],
  },
];

const Student = () => {
  const [openIndex, setOpenIndex] = useState({});

  const toggleAnswer = (categoryIndex, questionIndex) => {
    setOpenIndex((prev) => ({
      ...prev,
      [categoryIndex]: prev[categoryIndex] === questionIndex ? null : questionIndex,
    }));
  };

  return ( 
    <Layout> 
      <Breadcumb pageName={"Student"} />
      
    <div className="w-full">
      {/* Header Section */}
      <div className={styles.header}>
        <h3 className={styles.headerTitle}>
          Advice and answers for Students from the <span>Alfurqan Network Team</span>
        </h3>
      </div>

      {/* Intro Section */}
      <div className={styles.introContainer}>
        <i className="fa fa-book"></i>
        <h2>Ask from Students?</h2>
        <p>Useful resources for students!</p>
      </div>

      {/* FAQ Section */}
      <div className={styles.faqSection}>
        {faqData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-8">
            <h2 className={styles.categoryTitle}>{category.category}</h2>
            <div className={styles.categoryContainer}>
              {category.questions.map((item, questionIndex) => (
                <div key={questionIndex} className={styles.questionContainer}>
                  <div
                    className={styles.questionHeader}
                    onClick={() => toggleAnswer(categoryIndex, questionIndex)}
                  >
                    <div className={styles.questionText}>{item.question}</div>
                    <div className={styles.icon}>
                      {openIndex[categoryIndex] === questionIndex ? "-" : "+"}
                    </div>
                  </div>
                  {openIndex[categoryIndex] === questionIndex && (
                    <div className={styles.answerContainer}>{item.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </Layout>
  );   
}; 


export default Student;
