import React, { useEffect } from "react";
import dynamic from "next/dynamic";

// Dynamically import ScrollReveal to disable server-side rendering
const ScrollReveal = dynamic(() => import("scrollreveal"), { ssr: false });

const ScrollRevealComponent = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensure ScrollReveal is used only in the browser environment
      const sr = ScrollReveal();

      sr.reveal(".first", {
        delay: 200,
        duration: 1000,
        origin: "bottom",
        distance: "50px",
      });

      sr.reveal(".second", {
        delay: 400,
        duration: 1000,
        origin: "bottom",
        distance: "50px",
      });

      sr.reveal(".third", {
        delay: 600,
        duration: 1000,
        origin: "bottom",
        distance: "50px",
      });
    }
  }, []);

  return (
    <div>
      <div className="first">First element to reveal</div>
      <div className="second">Second element to reveal</div>
      <div className="third">Third element to reveal</div>
    </div>
  );
};

export default ScrollRevealComponent