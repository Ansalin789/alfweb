import { useState } from "react";
import { Accordion } from "react-bootstrap";

const faqsData = [
  {
    id: 1,
    title: "Is the ?",
    content: "Yes, our class schedule is  that work best for you.",
  },
  {
    id: 2,
    title: "How do I begin?",
    content: "Simply register on our website, and you'll receive an email with all the details to get started.",
  },
  {
    id: 3,
    title: "Are these classes pre-recorded?",
    content: "No, all our classes are live, offering real-time interaction with instructors.",
  },
  {
    id: 4,
    title: "Where is the headquarter of your business?",
    content: "Our headquarters are located in Coimbatore, India, but we operate globally.",
  },
];
const Faqs2 = () => {
  const [active, setActive] = useState(faqsData[0].id);
  return (
    <div id="tab1" className="tab_content">
      <Accordion
        defaultActiveKey={faqsData[0].id}
        as={"ul"}
        className="accordion"
      >
        {faqsData.map((faq) => (
          <li key={faq.id}>
            <Accordion.Toggle
              as="a"
              eventKey={faq.id}
              onClick={() => setActive(faq.id == active ? null : faq.id)}
              className={faq.id == active ? "active" : ""}
            >
              <span> {faq.title} </span>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={faq.id}>
              <p>
              {faq.content}
              </p>
            </Accordion.Collapse>
          </li>
        ))}
      </Accordion>
    </div>
  );
};
export default Faqs2;