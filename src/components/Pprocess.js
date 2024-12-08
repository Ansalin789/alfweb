import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import styles from './Pprocess.module.css'; // Import the CSS module

const Pprocess = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS animations
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title} data-aos="zoom-down">
        HOW TO START CLASSES
      </h2>
      <p className={styles.subtitle} data-aos="fade-down">
        Follow these steps to begin your learning journey
      </p>
      <div className={styles.timeline}>
        <div className={styles.step} data-aos="fade-right">
          <div className={styles.iconContainer}>
            <span role="img" aria-label="search" className={styles.icon}>🔍</span>
          </div>
          <div className={styles.content}>
            <h3 className={styles.stepTitle}>Effective Planning Strategies</h3>
            <p className={styles.stepDescription}>
              Set your course and your objective to ensure success.
            </p>
          </div>
        </div>
        <div className={styles.step} data-aos="fade-left">
          <div className={styles.iconContainer}>
            <span role="img" aria-label="idea" className={styles.icon}>💡</span>
          </div>
          <div className={styles.content}>
            <h3 className={styles.stepTitle}>Master Your Study Schedule</h3>
            <p className={styles.stepDescription}>
              Create a timetable and plan your schedule accordingly.
            </p>
          </div>
        </div>
        <div className={styles.step} data-aos="fade-right">
          <div className={styles.iconContainer}>
            <span role="img" aria-label="target" className={styles.icon}>🎯</span>
          </div>
          <div className={styles.content}>
            <h3 className={styles.stepTitle}>Optimizing Your Study Techniques</h3>
            <p className={styles.stepDescription}>
              Pay and begin your courses to unlock your potential.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.footer} data-aos="fade-up">
        <button className={styles.ctaButton}> Begin Your Journey <i className="bi bi-plus" /></button>
      </div>
    </div>
  );
};

export default Pprocess;
