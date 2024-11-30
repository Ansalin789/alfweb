import ConsenHead from "@/src/ConsenHead";
import "@/styles/globals.css";
import { Fragment, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const App = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once
    });

    // Set a timeout to simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    // Cleanup the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <Fragment>
      <ConsenHead />
      {!loading && <Component {...pageProps} />}
    </Fragment>
  );
};

export default App;
