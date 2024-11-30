import DefaultHeader from "./DefaultHeader";
import Header2 from "./Header2";
const Header = ({ header }) => {
  switch (header) {
    case 1:
      return <Header2 />;
    case 4:
      return <LandingHeader />;

    default:
      return <Header2 />;
  }
};
export default Header;
