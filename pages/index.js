import Counter from "@/src/components/Counter";
import Layout from "@/src/layout/Layout";
import { brandListProps, caseStudyProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  brandListProps2,
  heroSlider,
  testimonial_list_slider,
} from "@/src/sliderProps";
import { Card } from "react-bootstrap";

import Process from "@/src/components/Process";
import CTA from "@/src/components/CTA";
import ProgressBar from "@/src/components/ProgressBar";
import Testimo from "@/src/components/TestimonialComponent";
import Pprocess from "@/src/components/Pprocess";
import Banner from "@/src/components/Banner";
import BannerSlider from "@/src/components/BannerSlider";
import TestimonialComponent from "@/src/components/TestimonialComponent";
import Faqs from "@/src/components/Faqss";

const Index = () => {
  return (
    <Layout footer={1} >
      {/*==================================================*/}
      {/* Start consen slider Area */}
      {/*==================================================*/}
      <Swiper {...heroSlider} className="banner-list">
        <SwiperSlide>
          <div className="banner-area d-flex align-items-center">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-12">
                  <div className="banner-content">  
                    <h3> DESIGNING FOR THE FUTURE</h3>
                    <h1> Arabic Quran Mastery </h1>
                   <p style={{fontSize:'20px'}}>Mastering Arabic and understanding the Quran demand structured study and consistent effort to deepen your connection.</p>
                  </div>
                  <div className="banner-button">
                    <Link legacyBehavior href="/contact">
                      <a> Join Us Now </a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 ">
                  <div className="banner-year-thumb rotateme">
                    <img src="" alt />
                  </div>
                  <div className="banner-thumb">
                    <img src="assets/img/banner img.png" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-area style-two d-flex align-items-center">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-12">
                <div className="banner-content">  
                    <h3> DESIGNING FOR THE FUTURE</h3>
                    <h1>           Welcome to Our Academy
                    </h1>
                   <p style={{fontSize:'20px'}}>Let's Learn together Quran and Arabic Knowledge doesn’t come but you have to go to it. </p>
                  </div>
                  <div className="banner-button">
                    <Link legacyBehavior href="/contact">
                      <a> Join Us Now</a>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-5 col-md-6 ">
                  <div className="banner-year-thumb rotateme">
                    <img src="" alt />
                  </div>
                  <div className="banner-thumb">
                    <img src="assets/img/2 img.png" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper> 
      {/*==================================================*/}
      {/*End consen slider Area  */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen feature Area */}
      {/*==================================================*/}

      <br/> <br/>

{/* <Banner /> */}
      <br/>   <br/><br/>
      <div className="container pt-40" data-aos="fade-up">
      <div className="row">
            <div className="col-lg-8 col-md-6">
              <div className="consen-section-title  pb-50 mb-1">
                <h5>Find your Path </h5>
                <h2> "Empower Your Faith Through Learning" </h2>
              </div>
            </div>
          </div>
      </div>



      <div className="feature-area" data-aos="fade-up"> 
        <div className="container">
          <div className="row feature-bg">
       
            <div className="col-lg-4 col-md-6">
              <div className="single-feature-box">
                <div className="feature-box-inner" >
                  {/* <div className="feature-icon1">
                    <img src="assets/img/art.png"  height={70}alt />
                  </div> */}
                  <div className="feature-title">
                    <h2> Quran </h2>
                  </div>
                  <div className="feature-text11">
                    <p>
                    <div className="about-button">
                {/* <Link legacyBehavior href="/contact">
                  <a>
                    {" "}
                    Learn More <i className="bi bi-plus" />{" "}
                  </a>
                </Link> */}
              </div>
                    </p>
                  </div>
                  <div className="feature-bar" />
                </div>
                {/* feature back */}
                <div className="consen-feature-back">
                  <div className="feature-back-title">
                    <h3> Quran </h3>
                    <h2> Quran Course</h2>
                  </div>
                  <div className="feature-back-icon" style={{marginTop:'140px'}}>
                    <a href="/arabic"></a>
                    <div className="feature-text">
                    <p style={{color:'black'}}>
                      {" "}
                      Quranic studies is the academic application of a diverse set of disciplines to study the Quran. {" "}
                    </p>
                  </div>
                  </div>
                  <div className="about-button" style={{marginTop:'-30px'}}>
                <Link legacyBehavior href="/contact">
                  <a>
                    {" "}
                    Join Us <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature-box0">
                <div className="feature-box-inner0" >
                  {/* <div className="feature-icon1">
                    <img src="assets/img/art.png"  height={70}alt />
                  </div> */}
                  <div className="feature-title0">
                    <h2> Arabic </h2>
                  </div>
                  <div className="feature-text0">
                    <p>
                    <div className="about-button">
                {/* <Link legacyBehavior href="/contact">
                  <a>
                    {" "}
                    Learn More <i className="bi bi-plus" />{" "}
                  </a>
                </Link> */}
              </div>
                    </p>
                  </div>
                  <div className="feature-bar0" />
                </div>
                {/* feature back */}
                <div className="consen-feature-back0">
                  <div className="feature-back-title0">
                    <h3> Arabic </h3>
                    <h2> Arabic Course</h2>
                  </div>
                  <div className="feature-back-icon0" style={{marginTop:'140px'}}>
                    <a href="/arabic"></a>
                    <div className="feature-text110">
                    <p style={{color:'black'}}>
                      {" "}
                      Arabic courses can teach you the basics of the language, including the alphabet, vocabulary, and culture.{" "}
                    </p>
                  </div>
                  </div>
                  <div className="about-button" style={{marginTop:'-30px'}}>
                <Link legacyBehavior href="/contact">
                  <a>
                    {" "}
                    Join Us <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-feature-box1">
                <div className="feature-box-inner1" >
                  {/* <div className="feature-icon1">
                    <img src="assets/img/art.png"  height={70}alt />
                  </div> */}
                  <div className="feature-title1">
                    <h2> Islamic Studies</h2>
                  </div>
                  <div className="feature-text1">
                    <p>
                    <div className="about-button">
                {/* <Link legacyBehavior href="/contact">
                  <a>
                    {" "}
                    Learn More <i className="bi bi-plus" />{" "}
                  </a>
                </Link> */}
              </div>
                    </p>
                  </div>
                  <div className="feature-bar1" />
                </div>
                {/* feature back */}
                <div className="consen-feature-back1">
                  <div className="feature-back-title1">
                    <h3> Islamic </h3>
                    <h2>  Islamic Studies</h2>
                  </div>
                  <div className="feature-back-icon1" style={{marginTop:'140px'}}>
                    <a href="/arabic"></a>
                    <div className="feature-text111">
                    <p style={{color:'black'}}>
                      {" "}
                      Islamic studies is an academic discipline that examines the past and future of Islam and the Islamic world.{" "}
                    </p>
                  </div>
                  </div>
                  <div className="about-button" style={{marginTop:'-30px'}}>
                <Link legacyBehavior href="/contact">
                  <a>
                    {" "}
                    Join Us <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
                </div>
              </div>
            </div>
            <div className="about-button " style={{marginLeft:'900px'}}>

            <Link legacyBehavior href="/contact">
                  <a>
                    {" "}
                    Start Your Journey <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
                </div>
            {/* feature shape */}
            {/* <div className="feature-shape bounce-animate2">
              <img src="assets/images/resource/all-shap.png" alt />
            </div> */}
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen feature Area */}
      {/*==================================================*/}


   {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      <div className="about-area" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="dreamit-about-thumb">
                <img src="assets/img/1 img.png" alt />
                {/* about-shape */}
                <div className="about-shape-thumb1 bounce-animate2">
                  <img src="assets/images/about/about-shape2.png" alt />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 ">
              <div className="consen-section-title white pb-10">
                <h2> Enhancing Your Mastery of</h2>
                <h2>
                  {" "}
                  Arabic <span> and the Quran</span>
                </h2>
                <p>
                “Begin a transformative journey to achieve fluency in Arabic and deepen your comprehension of the Quran. Discover the beauty and profound wisdom of both, enhancing your personal and spiritual growth as you connect more deeply with your faith.”                </p>
              </div>
              <div className="lines style-two pb-15">
                <div className="line" />
              </div>
              <div className="dreamit-icon-title">
                <h4>
                  {" "}
                  Our path began in  <span>2022 </span> {" "}
                </h4>
              </div>
              <div className="dreamit-icon-list">
                <ul>
                  <li>
                    <i className="flaticon-tick" />{" "}
                    <span> 	We build lasting relationships based on Islamic values. </span>
                  </li>
                  <li>
                    <i className="flaticon-tick" />{" "}
                    <span>
                      {" "}
                      	We deliver learning that combines academic and spiritual growth.                     </span>
                  </li>
                  <li>
                    <i className="flaticon-tick" />{" "}
                    <span>  	We focus on traditional knowledge for success in both worlds. </span>
                  </li>
                  
                   <p style={{color:'white',padding:"20px",fontSize:'19px',paddingTop:'30px'}}>"Join us to nurture academic and spiritual growth through Islamic values"</p>
                </ul>
              </div>
              <div className="about-button mb-7" style={{marginTop:'-25px'}}>
                <Link legacyBehavior href="/contact">
                  <a>
                    {" "}
                    Enroll Now <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div>
            {/* about thumb */}
            {/* <div className="about-shape-thumb2 bounce-animate4">
              <img src="assets/images/resource/lamp.png"  height={150}alt />
            </div> */}
          </div>
         
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
    {/* <div className="ceo-cod-area" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 ">
              <div className="consen-section-title">
                <h2> What Say Our CEO, About</h2>
                <h2>
                  {" "}
                  Alfurqan <span> Academy </span>
                </h2>
                <div className="lines style-three pt-20 pb-10">
                  <div className="line" />
                </div>
                <p className="about-text">
                  {" "}
                  We are committed to renewing the educational journey for our students, helping them build a strong foundation that fosters personal growth and spiritual development.{" "}
                </p>
                <p className="about-text2">
                We consistently strive for excellence by enhancing our teaching methods with modern technology while remaining true to the core values of our rich tradition. Our multidisciplinary approach ensures that every student receives an education that is both comprehensive and accessible, creating a lasting impact on their journey toward fluency and deeper understanding.{" "}
                </p>
              </div>
              <div className="dreamit-ceo-title">
                <h4>Muhammad Al-Farooq </h4>
                <span>SEO &amp; Founder</span>
              </div>
              <div className="about-button">
                <Link legacyBehavior href="/about">
                  <a>
                    {" "}
                    Clients Review <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="dreamit-about-thumb1">
                <img src="assets/img/abo.png" alt />
              </div>
              <div className="about-shape-box">
                <div className="about-shape-thumb bounce-animate">
                  <img src="assets/images/about/ab-shape.png" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>   */}




 <CTA />

      {/*==================================================*/}
      {/* End consen about Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen case study Area */}
      {/*==================================================*/}
      
      <div className="about-area-banner pt-1" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 ">
              <div className="consen-section-title white pb-10">
                <h2>
                  {" "}
                </h2>
              </div>
              
            </div>
          </div>
          <div className="row counter-vip">
            <div className="col-lg-12">
              <div className="couter-top-title">
                <h3>  Finished this Achivement in 02+ Years </h3>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={66} />
                  </h4>
                  <p>Countries reached </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={100} />
                  </h4>
                  <span>+</span>
                  <p>Enrolled students </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={15} />
                  </h4>
                  <span>+</span>
                  <p>Expert team members </p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="counter-single-box">
                <div className="counter-title">
                  <h4>
                    <Counter end={99} />
                  </h4>
                  <span>%</span>
                  <p>Satisfaction rate </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen case study Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen process Area */}
      {/*==================================================*/}
      <div className="process-area" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 pr-5">
              <div className="row process-bg">
                {/* <div className="col-sm-6 pl-10 pr-10">
                  <div className="process-single-box">
                    <div className="process-number">
                      <span>1</span>
                    </div>
                    <div className="process-title">
                      <h3>
                      Flexible  <span> Schedule </span>
                      </h3>
                      <p>We managed to provide flexible schedule as per your convenience and requirements.</p>
                    </div>
                  </div>
                </div> */}
                {/* <div className="col-sm-6 pl-10 pr-10">
                  <div className="process-single-box upper">
                    <div className="process-number">
                      <span>2</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        {" "}
                        Online  <span> Tutors </span>
                      </h3>
                      <p>Our tutors are well qualified from different part of the world</p>
                    </div>
                  </div>
                </div> */}
                <div className="col-sm-6 pl-10 pr-10" data-aos="fade-up">
                  <div className="process-single-box upper1">
                    <div className="process-number">
                      <span>1</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        {" "}
                        One-One  <span> Sessions</span>
                      </h3>
                      <p>
                      We deeply value and respect the privacy of our esteemed students at all times, ensuring confidentiality.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 pl-10 pr-10" data-aos="fade-up">
                  <div className="process-single-box upper2">
                    <div className="process-number">
                      <span>2</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        {" "}
                        
                        Online Portal   <span>access </span>
                      </h3>
                      <p>
                      Provides live sessions, recorded lectures,  interactive materials, accessible learning experience.</p>    </div>
                  </div>
                </div>

                <div className="col-sm-6 pl-10 pr-10" data-aos="fade-up">
                  <div className="process-single-box">
                    <div className="process-number">
                      <span>3</span>
                    </div>
                    <div className="process-title">
                      <h3>
                      Academic  <span> Advisors </span>
                      </h3>
                      <p>Our experienced Academic Advisors are available anytime to help you in planning your Quranic studies.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 pl-10 pr-10" data-aos="fade-up">
                  <div className="process-single-box upper">
                    <div className="process-number">
                      <span>4</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        {" "}
                        Family  <span> Discount </span>
                      </h3>
                      <p>
                      Larger families receive a 10% discount for three or more students studying Quran together.                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 pl-10 pr-10" data-aos="fade-up">
                  <div className="process-single-box">
                    <div className="process-number">
                      <span>5</span>
                    </div>
                    <div className="process-title">
                      <h3>
                      Flexible  <span> Schedule </span>
                      </h3>
                      <p>We managed to provide flexible schedule as per your convenience and requirements.</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 pl-10 pr-10" data-aos="fade-up">
                  <div className="process-single-box upper">
                    <div className="process-number">
                      <span>6</span>
                    </div>
                    <div className="process-title">
                      <h3>
                        {" "}
                        Online  <span> Tutors </span>
                      </h3>
                      <p>We choose experienced native Arabic tutors from top universities to guide every course.</p>
                    </div>
                  </div>
                </div>


                
                <div className="process-shape">
                  {/* <div className="process-thumb">
                    <img src="assets/images/resource/process-shape.png" alt />
                  </div> */}
                  <div className="process-thumb1">
                    <img src="assets/images/resource/dreamit-shape.png" alt />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 pl-5" data-aos="fade-up">
              <div className="consen-section-title">
                <h5> Why Al Furqan </h5>
                <h3>We have  flexible online study courses suitable for all family members. </h3>
                <br/>
                <h3>
                  {" "}
                  Over 2000+ <span> Students </span>
                </h3>
                {/* <p className="about-text1">
                  {" "}
                  Appropriately enhance principle-centered innovation rather
                  than high standards in platforms. Credibly orchestrate
                  functional.{" "}
                </p> */}
              </div>
              <div className="dreamit-icon-box">
                <div className="dreamit-icon-list">
                  <ul>
                    <li>
                      <i className="bi bi-arrow-right-circle" />{" "}
                      <span style={{color:'black'}}> Comprehension Arabic Courses</span>
                    </li> <br/>
                    <li>
                      <i className="bi bi-arrow-right-circle" />{" "}
                      <span style={{color:'black'}}> Arabic for Quran understanding </span>
                    </li> <br/>
                    <li>
                      <i className="bi bi-arrow-right-circle" />{" "}
                      <span style={{color:'black'}}>Flexible Learning Options</span>
                    </li> 
                     <li>
                      <i className="bi bi-arrow-right-circle" />{" "}
                      <span style={{color:'black'}}> Professionally grow cutting-edge paradigms </span>
                    </li>
                    <li>
                      <i className="bi bi-arrow-right-circle" />{" "}
                      <span style={{color:'black'}}> Enhance your learning with our adaptable schedules </span>
                    </li>
                    <li>
                      <i className="bi bi-arrow-right-circle" />{" "}
                      <span style={{color:'black'}}> Enabling professional growth in a supportive online environment </span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* progress bar */}
              <div className="progress-box">
                <ProgressBar value={85} />
                <div className="circle-progress-title">
                  <h4>
                    {" "}
                    Students <br /> Satisfaction{" "}
                  </h4>
                </div>
                <div className="extra-progress">
                  <ProgressBar value={95} />
                  <div className="circle-progress-title">
                    <h4>
                      {" "}
                      TEACHERS <br /> Satisfaction{" "}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="about-button">
                <Link legacyBehavior href="/contact">
                  <a>
                    {" "}
                    Get Started <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
           

            </div>  
                
            {/* <div className="col-lg-6 col-md-12 pl-lg-50">
              <div className="consen-section-title mt-4 mt-lg-0">
                <h2> What We Provide </h2>
                <h2>
                  {" "}
                  Arabic <span> Quaran </span>
                </h2>
              </div>
              <div className="lines style-three pt-30 pb-10">
                <div className="line" />
              </div>
              <div className="dreamit-smart-title">
                <h4>
                  {" "}
                  For Choose <span>Alfurqan</span> Before know who we are?{" "}
                </h4>
                <p>
                We have customized and flexible online study courses suitable for all family members. Also, we have an attractive and informative crash course for kids and teens
                </p>
              </div>
              <div className="col-lg-6 col-sm-6 pl-10 pr-10">
                  <div className="process-single-box">
                    <div className="process-number">
                      <span>6</span>
                    </div>
                    <div className="process-title">
                      <h3>
                      Academic  <span> Advisors </span>
                      </h3>
                      <p>Our experienced Academic Advisors are available anytime to help you in planning your Quranic studies.</p>
                    </div>
                  </div>
              </div>
              <div className="col-lg-6 col-sm-6 pl-10 pr-10">
                <div className="process-single-box upper">
                  <div className="process-number">
                    <span>5</span>
                  </div>
                  <div className="process-title">
                    <h3>
                      {" "}
                      Family  <span> Discount </span>
                    </h3>
                    <p>
                    "Learning Quran is easier for larger families with our 10% discount for 3 or more students. Families studying together excel in Quran."</p>
                  </div>
                </div>
              </div>
              
              <div className="about-button">
                <Link legacyBehavior href="#">
                  <a>
                    {" "}
                    More About <i className="bi bi-plus" />{" "}
                  </a>
                </Link>
              </div>
            </div> */}
          </div>
          {/* <div className="row pt-50">
            <div className="col-lg-12">
              <div className="dreamits-top-title">
                <h3> More Then 5K+ Brands with work Consen</h3>
              </div>
            </div>
          </div> */}
       
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen process Area */}
      {/*==================================================*/}

 
 
       {/*==================================================*/}
      {/* Start consen process Area */}
      {/*==================================================*/}
      {/* <div className="process-area style-two pt-5 pb-5" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center ">
            <div className="col-lg-5 col-md-6">
              <div className="consen-section-title white pb-4 pb-lg-5 ">
                <h5> process </h5>
                <h2> We follow some easy steps to </h2>
                <h2>
                  {" "}
                  Easy <span> Learning </span>
                </h2>
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="process-text" style={{background:'#000', padding:'50px', borderRadius:'110px 10px 110px 10px', opacity:'0.6', color:'#fff',textAlign:'center'}}>
                <p style={{fontSize:'20px'}}>
                  {" "}
                 <span style={{fontWeight:'bolder',color:'#e63946'}}> Break Down Concepts:</span> Start by breaking down complex topics into smaller, manageable parts to understand them better.
                 <br/><br/><span style={{fontWeight:'bolder',color:'#e63946'}}> Practice Regularly:</span> Consistent practice helps reinforce what you learn and builds muscle memory, especially in coding.
                 <br/> <br/><span  style={{fontWeight:'bolder',color:'#e63946'}}> Seek Feedback:</span> Regular feedback from peers or mentors can help identify areas of improvement and accelerate your learning process.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="process-shape">
            <div className="service-shape">
              <img src="assets/images/resource/all-shape3.png" alt />
            </div>
            <div className="process-shape-thumb bounce-animate2">
              <img src="assets/images/resource/all-shap.png" alt />
            </div>
          </div>
        </div>
      </div> 
      


{/* <div className="social-media-marketing-services" data-aos="fade-up">
  <div className="container">
    <h2 className="text-center" style={{color:'#E63946'}}>Our Process</h2>
    <p className="text-center">A streamlined approach to social media marketing success</p>
 
    
 </div>
</div> */}

