import React from "react";
import styles from './Opportunities.module.css'; // Import the CSS module

const Opportunities = () => {
  const jobData = [
    {
      title: " Teacher (Female)",
      jobtitle:"Job Title - Qur'an Study with Tajweed & Makharij",
      description:"Qur'an Teacher with Ijaza & having 2-3 years online teaching experience for all ages.",
      type: "Online",
    },
    {
      title: "Teacher (Female)",
      jobtitle:" Arabic Language Study",
      description:"Arabic Teacher with command of the Arabic Language, ability to design the course as per the age group and teach to all ages and should be able to teach the School Arabic curriculum, with a minimum of 2-3 Years of experience.",
      type: "Online",
    },
    {
      title: "Admin Staff (Female)",
      jobtitle:" Administrative Cordinator",

      description:"To manage letters, communicate with clients, and interact with the public, a candidate has to possess outstanding written communication abilities. She must be well organized to keep the Schedule of teacher and kids, minimum 2 years of experience.",
      type: "Online",
    },
    {
      title: "Digital Marketing (M/F)",
      jobtitle:" Digital Marketing Executive",

      description:"Plans and implements all display, email, social media, database marketing, and web advertising campaigns.Evaluates all digital marketing initiatives' performance, measures it, and reports it, and compares it to objectives (ROI and KPIs).Makes use of a strong analytical skill set to assess the entire customer experience across all channels and consumer touch points.Prepares, carries out, and evaluates conversion tests and experiments.",
      type: "Online",
    },
   
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Some opportunities for you to explore</h2>
      <div className={styles.grid}>
        {jobData.map((job, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.title}>{job.title}</h3>
            <h6 className={styles.jobtitle}>{job.jobtitle}</h6>
            <p className={styles.description}>{job.description}</p>
            <p className={styles.type}>{job.type}</p>
          </div>
        ))}
      </div>
      <br/>
      <br/>
      <br/>
      <div className={inlineStyles.container}>
        <h2 style={inlineStyles.heading}>Can’t find what you’re looking for?</h2>
        <p style={inlineStyles.subheading}>
          Register on our Candidate Portal and get notified when new roles that
          match your skills open up.
        </p>
        <button style={inlineStyles.button}>
          REGISTER HERE <span style={inlineStyles.arrow}>→</span>
        </button>
      </div>
    </div>
  );
};

// Renamed the conflicting styles object to "inlineStyles"
const inlineStyles = {
  container: {
    textAlign: "center",
    padding: "40px 20px",
    backgroundColor: "#ffffff",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#000000",
  },
  subheading: {
    fontSize: "1rem",
    marginBottom: "20px",
    color: "#555555",
  },
  button: {
    backgroundColor: "#ff0000",
    color: "#ffffff",
    padding: "10px 20px",
    fontSize: "1rem",
    fontWeight: "bold",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
  },
  arrow: {
    marginLeft: "8px",
    fontSize: "1.2rem",
  },
};

export default Opportunities;