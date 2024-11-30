import React from 'react'
import Breadcumb from "@/src/components/Breadcumb";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import Faqs3 from '@/src/components/Faqs3';
import Tabs from '@/src/components/Tabs';

const Arabic = () => {
  
    return (
      <>
      <style>{`
      @media (max-width: 768px) {
     .service-details-box {
    background-image: url(../img/g1.png);
    background-size: cover;
    background-position: center;
    padding: 20px 25px 13px;
    border-radius: 4px;
    margin-bottom: 30px;
    margin-right: 5px;
    padding-right: 90px;
    height: 400px;
}
      
      `}

      </style>
        <Layout>
          <Breadcumb pageName={"Course"} />
          {/*==================================================*/}
          {/* Start consen service details Area */}
          {/*==================================================*/}
          <div className="service-detials-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="row">
                    <div className="col-lg-12 col-sm-12">
                      <div className="consen-service-details-box" data-aos="fade-up">
                        {/* <div className="consen-service-thumb">
                          <img src="assets/images/resource/srd1.jpg" alt="Course Image" />
                        </div> */}
                        
    
                          <div className="row">
                            <div className="col-lg-6 col-md-12">
                            <div className="consen-service-thumb">
                                <img src="assets/img/course1a.png " alt="Course Image" />
                            </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                            <div className="consen-service-thumb">
                                <img src="assets/img/course1b.png" alt="Course Image" />
                            </div>
                            </div>
                          </div>

                        <div className="service-details-content">
                          <div className="service-page-title">
                            <h1> Course Description</h1>
                          </div>
                          <div className="serivce-details-desc text-justify">
                              <p>
                              Our Arabic language curriculum focuses on conversation, fundamental grammar, basic reading, and writing skills, including the alphabet. The program covers conversational practice in Gulf and other Arabic dialects and is based on Standard Arabic.
                           <br/>   Arabic language education is taught in accordance with the UAE National Curriculum to the fullest extent possible. It takes a novel approach, emphasizes inquiry-based learning, and places a priority on experiences that are pertinent, interesting, and worthwhile.
                             </p>
                              <p className="pb-35"><br/>
                              We offer three main subjects in Arabic studies

                                 <ul className='pl-3'>
                                  <li>Arabic Studies
                                  </li>
                                  <li>Islamic for Muslims Studies</li>
                                  <li>Social Studies</li>
                                </ul>
                              </p>
                            </div>
                        </div>
                      </div>
                    </div>
                      
                    <div className="  col-lg-6 col-sm-6"  data-aos="fade-left">
                      <div className="service-details-box">
                        <div className="service-details-title"><br/>
                          <h4>Level 1</h4>
                        </div>
                        <div className="services-detials-desc">
                          <p>
                          The minimum age is 4+ years.

                          </p>
                        </div>
                      </div>
                    </div>
    
                    <div className="col-lg-6 col-sm-6" data-aos="fade-right">
                      <div className="service-details-box">
                        <div className="service-details-title"><br/>
                          <h4>Level 2</h4>
                        </div>
                        <div className="services-detials-desc">
                          <p>An ability to read words and sentences from Mus’haf is required.</p>
                        </div>
                      </div>
                    </div>
    
                    <div className="  col-lg-6 col-sm-6"  data-aos="fade-left">
                      <div className="service-details-box">
                        <div className="service-details-title"><br/>
                          <h4>Level 3</h4>
                        </div>
                        <div className="services-detials-desc">
                        <p>
                            <ul>
                              <li>
                              Basic knowledge of Tajweed rules (Noon Saakin, Meem Saakin, Moodud, Qalqalah) and understanding of Arabic letters, their articulation points, and correct pronunciation are required.x  </li>
                             
                            </ul>
                          </p>
                        </div>
                      </div>
                    </div>
    
                    <div className="col-lg-6 col-sm-6" data-aos="fade-right">
                      <div className="service-details-box">
                        <div className="service-details-title"><br/>
                          <h4>Level 4</h4>
                        </div>
                        <div className="services-detials-desc">
                        <p>
                            <ul >
                              <li>
                              Solid knowledge of all rules of Tajweed is required.
                              </li>
                              <li>
                              An ability to apply and explain in detail all Tajweed rules when reading the Quran or listening to a recitation.
                              </li>
                              
                            </ul>
                          </p>
                        </div>
                      </div>
                    </div>
      
                  </div>
                </div>
    
               
              </div>
               <h3>Description</h3>
              <div className="col-lg-12 col-sm-6">
                <div className="service-details-box1" data-aos="fade-up">
                  <div className="service-details-title">
                    <h4>Level 1</h4>
                  </div>
                  <div className="services-detials-desc">
                    <p> Focus on mastering the letters of the Arabic Alphabet, including their sounds and shapes. Students train on distinguishing subtle differences between similar letters and their different forms depending on the position in the word. In addition, students can read words and sentences in full, thereby allowing them to read from the Quran (Mushaf) independently.</p>
                  </div>
                </div>
              </div>
      
              <div className="col-lg-12 col-sm-6">
                <div className="service-details-box1" data-aos="fade-up">
                  <div className="service-details-title">
                    <h4>Level 2</h4>
                  </div>
                  <div className="services-detials-desc">
                    <p> Covers the basic rules of Tajweed (i.e. proper recitation of the Quran), including Noon Saakin, Tanween, Meem, Saakin, and some rules of Moodud (extended sounds), Ghunnah (nasal sounds), and Qalqalah (echoing sounds).</p>
                                    </div>
                </div>
              </div>
             
              <div className="col-lg-12 col-sm-6">
                <div className="service-details-box1" data-aos="fade-up">
                  <div className="service-details-title">
                    <h4>Level 3
                    </h4>
                  </div>
                  <div className="services-detials-desc">
                   <p> Covers the complex rules of Tajweed in detail, including essential manners of reciting the Quran such as proper beginning and ending of a recitation, mandatory extensions and pauses during recitation, and letter-specific rules such as Izhaar and Ikhfa and relationship between them.</p>
                  </div>
                </div>
              </div>


              <div className="col-lg-12 col-sm-6">
                <div className="service-details-box1" data-aos="fade-up">
                  <div className="service-details-title">
                    <h4>Level 4</h4>
                  </div>
                  <div className="services-detials-desc">
                   <p> Is a detailed application of all rules of Tajweed on two parts of the Quran covering all verses including (جزء عمَّ) Juz’ Amma and (جزء تبارك) Juz Tabarak. Students at this level perfect their recitation, analyze words and explain the rules of Tajweed in detail. In addition, students learn interconnections between recitation and the meaning of Surah and its vocabulary. After the recitation program, Students will be eligible to apply for the Ijazah Program.
                    </p> 
                  </div>
                </div>
              </div><br/>

              <div className="col-lg-12 col-sm-6">
                <div className="service-details-box1" data-aos="fade-up">
                  <div className="service-details-title">
                    <h3>Basics of Recitation Elementary
                    </h3>
                    <h4>LEVELS: 2DURATION: 34</h4>
                  </div>
                  <div className="services-detials-desc">
                    <p>
                      <ul className='pl-3'>
                        <li>
                        Practice Ghunnah (nasal sounds) and Qalqalah (echoing sounds).
                        </li>
                        <li>
                        Apply different types of modood including Al-madd Al-lazim, Al-madd Al-wajib, and Al-madd Al-jayiz.
                        </li>
                        <li>
                        Study the pronunciation of letters and their essential vocal characteristics.
                        </li>
                        <li>
                        Practice online with your teacher and offline through our student portal using plenty of tailored examples and exercises.
                        </li>
                      </ul>
                    </p> 
                  </div>
                </div>
              </div><br/>
              
              <div className="col-lg-12 col-sm-6">
                <div className="service-details-box1" data-aos="fade-up">
                  <div className="service-details-title">
                    <h3>Basics of Reading Beginner

                    </h3>
                    <h4>LEVELS: 4DURATION: 35
                    </h4>
                  </div>
                  <div className="services-detials-desc">
                    <p>
                      <ul className='pl-3'>
                        <li>
                        Read and write the Arabic alphabet with its different shapes and forms.
                        </li>
                        <li>
                        Read the Uthmani Script of the Quran.
                        </li>
                        <li>
                        Distinguish sounds of all letters, including subtle differences.
                        </li>
                        <li>
                        Read Arabic words and sentences in full.
                        </li>
                        <li>
                        Practice online with your teacher and offline through our student portal using plenty of tailored examples and exercises.
                        </li>
                      </ul>
                    </p> 
                  </div>
                </div>
              </div><br/>

              <div className="col-lg-12 col-sm-6">
                <div className="service-details-box1" data-aos="fade-up">
                  <div className="service-details-title">
                    <h3>Rules of Tajweed Intermediate
                    </h3>
                    <h4>LEVELS: 4DURATION: 32
                    </h4>
                  </div>
                  <div className="services-detials-desc">
                    <p>
                      <ul className='pl-3'>
                        <li>
                        Study essential manners of reciting the Quran such as proper beginning and ending of a recitation including the rules of Al-Isti’aathah (أَعُوذُ باللَّهِ مِنَ الشَّيْطاَنِ الرَّجيم) and Al-Basmalah (بِسْمِ اللَّهِ الرَّحمنِ الرَّحِيمِ) .
                        </li>
                        <li>
                        Study Tajweed rules in-depth and in detail.
                        </li>
                        <li>
                        Practice the pronunciation of letters and their complete vocal characteristics.
                        </li>
                        <li>
                        Master mandatory extensions and pauses during recitation.
                        </li>
                      </ul>
                    </p> 
                  </div>
                </div>
              </div><br/>
              
              <div className="col-lg-12 col-sm-6">
                <div className="service-details-box1" data-aos="fade-up">
                  <div className="service-details-title">
                    <h3>Basics of Reading Beginner

                    </h3>
                    <h4>LEVELS: 4DURATION: 20

                    </h4>
                  </div>
                  <div className="services-detials-desc">
                    <p>
                      <ul className='pl-3'>
                        <li>
                        Master the recitation of ( جزء عمَّ) Juz Amma and (جزء تبارك) Juz Tabarak.
                        </li>
                        <li>
                        Identify all rules of recitation.
                        </li>
                        <li>
                        Recognize the places of the Waqf (the pause) and Ibtida (the beginning).
                        </li>
                        <li>
                        Learn the reason for the revelation.
                        </li>
                        <li>
                        Understand the vocabulary of the verses.
                        </li>
                        <li>
                        Understand the meaning of the surahs and their practical application in our daily lives.
                        </li>
                      </ul>
                    </p> 
                  </div>
                </div>
              </div>
              </div>
<br/>
<br/>
<Tabs />
              <br/> <br/>
              <div className="faq-area" data-aos="fade-up">
                <div className="container">
                  <div className="col-lg-12 col-md-12 pl-0 max-w-full">
                      <div className="tab_container">
                        <div className="consen-section-title white pb-40 mb-1">
                          <h5> FAQ </h5>
                          <h2> Frequently Asked <span> Question </span></h2>
                        </div>
                        <Faqs3 />                      
                        </div>
                    </div>
                  </div>
                </div>
                  </div>
          
                 
        </Layout>
        </>
      );
}

export default Arabic