<div
  className="social-media-marketing-services"
  data-aos="fade-up"
  style={{
    backgroundColor: '#050A1E',
    position: 'relative',
    padding: ' 20px',
    color: '#FFFFFF',
    overflow: 'hidden',
    borderRadius:'200px 0px 200px 0px',
  }}
>
  {/* Outer Top Curve */}
  <div
    style={{
      position: 'absolute',
      top: '-50px',
      left: '0',
      width: '100%',
      height: '150px',
      // background: 'linear-gradient(135deg, #457B9D, #1D3557)',
      clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
      zIndex: 1,
    }}
  ></div> 

  {/* Outer Bottom Wave */}
  <svg
    style={{
      position: 'absolute',
      bottom: '-50px',
      left: '0',
      width: '100%',
      zIndex: 1,
    }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
  >
    <path
      fill="#E63946"
      fillOpacity="1"
      d="M0,96L120,122.7C240,149,480,203,720,213.3C960,224,1200,192,1320,176L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
    ></path>
  </svg>

  {/* Outer Side Accent */}
  <div
    style={{
      position: 'absolute',
      top: '50%',
      left: '-20px',
      width: '50px',
      height: '300px',
      background: 'linear-gradient(180deg, #A8DADC, transparent)',
      borderRadius: '25px',
      transform: 'rotate(-45deg)',
      zIndex: 1,
    }}
  ></div>

  {/* Main Content */}
  <div
    className="container"
    style={{
      position: 'relative',
      zIndex: 2,
      // backgroundColor: '#1D3557',
      borderRadius: '50px',
      padding: '10px 0px 40px',
      boxShadow: '0px 10px 30px rgba(0,0,0,0.2)',
    }}
  >
    <h2 className="text-center" style={{ color: '#E63946', marginBottom: '20px' }}>
      How to Start
    </h2>
    <Pprocess />
  </div>
</div>

<div data-aos="fade-up" >
  <div className="back" style={{height: '755px' }}>
    
    <TestimonialComponent />
  </div>
</div>



      {/*==================================================*/}
      {/* End consen process Area */}
      {/*==================================================*/}
            {/*==================================================*/}
      {/* Start consen Testimonial Area */}
      {/*==================================================*/}
      <div className="testimonial-area" data-aos="fade-up">
        <div className="container">
          <div className="row testi-rotate align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="consen-section-title white pb-50">
                <h5> Testimonials </h5>
                <h2>  Feedback from our </h2>
                <h2>
                  {" "}
                  Students around <span> the world </span>
                </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="row">
                <div className="col-6">
                  <div className="testi-counter-box upper">
                    <div className="testi-counter-title">
                      <h3 className="counter">
                        {" "}
                        <Counter end={1372} />{" "}
                      </h3>
                      <span>+</span>
                      <p> Happy Students </p>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="testi-counter-box">
                    <div className="testi-counter-title">
                      <h3 className="counter">
                        {" "}
                        <Counter end={100} />{" "}
                      </h3>
                      <span>%</span>
                      <p> Satisfaction Rate </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testi-shape-thumb1 rotateme">
              <img src="assets/images/resource/testimonial-map.png" alt />
            </div>
          </div>
          <div className="row">
            <Swiper
              {...testimonial_list_slider}
              className="testimonial_list owl-carousel"
            >
              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/img/boy.png"  height={50} alt />
                      </div>
                      <div className="quote-title">
                        <h4>Philip Anthorpy</h4>
                        <p>UI Designer</p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “Holisticly pursue market-more synerg through innovative
                        paradi. Enthusia productivate media”.
                      </p>
                    </div>
                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />

                    
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/img/girl.png" alt />
                      </div>
                      <div className="quote-title">
                        <h4> Shilpa Shethy </h4>
                        <p> CEO, Founder </p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “Holisticly pursue market-more synerg through innovative
                        paradi. Enthusia productivate media”.
                      </p>
                    </div>
                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/img/boy.png"  height={50} alt />
                      </div>
                      <div className="quote-title">
                        <h4> David Alexon </h4>
                        <p> MH Manager </p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “Holisticly pursue market-more synerg through innovative
                        paradi. Enthusia productivate media”.
                      </p>
                    </div>
                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-half" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/img/girl.png" alt />
                      </div>
                      <div className="quote-title">
                        <h4> Shilpa Shethy </h4>
                        <p> CEO, Founder </p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “Holisticly pursue market-more synerg through innovative
                        paradi. Enthusia productivate media”.
                      </p>
                    </div>
                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />

                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/img/boy.png" height={50} alt />
                      </div>
                      <div className="quote-title">
                        <h4> David Alexon </h4>
                        <p> MH Manager </p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “Holisticly pursue market-more synerg through innovative
                        paradi. Enthusia productivate media”.
                      </p>
                    </div>
                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-half" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/img/girl.png" alt />
                      </div>
                      <div className="quote-title">
                        <h4>Philip Anthorpy</h4>
                        <p>UI Designer</p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “Holisticly pursue market-more synerg through innovative
                        paradi. Enthusia productivate media”.
                      </p>
                    </div>
                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-half" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="pr-1">
                <div className="testimonial-single-box">
                  <div className="testimonial-content1">
                    <div className="single-quote-icon">
                      <div className="quote-thumb">
                        <img src="assets/img/boy.png" alt height={50} />
                      </div>
                      <div className="quote-title">
                        <h4> David Alexon </h4>
                        <p> MH Manager </p>
                      </div>
                    </div>
                    <div className="em-testimonial-text">
                      <p>
                        “Holisticly pursue market-more synerg through innovative
                        paradi. Enthusia productivate media”.
                      </p>
                    </div>
                    <div className="em-testi-start-icon">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-half" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <div className="owl-dots"></div>
            </Swiper>
            <div className="testi-shape">
              <div className="testi-shape-thumb">
                <img src="assets/images/resource/all-shape5.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>


    
      {/*==================================================*/}
      {/* End consen Testimonial Area */}
      {/*==================================================*/}
       {/*==================================================*/}
      {/* Start faq Area */}
      {/*==================================================*/}
      {/* <br/><br/><br/> */}
    


      <div className="faq-sectiions" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="consen-section-title white pb-1 mb-1">
                <h5 className="text-black"> process </h5>
                <h2 style={{color:'black'}} >
                  {" "}
                  Freequently Asked <span> Question </span>
                </h2>
                <p className="study-text1" style={{color:'black'}}>
                  {" "}
                  Appropriately enhance principle-centered innovation rather
                  than high standards in platforms. Credibly orchestrate
                  functional.{" "}
                </p>
              </div>
              <div className="dreamit-icon-list">
                <ul style={{color:'black'}}>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{" "}
                    <span style={{color:'black'}}> Communicate orthogonal process </span>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{" "}
                    <span style={{color:'black'}}> Professionally grow cutting-edge paradigms </span>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{" "}
                    <span style={{color:'black'}}> Communicate orthogonal process </span>
                  </li>
                  <li>
                    <i className="bi bi-arrow-right-circle" />{" "}
                    <span style={{color:'black'}}> Professionally grow cutting-edge paradigms </span>
                  </li>
                </ul>
              </div>
              <div className="why-choose-button">
                <Link legacyBehavior href="/about">
                  <a>
                    {" "}
                   More About{" "} <i className="bi bi-plus" /> 
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 pl-0">
              {/* Start Accordion */}
              <div className="tab_container pl-30 pt-20">
              <div
                className="accordion"
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                }}
              >
                <ul>
                  <li>
                    <a
                      href="#"
                      style={{
                        padding: "16px 20px 16px 30px",
                        borderRadius: "0",
                        backgroundColor: "#1f2932",
                        border: "none",
                        color: "white",
                        textDecoration: "none",
                        display: "block",
                      }}
                    >
                      More Faqs
                    </a>
                   
                  </li>
                  {/* Add more FAQ items as needed */}
                </ul>
              </div>
                <Faqs />
              </div>
              {/* End Accordion */}
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End consen faq Area */}
      {/*==================================================*/}
     
    </Layout>
  );
};
export default Index;






