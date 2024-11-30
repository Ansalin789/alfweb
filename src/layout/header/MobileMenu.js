import Link from "next/link";
import { Fragment, useState } from "react";

const MobileMenu = () => {
  const [toggle, setToggle] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [subMenus, setSubMenus] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeBtn = (value) => (value === activeMenu ? "-" : "+"),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" },
    setSub = (value, motherMenu) =>
      motherMenu === activeMenu && value == subMenus
        ? setSubMenus("")
        : setSubMenus(value),
    activeSub = (value) =>
      value === subMenus ? { display: "block" } : { display: "none" };
  return (
    <div className="mobile-menu-area d-sm-block d-md-block d-lg-none header____">
      <div className="mobile-menu mean-container">
        <div className="mean-bar">
          <a
            href="#nav"
            className={`meanmenu-reveal ${toggle ? "meanclose" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              "X"
            ) : (
              <Fragment>
                <span /> <span /> <span />
              </Fragment>
            )}
          </a>
          <nav className="mean-nav">
            <ul
              className="nav_scroll"
              style={{ display: toggle ? "block" : "none" }}
            >
              <li>
                <a href="/">Home </a>
                <ul className="sub-menu" style={activeLi("Home")}>
                  {/* Add submenu items here if needed */}
                </ul>
                
              </li>
              <li className="mean-last">
                <Link legacyBehavior href="/course">Course</Link>
              </li>
              <li className="mean-last">
                <Link legacyBehavior href="/pricing">Pricing</Link>
              </li>
              <li>
                <a href="#">Discover </a>
                <ul className="sub-menu" style={activeLi("Company")}>
                  <li>
                    <Link legacyBehavior href="about">About Us</Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="blog2-column">Blog</Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="">Teachers</Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="">Testimonials</Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="">Career</Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="">Faq</Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="contact">Contact Us</Link>
                  </li>
                </ul>
                <a
                  className="mean-expand"
                  href="#"
                  onClick={() => activeMenuSet("Company")}
                  style={{ fontSize: 18 }}
                >
                  {activeBtn("Company")}
                </a>
              </li>
              <li >
                <Link legacyBehavior href="contact">
                  <span>
                    <i className="fas fa-phone" /> +44 20 4577 1227
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mean-push" />
      </div>
    </div>
  );
};

export default MobileMenu;
