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
        "Proficient Arabic (Native) Teacher",
        "Institutionally Certified",
        "Top 5% Rated Teacher",
      ],
      academics: [
        "E-Certificate",
        "Direct Chat with Teacher & Coach",
        "Dedicated Academic Coach",
        "Coaching and Planning Session every Quarterly",
        "Progress Report Every Year",
      ],
      portalAccess: [
        "Full Dashboard Access",
        "E-Syllabus Access(Including HW, quizzes, and exams)",
        "Welcome Package *",
        "Video Recordings",
      ],
      scheduling: ["Unlimited Reschedule of Class Per Month", "Unlimited Lesson Reschedule"],
      discounts: "10% Discount for Family",
      color: "#0033a1", // Example color for Elite tier
    },
    {
      tier: "PREMIUM",
      price: "$11 / Hour",
      teachers: [
        "Expert Arabic (Native) Teacher",
        "Institutionally Certified",
        "Top 5 Star Rated Teacher",
      ],
      academics: [
        "E-Certificate",
        "Direct Chat with Teacher & Coach",
        "Dedicated Academic Coach",
        "Coaching and Planning Session every Quarterly",
        "Progress Report Every Year",
      ],
      portalAccess: [
        "Full Dashboard Access",
        "Knowledge Base Access",
        "Assignments",
        "Recorded Classes",
      ],
      scheduling: ["Unlimited Reschedule of Class Per Month", "Unlimited Lesson Reschedule"],
      discounts: "10% Discount for Family",
      color: "#cc0000", // Example color for Premium tier
    },
    {
      tier: "STANDARD",
      price: "$9 / Hour",
      teachers: [
        "Expert Arabic (Native) Teacher",
        "Institutionally Certified",
        "Top 5 Star Rated Teacher",
      ],
      academics: [
        "E-Certificate",
        "Direct Chat with Teacher & Coach",
        "Dedicated Academic Coach",
        "Coaching and Planning Session every Quarterly",
        "Progress Report Every Year",
      ],
      portalAccess: [
        "Full Dashboard Access",
        "Knowledge Base Access",
        "Assignments",
        "Recorded Classes",
      ],
      scheduling: ["Unlimited Reschedule of Class Per Month", "Unlimited Lesson Reschedule"],
      discounts: "10% Discount for Family",
      color: "#C0C0C0", // Example color for Standard tier
    },
    {
      tier: "BASIC",
      price: "$8 / Hour",
      teachers: [
        "Expert Arabic (Native) Teacher",
        "Institutionally Certified",
        "Top 5 Star Rated Teacher",
      ],
      academics: [
        "E-Certificate",
        "Direct Chat with Teacher & Coach",
        "Dedicated Academic Coach",
        "Coaching and Planning Session every Quarterly",
        "Progress Report Every Year",
      ],
      portalAccess: [
        "Limited Dashboard Access",
        "Knowledge Base Access",
        "Assignments",
        "Recorded Classes",
      ],
      scheduling: ["Unlimited Reschedule of Class Per Month","Unlimited Reschedule of Class Per Month"],
      discounts: "No Discount for Family",
      color: "#999999", // Example color for Basic tier

    },
  ];

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
              let cardStyle = {}; // Initialize cardStyle for BASIC

              switch (plan.tier) {
                case "ELITE":
                  gradient = "linear-gradient(to bottom, #ff0000, #ff7e5f)"; // Red to coral
                  headerGradient = "linear-gradient(to right, #ff0000, #ff7e5f)"; // Red to coral
                  break;
                case "PREMIUM":
                    gradient = "linear-gradient(to bottom, #00008B, #1E90FF)"; // Dark blue to dodger blue
                  headerGradient = "linear-gradient(to right, #00008B, #1E90FF)"; // Dark blue to dodger blue
                 
                  break;
                case "STANDARD":
                  gradient = "linear-gradient(to bottom, #C0C0C0, #A9A9A9)"; // Silver to dark gray
                  headerGradient = "linear-gradient(to right, #C0C0C0, #A9A9A9)"; // Silver to dark gray
                  break;
                case "BASIC":
                  gradient = "linear-gradient(to bottom, #FFD700, #FFC300)"; // Gold to a lighter gold
                  headerGradient = "linear-gradient(to right, #FFD700, #FFC300)"; // Gold to a lighter gold
                 
                  break;
                default:
                  gradient = `linear-gradient(to bottom, ${plan.color}, #ffffff)`; // Fallback gradient
                  headerGradient = `linear-gradient(to right, ${plan.color}, #ffffff)`; // Fallback gradient
              }

              return (
                <div
                  key={index}
                  className="col-lg-3 col-md-6"
                  style={{ marginBottom: "20px" }}
                >
                  <div
                    className={styles.pricingCard}
                    style={{ borderColor: plan.color, ...cardStyle }} // Apply cardStyle here
                  >
                    <div
                      className={styles.header}
                      style={{ background: headerGradient }} // Apply unique gradient to header
                    >
                      <div className={styles.tierShape}></div>
                      <h3 style={headerStyle}>{plan.tier}</h3> {/* Apply headerStyle here */}
                    </div><br/>
                    <div 
                      className={styles.body} 
                      style={{ background: gradient }} // Apply unique gradient
                    >
                      <p style={{ fontSize: "20px", fontWeight: "bold" }}>{plan.price}</p> {/* Increase size and weight of price */}
                      <h6>TEACHERS</h6>
                      <ul>
                        {plan.teachers.map((item, i) => (
                          <li key={i} className={i % 2 === 0 ? styles.tick : styles.cross}>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <h6>ACADEMICS</h6>
                      <ul>
                        {plan.academics.map((item, i) => (
                          <li key={i} className={i % 2 === 0 ? styles.tick : styles.cross}>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <h6>TOOLS & LEARNING MATERIAL</h6>
                      <ul>
                        {plan.portalAccess.map((item, i) => (
                          <li key={i} className={i % 2 === 0 ? styles.tick : styles.cross}>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <h6>SCHEDULING</h6>
                      <ul>
                        {plan.scheduling.map((item, i) => (
                          <li key={i} className={i % 2 === 0 ? styles.tick : styles.cross}>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <h6>DISCOUNTS</h6>
                      <p>{plan.discounts}</p>
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