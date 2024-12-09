import React from 'react';
import styles from "./Footer.module.css";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Left Column */}
        <div className={styles.footerSection}>
          <h3>DISCOVER</h3>
          <ul>
            <li><a href="about">About</a></li>
            <li><a href="blog">Blog</a></li>
            <li><a href="testimonials">Testimonials</a></li>
            <li><a href="career">Careers</a></li>
            <li><a href="freek">FAQs</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
          <br/>
          <h3>COURSES</h3>
          <ul>
            <li><a href="Quran">Qur'an Memorization</a></li>
            <li><a href="tajweed">Learn the Arabic Language</a></li>
            <li><a href="arabic">Arabic Course (UAE Schools)</a></li>
          </ul>
        </div>

        {/* Center Column */}
        <div className={styles.footerSection} style={{paddingLeft:'40px'}}>
          <h3 style={{paddingLeft:'89px'}}>HELP CENTER</h3>
          <p style={{paddingLeft:'55px'}}>UK +44 20 4577 1227<br />USA +1 85 5442 3380</p>
          <p>Email: contact@alfurqan.academy</p>
          <br/>
          <br/>
          <h3 style={{paddingLeft:'64px'}}>CONNECT WITH US</h3>
          <div className={styles.socialIcons}>
  <a href="#"><img src="/assets/icons/1.png" alt="WhatsApp" style={{height:'40px'}} /></a>
  <a href="#"><img src="/assets/icons/2.png" alt="Facebook" style={{height:'40px'}} /></a>
  <a href="#"><img src="/assets/icons/3.png" alt="Twitter" style={{height:'40px'}}/></a>
  {/* <a href="#"><img src="/assets/icons/1.jpg" alt="" style={{height:'50px'}}/></a> */}
  <a href="#"><img src="/assets/icons/5.png" alt="YouTube" style={{height:'40px'}}/></a>
  <a href="#"><img src="/assets/icons/6.png" alt="YouTube" style={{height:'35px',marginTop:'2px'}}/></a>
  <a href="#"><img src="/assets/icons/4.png" alt="YouTube" style={{height:'40px'}}/></a>



</div>
          <br/>
          <br/>
          
          <div>
          <a href="#"><Image src="/assets/img/logo-white.png" alt="" width={70} height={90} style={{ marginLeft: '110px' }} /></a>
          <p style={{paddingLeft:'66px',fontSize:'12px'}}>© Furqan Academy LTD</p>
          <p style={{paddingRight:'20px',fontSize:'12px'}}>128,City Road,London,ECIV 2NX,United Kingdom</p>
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.footerSection} style={{paddingLeft:'70px'}}>
          <h3 style={{paddingLeft:'110px'}}>LET'S STAY IN TOUCH</h3>
          <input
  type="email"
  className={styles.emailInput}
  style={{
    marginLeft: '58px',
    '::placeholder': {
      fontSize: '12px',
      color: '#aaa',
    },
  }}
  placeholder="Type your Email Address"
/>

          <button className={styles.btn}>Submit</button>
          <h3 style={{marginTop:'60px',paddingLeft:'120px'}}>Download Our App</h3>
          <div className={styles.appLinks}>
            <a href="#"><img src="/assets/icons/fftt2.png" alt=""  height={50}/></a>
            <a href="#"><img src="/assets/icons/fftt1.png" alt=""  height={50}/></a>
          </div>
          <br/>
          <br/>
          <div className={styles.app}>
            <a href="#"><img src="/assets/icons/fftt7.png" alt="App Store" height={70} width={190}/></a>
            <a href="#"><img src="/assets/icons/fftt6.png" alt="Google Play" height={60} width={160}/></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <p>©2024 Al Furqan Academy - All Rights Reserved</p>
        <div className={styles.legalLinks}>
          <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
