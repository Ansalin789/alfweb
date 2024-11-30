import React from 'react'
import Breadcumb from "@/src/components/Breadcumb";
import Faqs1 from "@/src/components/Faqs1";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
import Faqs2 from '@/src/components/Faqs2';

const Quran = () => {
    return (
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
                              The Quran memorization course involves memorizing the entire book. An individual who has memorized the Quran is referred to as a “Hafiz” in the Arabic language. Reading and memorizing the Quran’s verses and Ayah are both considered to be practicing Hifz, which is the Arabic word for learning or memorization.

                              The Quran is the almighty Allah’s blessing that cannot be replaced by the entire universe, heavens and earth, and all creatures in between.

     </p>
                              <p className="pb-35"><br/>
                              A curriculum for memorization contains four Levels:
                                <ul className='p-4'>
                                  <li>In the Preliminary level, students will memorize the last 15 Surah of the Qur’an</li>
                                  <li>The Juz’ Amma will be memorized at the Beginner level.</li>
                                  <li>The Intermediate level will involve memorization of Juz’ Tabarak.</li>
                                  <li>An integrated program for memorization and revision of the entire Qur’an is available at the Advanced level.</li>
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
                          <p>The age requirement is 4+ years or older & student must pass a test proving his ability to read passages from the Qur’an (Mus’haf).</p>
                        </div>
                      </div>
                    </div>
    
                    <div className="col-lg-6 col-sm-6" data-aos="fade-right">
                      <div className="service-details-box">
                        <div className="service-details-title"><br/>
                          <h4>Level 2</h4>
                        </div>
                        <div className="services-detials-desc">
                          <p>A learner must pass an exam that verifies both his ability to read passages from the Qur’an and his knowledge of the Ghunnah and Qalqalah.</p>
                        </div>
                      </div>
                    </div>
    


                    <div className="  col-lg-6 col-sm-6"  data-aos="fade-left">
                      <div className="service-details-box">
                        <div className="service-details-title">
                          <h4>Level 3</h4>
                        </div>
                        <div className="services-detials-desc">
                        <p>
                            <ul>
                              <li>
                              A learner must pass an exam that verifies his ability to read Qur’anic text (Mus’haf).
                              </li>
                              <li>
                              The student is acquainted with the fundamentals of Tajweed (Noon Saakin-Meem Saakin-Mawdud-Qalqalah).
                              </li>
                            </ul>
                          </p>
                        </div>
                      </div>
                    </div>
    
                    <div className="col-lg-6 col-sm-6" data-aos="fade-right">
                      <div className="service-details-box">
                        <div className="service-details-title">
                          <h4>Level 4</h4>
                        </div>
                        <div className="services-detials-desc">
                        <p>
                            <ul>
                              <li>
                              A thorough understanding of all Tajweed rules, with the ability to apply, explain, and recite correctly from the Mus'haf.
                              </li>
                              <li>
                              The capacity to read aloud from the Mus'haf with proper Tajweed.
                             </li>
                              
                            </ul>
                          </p>
                        </div>
                      </div>
                    </div>
      
                  </div>
                </div>
    
               
              </div>
    
              <div className="col-lg-12 col-sm-6">
                <div className="service-details-box1" data-aos="fade-up">
                  <div className="service-details-title">
                    <h4>Duration</h4>
                  </div>
                  <div className="services-detials-desc">
                    <p>How long does it take to completely memorize the Qur’an?
                    <br/>Depending on one’s mental effort, memorizing the Qur’an can take anywhere between 1 and 5 years. It would take a person a maximum of five years to remember the entire Quran if they were to learn one page every four days.
                    </p>
                  </div>
                </div>
              </div>
      
              <div className="col-lg-12 col-sm-6">
                <div className="service-details-box1" data-aos="fade-up">
                  <div className="service-details-title">
                    <h4>Why is it important to learn the Qur’an?</h4>
                  </div>
                  <div className="services-detials-desc">
                    <p>The Quran memorization course involves memorizing the entire book. An individual who has memorized the Quran is referred to as a “Hafiz” in Arabic language. Reading and memorizing the Quran’s verses and Ayah are both considered to be practicing Hifz, which is the Arabic word for learning or memorization.</p>
                    <p>The Quran is the almighty Allah’s blessing that cannot be replaced by the entire universe, heavens and earth, and all creatures in between.</p>
                    <p>The Quran is a sea of knowledge that no book in the world can compare to it because the books of the world are written on knowledge acquired from the Quran, and secondly because these books are written on some unique features or, while the Quran makes every aspect its themes.</p>
                    <p>There is no issue in the world that has not been addressed by the Quran. Therefore, it is crucial to read and memorize the Quran so that we can refer to it directly anytime we are having a problem.</p>
                    <p>The noblest things in the universe are the mind that comprehended the Qur’an, the memory that held it, the language that read it, the ear that heard it, and the heart that was drawn to it.</p>
                  </div>
                </div>
              </div>
             
              <div className="col-lg-12 col-sm-6">
                <div className="service-details-box1" data-aos="fade-up">
                  <div className="service-details-title">
                    <h4>Why is it important to learn the Qur’an?
                    </h4>
                  </div>
                  <div className="services-detials-desc">
                    <p>The best answer to this question is from the Quran and hadith <br/>

The Prophet Muhammed (sallallahi alaihi wasallam) said: “Recite the Quran in the name of your lord who created. created man out of mere clot and congealed blood. Recite and Allah is the most generous.” (Qur’an | Surah-Alaq 1-3)
<br/>
And Prophet Muhammed (sallallahu alaihi wasallam) said: “The best among you is the one who has learned the Qur’anand taught it.” (Bukhari)</p>
                  </div>
                </div>
              </div>


              <div className="col-lg-12 col-sm-6">
                <div className="service-details-box1" data-aos="fade-up">
                  <div className="service-details-title">
                    <h4>Benefits of learning the Qur’anx</h4>
                  </div>
                  <div className="services-detials-desc">
                    <p>The mother of all Muslims, Hazrat Ayesha (may peace be upon her), narrated the following statement made by the Prophet Muhammad (sallallahu alayhi wa sallam): “The person who reads the Qur’an and has the memory of it, then his position will be with the most gracious angels and the one, who reads the Qur’an and tries to memorize the Qur’an, but he has a problem, then his reward is double” (Bukhari)</p>
                    <p>Usman (R.A) narrated that prophet Muhammed (sallallahi alaihi wasallam) said: “the person who learns the Qur’an and teaches it is the best”</p>
                  </div>
                </div>
              </div>
             </div>

             <div className="faq-area" data-aos="fade-up">
                <div className="container">
                  <div className="col-lg-12 col-md-12 pl-0 max-w-full">
                      <div className="tab_container">
                        <div className="consen-section-title white pb-40 mb-1">
                          <h5> FAQ </h5>
                          <h2> Frequently Asked <span> Question </span></h2>
                        </div>
                        <Faqs1 />
                      </div>
                    </div>
                  </div>
                </div>
                
           </div>
          
        
        </Layout>
      );
}

export default Quran