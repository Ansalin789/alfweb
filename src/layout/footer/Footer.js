import DefaultFooter from "./DefaultFooter";
import Footer1 from "./Footer1";
import Footer3 from "./Footer3";
const Footer = ({ footer }) => {
  switch (footer) {
  

    default:
      return <DefaultFooter />;
  }
};
export default Footer;
