import React from "react";
import Breadcumb from "@/src/components/Breadcumb";
import Layout from "@/src/layout/Layout";
import styles from "./PricingTable.module.css"; // Adjust path if necessary

const Pricing = () => {
  const pricingPlans = [
    {
      tier: "ELITE",
      price: "$16 / Hour",
      teachers: [
        { name: "Proficient Arabic (Native) Teacher", status: "tick" },
        { name: "Institutionally Certified", status: "tick" },
        { name: "Top 5% Rated Teacher", status: "tick" }
      ],
      academics: [
        { name: "E-Certificate", status: "tick" },
        { name: "Direct Chat with Teacher & Coach", status: "tick" },
        { name: "Dedicated Academic Coach", status: "tick" },
        { name: "Coaching and Planning Session", status: "tick" },
        { name: "Progress Report", status: "tick" }
      ],
      portalAccess: [
        { name: "Full Dashboard Access", status: "tick" },
        { name: "E-Syllabus Access", status: "tick" },
        { name: "Welcome Package", status: "tick" },
        { name: "Video Recordings", status: "tick" }
      ],
      scheduling: [
        { name: "Unlimited Reschedule of Class Per Month", status: "tick" },
        { name: "Unlimited Lesson Reschedule", status: "tick" }
      ],
      discounts: [
        { name: "10% Discount for Family", status: "tick" }
      ],
      gradient: "linear-gradient(to bottom, #ff0000, #ff7e5f)" // ELITE Gradient
    },
    {
      tier: "PREMIUM",
      price: "$11 / Hour",
      teachers: [
        { name: "Proficient Arabic (Native) Teacher", status: "tick" },
        { name: "Institutionally Certified", status: "tick" },
        { name: "Top 5% Rated Teacher", status: "tick" }
      ],
      academics: [
        { name: "E-Certificate", status: "tick" },
        { name: "Direct Chat with Teacher & Coach", status: "tick" },
        { name: "Dedicated Academic Coach", status: "tick" },
        { name: "Coaching and Planning Session every Quarterly", status: "tick" },
        { name: "Progress Report Twice a Year", status: "tick" }
      ],
      portalAccess: [
        { name: "Full Dashboard Access", status: "tick" },
        { name: "E-Syllabus Access", status: "tick" },
        { name: "Welcome Package", status: "wrong" },
        { name: "Video Recordings" , status: "wrong" }
        
      ],
      scheduling: [
        { name: "Up to 4 Lesson Reschedules Per Month", status: "tick" },
        { name: "Up to 1 Lesson Cancellation Per Month", status: "tick" }
      ],
      discounts: [{ name: "5% Family Discount", status: "tick" }],
      gradient: "linear-gradient(to bottom, #00008B, #1E90FF)" // PREMIUM Gradient
    },
    {
      tier: "STANDARD",
      price: "$9 / Hour",
      teachers: [
        { name: "Proficient Arabic (Native) Teacher", status: "tick" },
        { name: "Institutionally Certified", status: "wrong" },
        { name: "Top 5% Rated Teacher", status: "wrong" }
      ],
      academics: [
        { name: "E-Certificate", status: "tick" },
        { name: "Direct Chat with Teacher & Coach", status: "tick" },
        { name: "Dedicated Academic Coach", status: "wrong" },
        { name: "Coaching and Planning Session", status: "wrong" },
        { name: "Progress Report Once a Year", status: "wrong" }
      ],
      portalAccess: [
        { name: "Limited Dashboard Access (Schedules Only)", status: "tick" },
        { name: "E-Syllabus Access", status: "wrong" },
        { name: "Welcome Package", status: "wrong" },
        { name: "Video Recordings", status: "wrong" }
      ],
      scheduling: [
        { name: "Up to 2 Lesson Reschedules Per Month", status: "tick" },
        { name: "Lesson Cancellations", status: "wrong" }
      ],
      discounts: [{ name: "Family Discount", status: "tick" }],
      gradient: "linear-gradient(to bottom, #C0C0C0, #A9A9A9)" // STANDARD Gradient
    },
    {
      tier: "BASIC",
      price: "$8 / Hour",
      teachers: [
        { name: "Proficient Arabic (Native) Teacher", status: "tick" },
        { name: "Institutionally Certified", status: "wrong" },
        { name: "Top 5 Star Rated Teacher", status: "wrong" }
      ],
      academics: [
        { name: "E-Certificate", status: "wrong" },
        { name: "Direct Chat with Teacher & Coach", status: "wrong" },
        { name: "Dedicated Academic Coach", status: "wrong" },
        { name: "Coaching and Planning Session", status: "wrong" },
        { name: "Progress Report", status: "wrong" }
      ],
      portalAccess: [
        { name: "Limited Dashboard Access (Schedules Only)", status: "tick" },
        { name: "E-Syllabus Access", status: "wrong" },
        { name: "Welcome Package", status: "wrong" },
        { name: "Video Recordings", status: "wrong" }
      ],
      scheduling: [
        { name: "Lessons Reschedules", status: "wrong" },
        { name: "Lesson Cancellations", status: "wrong" } 
      ],
      discounts: [{ name: "Family Discount", status: "wrong" }],
      gradient: "linear-gradient(to bottom, #FFD700, #FFC300)" // BASIC Gradient
    }
  ];

  const renderStatusWithIcon = (status, text) => {
    const icon = status === "tick" 
      ? <span className={`${styles.tick}`}>&#10003;</span> 
      : status === "wrong" 
      ? <span className={`${styles.cross}`}>&#10005;</span> 
      : null;

      return (
        <p className={styles.featureItem} style={{ color: "white" }}> {/* Add color here */}
          {icon} <span>{text}</span>
        </p>
    );
  };
 
  
  return (
    <Layout>
      <Breadcumb pageName={"Pricing"} />
      <div className={styles.pricingContainer}>
        <div className="container">
          <div className="row">

{pricingPlans.map((plan, index) => {
  let gradient;
  let headerGradient;
  let textColor = "#fff"; // Default text color
  let headerStyle = {}; 
  let cardStyle = {}; 

  switch (plan.tier) {
    case "ELITE":
      gradient = "linear-gradient(to bottom, white, #E0E0E0)"; // Vibrant red to dark red
      headerGradient = "linear-gradient(to right, white, rgb(199 193 193))"; // Vibrant coral to dark red
      textColor = "#000"; // Gold text for ELITE
      break;
    case "PREMIUM":
      gradient = "linear-gradient(to bottom, white, #FFFACD)"; // Vibrant blue to navy blue
      headerGradient = "linear-gradient(to right, white, rgb(231 223 147))"; // Sky blue to navy
      textColor = "#000"; // Light blue text for PREMIUM
      break;
    case "STANDARD":
      gradient = "linear-gradient(to bottom, white,white)"; // Muted silver
      headerGradient = "linear-gradient(to right, white, white)"; // Light silver to muted silver
      textColor = "#000";
      break;
    case "BASIC":
      gradient = "linear-gradient(to bottom, white,white)"; // Soft gold to pale yellow
      headerGradient = "linear-gradient(to right, white, white)"; // Pale yellow to soft gold
      textColor = "#000";
      break;
    default:
      gradient = "linear-gradient(to bottom, white, white)"; // Fallback gradient
      headerGradient = "linear-gradient(to right, white, white)"; // Fallback gradient
  }

              return (
<div key={index} className="col-lg-3 col-md-6 mt-60" style={{ marginBottom: "20px", position: "relative" }}>
  {/* Conditional rendering for the small box above pricing card for ELITE and PREMIUM */}
  {["ELITE", "PREMIUM"].includes(plan.tier) && (
    <div
      className={`${styles.smallBox} ${plan.tier === "ELITE" ? styles.eliteBox : styles.premiumBox}`}
    >
      <p className={`${styles.small} ${plan.tier === "ELITE" ? styles.eliteText : styles.premiumText}`}>
        {plan.tier === "ELITE" ? "Popular" : "Preferred"}
      </p>
    </div>
  )}


              {/* </div> */}
              

                  {/* Conditional rendering for the ELITE image */}
                  {plan.tier === "ELITE" && (
                    <img src="/assets/img/elite1.png" alt="Elite Plan" className={styles.eliteImageOutside} />
                  )} 

                  {plan.tier === "PREMIUM" && (
                    <img src="/assets/img/premium1.png" alt="premium Plan" className={styles.premiumImageOutside} />
                  )} 

                  {plan.tier === "STANDARD" && (
                    <img src="/assets/img/standard1.png" alt="Standard Plan" className={styles.standardImageOutside} />
                  )} 

                  {plan.tier === "BASIC" && (
                    <img src="/assets/img/basic1.png" alt="Standard Plan" className={styles.basicImageOutside} />
                  )} 

                  {/* Pricing Card */}
                  <div
                    className={styles.pricingCard}
                    style={{ borderColor: plan.color, ...cardStyle }}
                  >
                    <div className={styles.header} style={{ background: headerGradient }}>
                      <div className={styles.tierShape}></div>
                      {/* {plan.tier !== "ELITE" &&  <h3 style={{ ...headerStyle, color: "white" }}>{plan.tier}</h3>} */}
                    </div>
                    <br />
                    <div className={styles.body} style={{ background: gradient }}>
                      <p style={{ fontSize: "20px", fontWeight: "bold",color: textColor }}>{plan.price}</p>

                      {/* Render Teachers */}
                      <h6>TEACHERS</h6>
                      <ul className={styles.featureList}>
                        
                        {plan.teachers.map((teacher, index) => (
                          <li key={index} className={styles.featureItem}>
                            {teacher.status === "tick" && (
                              <span className={styles.tick}>&#10003;</span>
                            )}
                            {teacher.status === "wrong" && (
                              <span className={styles.cross}>&#10005;</span>
                            )} 
                             <span style={{ color: (plan.tier === "ELITE" || plan.tier === "PREMIUM") ? "black" : "inherit" }}>
                            {teacher.name}</span>
                          </li>
                        ))}
                      </ul>

                       {/* Render Academics */}
                       <h6>ACADEMICS</h6>
                      <ul className={styles.featureList}>
                        {plan.academics.map((academic, index) => (
                          <li key={index} className={styles.featureItem}>
                            {academic.status === "tick" && (
                              <span className={styles.tick}>&#10003;</span>
                            )}
                            {academic.status === "wrong" && (
                              <span className={styles.cross}>&#10005;</span>
                            )}
                             <span style={{ color: (plan.tier === "ELITE" || plan.tier === "PREMIUM") ? "black" : "inherit" }}>
                             {academic.name}</span>
                          </li>
                        ))}
                      </ul>
              
                      {/* Render Portal Access */}
                      <h6>PORTAL ACCESS</h6>
                      <ul className={styles.featureList}>
                        {plan.portalAccess.map((portalAccess, index) => (
                          <li key={index} className={styles.featureItem}>
                            {portalAccess.status === "tick" && (
                              <span className={styles.tick}>&#10003;</span>
                            )}
                            {portalAccess.status === "wrong" && (
                              <span className={styles.cross}>&#10005;</span>
                            )}
                             <span style={{ color: (plan.tier === "ELITE" || plan.tier === "PREMIUM") ? "black" : "inherit" }}>

                             {portalAccess.name}</span>
                          </li>
                        ))}
                      </ul>
              
                      {/* Render Scheduling */}
                      
                      {/* Render Scheduling */}
<h6
  style={{
    marginTop:
      plan.tier === "PREMIUM" || plan.tier === "ELITE" ? "45px" : "20px",
  }}
>
  LESSON SCHEDULING
</h6>
<ul className={styles.featureList}>
  {plan.scheduling.map((scheduling, index) => (
    <li key={index} className={styles.featureItem}>
      {scheduling.status === "tick" && (
        <span className={styles.tick}>&#10003;</span>
      )}
      {scheduling.status === "wrong" && (
        <span className={styles.cross}>&#10005;</span>
      )}
                             <span style={{ color: (plan.tier === "ELITE" || plan.tier === "PREMIUM") ? "black" : "inherit" }}>
               {scheduling.name}</span>
    </li>
  ))}
</ul>

              
                      {/* Render Discounts */} 
                      
                      <h6
  style={{
    marginTop: plan.tier === "ELITE" 
      ? "45px" 
      : plan.tier === "PREMIUM" 
      ? "20px" 
      : plan.tier === "STANDARD" 
      ? "40px" 
      : "65px", // For BASIC or any other tier
  }}
>
  DISCOUNTS
</h6>
                      <ul className={styles.featureList}>
                        {plan.discounts.map((discount, index) => (
                          <li key={index} className={styles.featureItem}>
                            {discount.status === "tick" && (
                              <span className={styles.tick}>&#10003;</span>
                            )}
                            {discount.status === "wrong" && (
                              <span className={styles.cross}>&#10005;</span>
                            )}
                             <span style={{ color: (plan.tier === "ELITE" || plan.tier === "PREMIUM") ? "black" : "inherit" }}>

                             {discount.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;
