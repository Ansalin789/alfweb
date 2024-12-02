import React, { useState } from "react";
import Layout from "@/src/layout/Layout";
import Breadcumb from "@/src/components/Breadcumb";
import styles from "./Teacher.module.css";

const faqData = [
  {
    category: "Teaching Materials",
    questions: [
      { question: "How can I access the teacher's course materials?", answer: "Teachers can access the course materials through the teacher dashboard after logging in." },
      { question: "Are there supplemental teaching resources available?", answer: "Yes, teachers have access to additional resources such as guides, lesson plans, and activity worksheets." },
    ],
  },
  {
    category: "Course Management",
    questions: [
      { question: "Can teachers modify course content?", answer: "Yes, teachers can request modifications to the course content by contacting the curriculum team." },
      { question: "How do I add or remove students from my course?", answer: "Teachers can manage student enrollment through the course management tab in the teacher dashboard." },
      { question: "Can I track my students' progress?", answer: "Yes, teachers have access to detailed progress reports for each student through the dashboard." },
    ],
  },
  {
    category: "Assessments and Grading",
    questions: [
      { question: "How do I create and assign assessments?", answer: "Assessments can be created using the assessment tool within the teacher dashboard, and assigned to specific classes or students." },
      { question: "Can I provide feedback on student assignments?", answer: "Yes, teachers can leave feedback and grade assignments directly within the platform." },
    ],
  },
];

const Teacher = () => {
  const [openIndex, setOpenIndex] = useState({});

  const toggleAnswer = (categoryIndex, questionIndex) => {
    setOpenIndex((prev) => ({
      ...prev,
      [categoryIndex]: prev[categoryIndex] === questionIndex ? null : questionIndex,
    }));
  };

  return (
    <Layout>
            <Breadcumb pageName={"Teacher"} />

    <div className="w-full">
      {/* Header Section */}
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>
          Advice and answers for Teachers from the <span>Alfurqan Network Team</span>
        </h1>
      </div>

      {/* Intro Section */}
      <div className={styles.introContainer}>
        <i className="fa fa-book"></i>
        <h2>Ask from Teachers?</h2>
        <p>Useful resources for teachers!</p>
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

export default Teacher;
