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
        { name: "Video Recordings", status: "wrong" }
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
    <p className={styles.featureItem}>
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
              let headerStyle = {}; // Initialize headerStyle
              let cardStyle = {}; // Initialize cardStyle for different tiers

              switch (plan.tier) {
                case "ELITE":
                  gradient = "linear-gradient(to bottom,#F85F73,black)"; // Red to coral
                  headerGradient = "linear-gradient(to right, #F85F73, black)"; // Red to coral
                  break;
                case "PREMIUM":
                  gradient = "linear-gradient(to bottom, #928A97,black)"; // Dark blue to dodger blue
                  headerGradient = "linear-gradient(to right, #928A97, black)"; // Dark blue to dodger blue
                  break;
                case "STANDARD":
                  gradient = "linear-gradient(to bottom, rgb(43 107 230),black)"; // Silver to dark gray
                  headerGradient = "linear-gradient(to right, rgb(43 107 230), black)"; // Silver to dark gray
                  break;
                case "BASIC":
                  gradient = "linear-gradient(to bottom, rgb(245 202 71),black)"; // Gold to a lighter gold
                  headerGradient = "linear-gradient(to right, rgb(245 202 71), black)"; // Gold to a lighter gold
                  break;
                default:
                  gradient = "linear-gradient(to bottom, black, #eee)"; // Fallback gradient
                  headerGradient = "linear-gradient(to right, #fff, #eee)"; // Fallback gradient
              }
              return (
                <div key={index} className="col-lg-3 col-md-6" style={{ marginBottom: "20px", position: "relative" }}>
                  {/* If it's ELITE, place the image outside the header */}
                  {plan.tier === "ELITE" && (
                    <img src="/assets/img/elite.png" alt="ELITE" className={styles.eliteImageOutside} />
                  )}
              
                  <div
                    className={styles.pricingCard}
                    style={{ borderColor: plan.color, ...cardStyle }}
                  >
                    <div className={styles.header} style={{ background: headerGradient }}>
                      <div className={styles.tierShape}></div>
                      {plan.tier !== "ELITE" && <h3 style={headerStyle}>{plan.tier}</h3>}
                    </div>
              
                    <br />
                    <div className={styles.body} style={{ background: gradient }}>
                      <p style={{ fontSize: "20px", fontWeight: "bold" }}>{plan.price}</p>
              
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
                            <span>{teacher.name}</span>
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
                            <span>{academic.name}</span>
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
                            <span>{portalAccess.name}</span>
                          </li>
                        ))}
                      </ul>
              
                      {/* Render Scheduling */}
                      <h6>LESSON SCHEDULING</h6>
                      <ul className={styles.featureList}>
                        {plan.scheduling.map((scheduling, index) => (
                          <li key={index} className={styles.featureItem}>
                            {scheduling.status === "tick" && (
                              <span className={styles.tick}>&#10003;</span>
                            )}
                            {scheduling.status === "wrong" && (
                              <span className={styles.cross}>&#10005;</span>
                            )}
                            <span>{scheduling.name}</span>
                          </li>
                        ))}
                      </ul>
              
                      {/* Render Discounts */}
                      <h6>DISCOUNTS</h6>
                      <ul className={styles.featureList}>
                        {plan.discounts.map((discount, index) => (
                          <li key={index} className={styles.featureItem}>
                            {discount.status === "tick" && (
                              <span className={styles.tick}>&#10003;</span>
                            )}
                            {discount.status === "wrong" && (
                              <span className={styles.cross}>&#10005;</span>
                            )}
                            <span>{discount.name}</span>
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
