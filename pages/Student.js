import React, { useState } from "react";
import styles from './Student.module.css';

const faqData = [
  {
    category: "Troubleshooting problems",
    questions: [
      { question: "I am having connection problems", answer: "Please check your internet connection or try restarting your router." },
      { question: "I am trying to connect to my teacher but it says she is in another meeting, how can I fix the problem?", answer: "If your teacher is in another meeting, wait until they are available, or contact support." },
      { question: "Can you notify me before the lesson?", answer: "We provide notifications via email 15 minutes before each lesson." },
      { question: "How can I get access to my lessons' recordings?", answer: "Recordings can be accessed from the student dashboard." },
      { question: "I am unable to hear my teacher, what can I do?", answer: "Please check your audio settings and ensure your microphone and speakers are properly connected." },
      { question: "How to Reschedule Lessons!", answer: "You can reschedule lessons from the calendar in your student dashboard." }
    ],
  },
  {
    category: "Academics",
    questions: [
      { question: "How long and how frequent are my classes?", answer: "Classes typically last 45 minutes and occur twice a week." },
      { question: "Why are my lessons being recorded?", answer: "Recordings are made for review purposes and to assist students in revising their lessons." },
      { question: "How can I access the video recordings for my lessons?", answer: "Recordings are available through the student portal under the 'Recordings' section." },
      { question: "I left a voicemail but received no response, how can I reach a person at IQRA?", answer: "You can try reaching us via email or live chat on our website." }
    ],
  },
  {
    category: "Quran",
    questions: [
      { question: "What Quran recitation styles do you teach?", answer: "We teach various recitation styles including Hafs and Warsh, with a focus on proper Tajweed." },
      { question: "How do I improve my Quran recitation?", answer: "Practice regularly, attend your lessons, and follow your teacher's feedback." },
      { question: "Are there any additional Quran study materials?", answer: "Yes, we provide PDFs and audio resources in the student portal for additional study." }
    ],
  },
  {
    category: "Tajweed",
    questions: [
      { question: "What is Tajweed?", answer: "Tajweed refers to the set of rules governing the pronunciation during Quran recitation." },
      { question: "Do I need prior knowledge to start learning Tajweed?", answer: "No prior knowledge is required. Our courses are structured for beginners and advanced learners alike." },
      { question: "How long will it take to master Tajweed?", answer: "The time required depends on individual practice, but students usually start seeing improvements within a few months." }
    ],
  },
  {
    category: "Arabic",
    questions: [
      { question: "Do you offer Arabic language courses?", answer: "Yes, we offer Arabic courses focusing on both classical and modern standard Arabic." },
      { question: "How long does it take to learn Arabic?", answer: "The time to learn Arabic varies depending on the learner's commitment, but our courses are designed to help students build proficiency over several months." },
      { question: "Can I learn to read the Quran in Arabic?", answer: "Yes, we offer beginner classes that focus on teaching students how to read and understand the Quran in Arabic." }
    ],
  },
];

const Student = () => {
  const [openIndex, setOpenIndex] = useState({});

  const toggleAnswer = (categoryIndex, questionIndex) => {
    setOpenIndex((prev) => ({
      ...prev,
      [categoryIndex]: prev[categoryIndex] === questionIndex ? null : questionIndex
    }));
  };

  return (
    <div className="w-full">
      {/* Header Section */}
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>
          Advice and answers for Students from the <span>BAYYINAH Network Team</span>
        </h1>
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
                    onClick={() => toggleAnswer(categoryIndex, questionIndex)}
                    className={styles.questionText}
                  >
                    {item.question}
                  </div>
                  <div className={styles.icon}>
                    {openIndex[categoryIndex] === questionIndex ? '-' : '+'}
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
  );
};

export default Student;
