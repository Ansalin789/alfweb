  // import Breadcumb from "@/src/components/Breadcumb";
  // import Layout from "@/src/layout/Layout";
  // import Link from "next/link";
  // import Faqs from "@/src/components/Faqs";

  // const ServiceDetails = () => {
  //   return (
  //     <Layout>
  //       <Breadcumb pageName={"Service Details"} />
  //       {/*==================================================*/}
  //       {/* Start consen service details Area */}
  //       {/*==================================================*/}
  //       <div className="service-detials-area">
  //         <div className="container">
  //           <div className="row">
  //             <div className="col-lg-8 col-md-12">
  //               <div className="row">
  //                 <div className="col-lg-12 col-sm-12">
  //                   <div className="consen-service-details-box">
  //                     <div className="consen-service-thumb">
  //                       <img src="assets/images/resource/srd1.jpg" alt />
  //                     </div>
  //                     <div className="service-details-content">
  //                       <div className="service-page-title">
  //                         <h1> Course Description</h1>
  //                       </div>
  //                      <div className="serivce-details-desc text-justify">
  //                        <p>
  //                        This Course is designed to learn, understand & recite the Noble Qur’an with proper Tajweed and pronunciation using the correct Makharij rules.
  //                        The Quran Tajweed & Makharij is the science of reciting the Quran according to the way heard by the companions from the Prophet Muhammad (PBUH).
  //                        Allah Almighty said in Qur’an, “And recite the Qur’an with measured recitation.” (73:4)
  //                        We use the Qaida Nuraniyah and some textbooks to teach the Tajweed & Makharij, where we cover the basic and advanced level of the Tajweed rules, and it will also help them in pronunciation of the Arabic alphabets then slowly move on to join letters to make words.
  //                        </p>
  //                        <p className="pb-35">
  //                        This course is designed for individuals who cannot yet read the Qur'an but want to learn Tajweed rules and improve their recitation. It is ideal for those seeking to beautify their Qur'an recitation smoothly and understand the methodology of Makharij. Additionally, this course helps to deepen and strengthen one's relationship with Allah SWT
  //                        </p>
  //                      </div>
  //                     </div>
  //                   </div>
  //                 </div>

  //                 <div className="col-lg-6 col-sm-6 slide-in-left">
  //                     <div className="service-details-box">
  //                           <div className="service-details-title">
  //                             <h4>Quran Tajweed Rules?</h4>
  //                           </div>
  //                       <div className="services-detials-desc">
  //                         <p>Tajweed, derived from the Arabic word “جودہ” meaning "beautiful," refers to the knowledge of correctly pronouncing each letter for proper Qur'an recitation. It ensures the recitation is done accurately and beautifully.</p>
  //                       </div>
  //                     </div>
  //                   </div>
  //               <div className="col-lg-6 col-sm-6 slide-in-right">
  //   <div className="service-details-box">
  //     <div className="service-details-title">
  //       <h4>Purpose of Tajweed Rules</h4>
  //     </div>
  //     <div className="services-detials-desc">
  //       <p>Tajweed preserves the accuracy of Qur'an recitation, ensuring every letter is pronounced as it was revealed by Allah (SWT) to the heart of the Prophet (peace and blessings be upon Him).</p>
  //     </div>
  //   </div>
  //                 </div>
  
  //               </div>
  //             </div>
  //             <div className="col-lg-4 col-md-12">
              
  //               <div className="widget-categories-box">
  //                 {/* categories title */}
  //                 <div className="categories-title">
  //                   <h4> What You Will Learn
  //                   </h4>
  //                 </div>
  //                 {/* widget categories menu */}
  //                 <div className="widget-categories-menu">
  //                   <ul>
  //                     <li className="active">
  //                       <Link legacyBehavior href="/service-details">
  //                         <a> Master Tajweed rules from basic to advanced levels. </a>
  //                       </Link>
  //                     </li>
  //                     <li>
  //                       <Link legacyBehavior href="/service-details">
  //                         <a> Beautify your Qur'an recitation with proper Makharij.
  //                         </a>
  //                       </Link>
  //                     </li>
  //                     <li>
  //                       <Link legacyBehavior href="/service-details">
  //                         <a> Improve recitation speed.  </a>
  //                       </Link>
  //                     </li>
  //                     <li>
  //                       <Link legacyBehavior href="/service-details">
  //                         <a> Learn approximately 30 Tajweed rules.
  //                         </a>
  //                       </Link>
  //                     </li>
  //                     <li>
  //                       <Link legacyBehavior href="/service-details">
  //                         <a>  Enhance understanding of the Qur'an.
  //                         </a>
  //                       </Link>
  //                     </li>
  //                     <li>
  //                       <Link legacyBehavior href="/service-details">
  //                         <a> Identify and correct your own mistakes.</a>
  //                       </Link>
  //                     </li>
  //                   </ul>
  //                 </div>
  //               </div>
  //               {/* categoreis thumb */}
  //               <div className="widget-categories-thumb">
  //                 {/* widget categories content  */}
  //                 <div className="widget-categories-content text-center">
  //                   <div className="logo-thumb">
  //                     <Link legacyBehavior href="/index">
  //                       <a>
  //                         {" "}
  //                         <img src="assets/images/logo.png" alt height={50}   />{" "}
  //                       </a>
  //                     </Link>
  //                   </div>
  //                   <div className="widget-title2">
  //                     <h3>Contact</h3>
  //                   </div>
  //                   <div className="widget-button">
  //                     <Link legacyBehavior href="/contact">
  //                       <a>
  //                         {" "}
  //                         <i className="bi bi-envelope" /> Contact Us{" "}
  //                       </a>
  //                     </Link>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>

  //           <div className="col-lg-12 col-sm-6">
  //                   <div className="service-details-box">
  //                     {/* <div className="service-details-icon">
  //                       <img src="assets/images/resource/details-icon3.jpg" alt />
  //                     </div> */}
  //                     <div className="service-details-title">
  //                       <h4>Importance of Tajweed Rules:</h4>
  //                     </div>
  //                     <div className="services-detials-desc">
  //                       <p>In the Holy Qur'an, Allah commands the Prophet (peace and blessings be upon him): “And read the Qur’an very well” (Al-Muzzammil: 4). This highlights the importance of every Muslim learning Tajweed according to their ability, to recite the Qur'an correctly and beautifully. Mastering Tajweed ensures success in this life and the Hereafter while avoiding errors that could alter the meaning of Qur'anic verses. Therefore, learning and teaching Tajweed is essential to prevent mispronunciation.</p>
  //                     </div>
  //                   </div>
  //                 </div>
                


  //                 <div>
                  // <h2>Course</h2>
                  // <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  // <thead>
                  //         <tr>
                  //           <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Topic</th>
                  //           <th style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>Description</th>
                  //         </tr>
                  //       </thead>
                  //       <tbody>
                  //       <tr>
                  //             <td className="td">Huroof Mufradat</td>
                  //             <td  className="td">Focus on the students’ pronunciation and identification of the Arabic alphabets (Huroof Mufradat).
                  //               Read the letters with proper makhraj (pronunciation of a letter)</td>
                  //       </tr>
                  //       <tr>
                  //             <td className="td">Huroof Murakkabat</td>
                  //             <td  className="td">Students will learn about the joint letters.All the letters from أ-ي</td>
                  //       </tr>
                  //       <tr>
                  //             <td className="td">Harakat</td>
                  //             <td  className="td">Students will learn the sound of the short vowelsFathhah, Dhammah, Kasra
                  //               The sound will then be applied on every alphabet for more practice</td>
                  //       </tr>
                  //       <tr>
                  //             <td className="td">Sukoon</td>
                  //             <td  className="td">The letters that have sukoon are called Harf Jazam.Students will be taught how to read the Huroof Jazam</td>
                  //       </tr>
                  //       <tr>
                  //             <td className="td">Qalqalah</td>
                  //             <td  className="td">To read the letters with echo sound when they have sukoon on it.</td>
                  //       </tr>
                  //       <tr>
                  //             <td className="td">Huroof Maddah Madd Asli</td>
                  //             <td  className="td">Letters with harakaat will be prolonged, if they are followed by letters of madd which are ا ي و.  this will be broken down in three sections of Madd bil Waw, madd bil alif and madd bi yaa</td>
                  //       </tr>
                  //       <tr>
                  //             <td className="td">Harf leen</td>
                  //             <td  className="td">When a letter with Fathah is followed by the ىsaakin or وsaakin it will be read with a slight bend.</td>
                  //       </tr>
                  //       <tr>
                  //             <td className="td">Hamzah</td>
                  //             <td  className="td">	The rule of hamzah depends on the position of the letter. Hamzat Al wasl (joining) Hamzah al qat (cutting)</td>
                  //       </tr>
                  //       <tr>
                  //             <td className="td">Small Alif, small Yaa and Small Dhammah</td>
                  //             <td  className="td">We should stretch it same as Mad Asli</td>
                  //       </tr>
                  //       <tr>
                  //             <td className="td">Madd badl</td>
                  //             <td  className="td">This madd is sounded for two counts when continuing recitation or stopping after the word with the madd. This madd is only found within one word, and occurs when the hamza has the respective diacritic on it, e.g., if the harf madd ‘waaw’ follows a hamza, the hamza has a dammah on it.</td>
                  //       </tr>
                  //       <tr>
                  //             <td className="td">Madd Muttasil (Big Madd)</td>
                  //             <td  className="td">When a Hamza appears in the same word after a letter of Madd. The duration of Madd-ul-Muttasil is 4 Alifs (seconds)</td>
                  //       </tr>
                  //       <tr>
                  //             <td className="td">Madd Munfasil (Jaaiz) Small Madd</td>
                  //             <td  className="td">When a word ends with a letter of Madd and the following word begins with a Hamza. • The duration of Madd-ul-Munfasil is 3 Alifs (seconds).</td>
                  //       </tr>
                        
                  //       <tr>
                  //             <td className="td">Madd Silah Sughrah (Prolonging of Haa)</td>
                  //             <td  className="td">Madd Al –Silah is the prolonging of the (Haa)The Madd will be with (Waw) if the (Haa) has Dhamma and by (Yaa) if the (Haa) has (Kasra).Madd al-silah has two types: sughra (lesser) and kubra (longer). If the Haa was not followed Immediately by (Hamza) then it is Madd Silah Sughra</td>
                  //       </tr>
                  //       <tr>
                  //             <td className="td">Madd silah sughrah (Madd Munfasil jaaiz)</td>
                  //             <td  className="td">The detached letter Haa when comes between 2 vowelled letters (either Kasra or dhammah neither of the two letters can have sukoon) should be lengthened for upto 4-5 counts</td>
                  //       </tr>
                  //       <tr>
                  //             <td className="td">Huroof Illat Empty letters</td>
                  //             <td  className="td">When the letters alif wow and yaa don’t have any vowel on them, they should not be read.Alif when preceded by fathah and there is NO sukoon or shaddah after it should be lengthened</td>
                  //       </tr>
                  //       <tr>
                  //             <td className="td">Tanween</td>
                  //             <td  className="td">The tanween is an “n” sound added to the end of the word. When a letter with Tanween is read it makes the N sound but there is no visible Noon it’s the sound of the double vowels. Gathatain, dhammatain and kasratain.</td>
                  //       </tr>
                  //       <tr>
                  //             <td className="td">Harf Mushaddad</td>
                  //             <td  className="td">The letter which has the shaddah on it should be doubled.</td>
                  //       </tr>
                  //       <tr>
                  //             <td className="td">Noon Saakin and Tanween</td>
                  //             <td  className="td">Idhaar Idhghaam Iqlab Ikhfa Each topic will be taught separately</td>
                  //       </tr>
                  //       <tr>
                  //             <td className="td">Meem Sakeen</td>
                  //             <td  className="td">Ikhfa shafawi
                  //               Idhhaar shafawi Idhghaam shafawi</td>
                  //       </tr>
                  //       <tr>
                  //             <td className="td">Rule of laam</td>
                  //             <td  className="td">Shamsi Qamari Idhghaam shamsi</td>
                  //       </tr>
                  //       <tr>
                  //             <td className="td">Ismu Jalaalah Rule of reading the name of Allah in the Quran</td>
                  //             <td  className="td">Ismu Jalalah Mufakham Ismu Jalalah Muraqqiq</td>
                  //       </tr>
                  //     </tbody>
                  //   </table>
  //                 </div>
  //                 </div> <br></br> <br></br>
  //                 {/*===================================================*/}
                  
  //                 {/*===================================================*/}
  //                 {/* <div className="faq-area">
  //         <div className="container">
  //           <div className="row">
  //             <div className="col-lg-6 col-md-6 pl-0">
  //               <div className="tab_container">
  //                 <div className="consen-section-title white pb-40 mb-1">
  //                   <h5> FAQ </h5>
  //                   <h2>
  //                     {" "}
  //                     Freequently Asked <span> Question </span>
  //                   </h2>
  //                 </div>
  //                 <Faqs />
  //               </div>
  //             </div>
  //             <div className="col-lg-6 col-md-6">
  //               <div className="contract-form-bg">
  //                 <div className="contact-form-title">
  //                   <h4> Free Consultant </h4>
  //                   <p> 24/7 anytime Open Our Services </p>
  //                 </div>
  //                 <div className="contact_from">
  //                   <form onSubmit={(e) => e.preventDefault()} id="dreamit-form">
  //                     <div className="row">
  //                       <div className="col-lg-12">
  //                         <div className="form_box mb-20">
  //                           <input type="text" name="name" placeholder="Name*" />
  //                         </div>
  //                       </div>
  //                       <div className="col-lg-12">
  //                         <div className="form_box mb-20">
  //                           <input
  //                             type="email"
  //                             name="email"
  //                             placeholder="Your E-Mail*"
  //                           />
  //                         </div>
  //                       </div>
  //                       <div className="col-lg-12">
  //                         <div className="form_box mb-20">
  //                           <input
  //                             type="text"
  //                             name="phone"
  //                             placeholder="Phone Number"
  //                           />
  //                         </div>
  //                       </div>
  //                       <div className="col-lg-12">
  //                         <div className="form_box mb-20">
  //                           <textarea
  //                             name="message"
  //                             id="message"
  //                             cols={30}
  //                             rows={10}
  //                             placeholder="Write a Message"
  //                             defaultValue={""}
  //                           />
  //                         </div>
  //                         <div className="quote_button">
  //                           <button className="btn" type="submit">
  //                             {" "}
  //                             <i className="bi bi-gear" /> Free Consultant{" "}
  //                           </button>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </form>
  //                   <div id="status" />
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="form-shape">
  //               <div className="testi-shape-thumb">
  //                 <img src="assets/images/resource/all-shape5.png" alt />
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //                 </div> */}
  //                 {/*===================================================*/}
                
          
  //         <div className="faq-area">
  //         <div className="container">
  //           <div className="row">
  //             <div className="col-lg-12 col-md-12 pl-0">
  //               {/* Start Accordion */}
  //               <div className="tab_container">
  //                 <div className="consen-section-title white pb-40 mb-1">
  //                   <h5> FAQ </h5>
  //                   <h2>
  //                     {" "}
  //                     Freequently Asked <span> Question </span>
  //                   </h2>
  //                 </div>
  //                 <Faqs />
  //               </div>
  //               {/* End Accordion */}
  //             </div>
  //             {/* <div className="col-lg-6 col-md-6">
  //               <div className="contract-form-bg">
  //                 <div className="contact-form-title">
  //                   <h4> Free Consultant </h4>
  //                   <p> 24/7 anytime Open Our Services </p>
  //                 </div>
  //                 <div className="contact_from">
  //                   <form onSubmit={(e) => e.preventDefault()} id="dreamit-form">
  //                     <div className="row">
  //                       <div className="col-lg-12">
  //                         <div className="form_box mb-20">
  //                           <input type="text" name="name" placeholder="Name*" />
  //                         </div>
  //                       </div>
  //                       <div className="col-lg-12">
  //                         <div className="form_box mb-20">
  //                           <input
  //                             type="email"
  //                             name="email"
  //                             placeholder="Your E-Mail*"
  //                           />
  //                         </div>
  //                       </div>
  //                       <div className="col-lg-12">
  //                         <div className="form_box mb-20">
  //                           <input
  //                             type="text"
  //                             name="phone"
  //                             placeholder="Phone Number"
  //                           />
  //                         </div>
  //                       </div>
  //                       <div className="col-lg-12">
  //                         <div className="form_box mb-20">
  //                           <textarea
  //                             name="message"
  //                             id="message"
  //                             cols={30}
  //                             rows={10}
  //                             placeholder="Write a Message"
  //                             defaultValue={""}
  //                           />
  //                         </div>
  //                         <div className="quote_button">
  //                           <button className="btn" type="submit">
  //                             {" "}
  //                             <i className="bi bi-gear" /> Free Consultant{" "}
  //                           </button>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </form>
  //                   <div id="status" />
  //                 </div>
  //               </div>
  //             </div> */}
  //             <div className="form-shape">
  //               <div className="testi-shape-thumb">
  //                 <img src="assets/images/resource/all-shape5.png" alt />
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //                 </div>
  //       </div>
  //     </Layout>
  //   );
  // };
  // export default ServiceDetails;









  


  // pages/service-details.js
import Breadcumb from "@/src/components/Breadcumb";
import Faqs1 from "@/src/components/Faqs1";
import Layout from "@/src/layout/Layout";
import Link from "next/link";

const ServiceDetails = () => {
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
                          This Course is designed to learn, understand & recite the Noble Qur’an with proper Tajweed and pronunciation using the correct Makharij rules.
                          The Quran Tajweed & Makharij is the science of reciting the Quran according to the way heard by the companions from the Prophet Muhammad (PBUH).
                          Allah Almighty said in Qur’an, “And recite the Qur’an with measured recitation.” (73:4)
                          We use the Qaida Nuraniyah and some textbooks to teach the Tajweed & Makharij, where we cover the basic and advanced level of the Tajweed rules, and it will also help them in pronunciation of the Arabic alphabets then slowly move on to join letters to make words.
                          </p>
                          <p className="pb-35">
                          This course is designed for individuals who cannot yet read the Qur'an but want to learn Tajweed rules and improve their recitation. It is ideal for those seeking to beautify their Qur'an recitation smoothly and understand the methodology of Makharij. Additionally, this course helps to deepen and strengthen one's relationship with Allah SWT
                          </p>
                        </div>
                    </div>
                  </div>
                </div>
                  
                <div className="  col-lg-6 col-sm-6"  data-aos="fade-left">
                  <div className="service-details-box">
                    <div className="service-details-title">
                      <h4>Quran Tajweed Rules?</h4>
                    </div>
                    <div className="services-detials-desc">
                      <p>Tajweed, derived from the Arabic word “جودہ” meaning "beautiful," refers to the knowledge of correctly pronouncing each letter for proper Qur'an recitation. It ensures the recitation is done accurately and beautifully.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-sm-6" data-aos="fade-right">
                  <div className="service-details-box">
                    <div className="service-details-title">
                      <h4>Purpose of Tajweed Rules</h4>
                    </div>
                    <div className="services-detials-desc">
                      <p>Tajweed preserves the accuracy of Qur'an recitation, ensuring every letter is pronounced as it was revealed by Allah (SWT) to the heart of the Prophet (peace and blessings be upon Him).</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* <div className="col-lg-4 col-md-12">
              <div className="widget-categories-box" data-aos="fade-up">
                <div className="categories-title">
                  <h4> What You Will Learn</h4>
                </div>
                <div className="widget-categories-menu">
                     <ul>
                    <li className="active">
                         <Link legacyBehavior href="/service-details">
                           <a> Master Tajweed rules from basic to advanced levels. </a>
                         </Link>
                       </li>
                      <li>
                        <Link legacyBehavior href="/service-details">
                           <a> Beautify your Qur'an recitation with proper Makharij.
                           </a>
                         </Link>
                       </li>
                       <li>
                         <Link legacyBehavior href="/service-details">
                           <a> Improve recitation speed.  </a>
                         </Link>
                       </li>
                       <li>
                         <Link legacyBehavior href="/service-details">
                           <a> Learn approximately 30 Tajweed rules.
                           </a>
                         </Link>
                       </li>
                       <li>
                         <Link legacyBehavior href="/service-details">
                           <a>  Enhance understanding of the Qur'an.
                           </a>
                         </Link>
                       </li>
                       <li>
                         <Link legacyBehavior href="/service-details">
                           <a> Identify and correct your own mistakes.</a>
                         </Link>
                       </li>
                     </ul>
                   </div>
              </div>

              <div className="widget-categories-thumb" data-aos="fade-up">
                <div className="widget-categories-content text-center">
                  <div className="logo-thumb">
                    <Link legacyBehavior href="/index">
                      <a>
                        <img src="assets/images/logo.png" alt="Logo" height={50} />
                      </a>
                    </Link>
                  </div>
                  <div className="widget-title2">
                    <h3>Contact</h3>
                  </div>
                  <div className="widget-button">
                    <Link legacyBehavior href="/contact">
                      <a>
                        <i className="bi bi-envelope" /> Contact Us
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          <div className="col-lg-12 col-sm-6">
            <div className="service-details-box1" data-aos="fade-up">
              <div className="service-details-title">
                <h4>Importance of Tajweed Rules:</h4>
              </div>
              <div className="services-detials-desc">
                <p>In the Holy Qur'an, Allah commands the Prophet (peace and blessings be upon him): “And read the Qur’an very well” (Al-Muzzammil: 4). This highlights the importance of every Muslim learning Tajweed according to their ability, to recite the Qur'an correctly and beautifully. Mastering Tajweed ensures success in this life and the Hereafter while avoiding errors that could alter the meaning of Qur'anic verses. Therefore, learning and teaching Tajweed is essential to prevent mispronunciation.</p>
              </div>
            </div>
          </div>

            
            {/* <table style={{ width: '100%', borderCollapse: 'collapse' }} data-aos="fade-up">
                  <thead>
                          <tr>
                            <th style={{ border: '1px solid #000', padding: '8px', backgroundColor: '#f2f2f2' }}>Topic</th>
                            <th style={{ border: '1px solid #000', padding: '8px', backgroundColor: '#f2f2f2' }}>Description</th>
                          </tr>
                        </thead>
                        <tbody>
                        <tr>
                              <td className="td">Huroof Mufradat</td>
                              <td  className="td">Focus on the students’ pronunciation and identification of the Arabic alphabets (Huroof Mufradat).
                                Read the letters with proper makhraj (pronunciation of a letter)</td>
                        </tr>
                        <tr>
                              <td className="td">Huroof Murakkabat</td>
                              <td  className="td">Students will learn about the joint letters.All the letters from أ-ي</td>
                        </tr>
                        <tr>
                              <td className="td">Harakat</td>
                              <td  className="td">Students will learn the sound of the short vowelsFathhah, Dhammah, Kasra
                                The sound will then be applied on every alphabet for more practice</td>
                        </tr>
                        <tr>
                              <td className="td">Sukoon</td>
                              <td  className="td">The letters that have sukoon are called Harf Jazam.Students will be taught how to read the Huroof Jazam</td>
                        </tr>
                        <tr>
                              <td className="td">Qalqalah</td>
                              <td  className="td">To read the letters with echo sound when they have sukoon on it.</td>
                        </tr>
                        <tr>
                              <td className="td">Huroof Maddah Madd Asli</td>
                              <td  className="td">Letters with harakaat will be prolonged, if they are followed by letters of madd which are ا ي و.  this will be broken down in three sections of Madd bil Waw, madd bil alif and madd bi yaa</td>
                        </tr>
                        <tr>
                              <td className="td">Harf leen</td>
                              <td  className="td">When a letter with Fathah is followed by the ىsaakin or وsaakin it will be read with a slight bend.</td>
                        </tr>
                        <tr>
                              <td className="td">Hamzah</td>
                              <td  className="td">	The rule of hamzah depends on the position of the letter. Hamzat Al wasl (joining) Hamzah al qat (cutting)</td>
                        </tr>
                        <tr>
                              <td className="td">Small Alif, small Yaa and Small Dhammah</td>
                              <td  className="td">We should stretch it same as Mad Asli</td>
                        </tr>
                        <tr>
                              <td className="td">Madd badl</td>
                              <td  className="td">This madd is sounded for two counts when continuing recitation or stopping after the word with the madd. This madd is only found within one word, and occurs when the hamza has the respective diacritic on it, e.g., if the harf madd ‘waaw’ follows a hamza, the hamza has a dammah on it.</td>
                        </tr>
                        <tr>
                              <td className="td">Madd Muttasil (Big Madd)</td>
                              <td  className="td">When a Hamza appears in the same word after a letter of Madd. The duration of Madd-ul-Muttasil is 4 Alifs (seconds)</td>
                        </tr>
                        <tr>
                              <td className="td">Madd Munfasil (Jaaiz) Small Madd</td>
                              <td  className="td">When a word ends with a letter of Madd and the following word begins with a Hamza. • The duration of Madd-ul-Munfasil is 3 Alifs (seconds).</td>
                        </tr>
                        
                        <tr>
                              <td className="td">Madd Silah Sughrah (Prolonging of Haa)</td>
                              <td  className="td">Madd Al –Silah is the prolonging of the (Haa)The Madd will be with (Waw) if the (Haa) has Dhamma and by (Yaa) if the (Haa) has (Kasra).Madd al-silah has two types: sughra (lesser) and kubra (longer). If the Haa was not followed Immediately by (Hamza) then it is Madd Silah Sughra</td>
                        </tr>
                        <tr>
                              <td className="td">Madd silah sughrah (Madd Munfasil jaaiz)</td>
                              <td  className="td">The detached letter Haa when comes between 2 vowelled letters (either Kasra or dhammah neither of the two letters can have sukoon) should be lengthened for upto 4-5 counts</td>
                        </tr>
                        <tr>
                              <td className="td">Huroof Illat Empty letters</td>
                              <td  className="td">When the letters alif wow and yaa don’t have any vowel on them, they should not be read.Alif when preceded by fathah and there is NO sukoon or shaddah after it should be lengthened</td>
                        </tr>
                        <tr>
                              <td className="td">Tanween</td>
                              <td  className="td">The tanween is an “n” sound added to the end of the word. When a letter with Tanween is read it makes the N sound but there is no visible Noon it’s the sound of the double vowels. Gathatain, dhammatain and kasratain.</td>
                        </tr>
                        <tr>
                              <td className="td">Harf Mushaddad</td>
                              <td  className="td">The letter which has the shaddah on it should be doubled.</td>
                        </tr>
                        <tr>
                              <td className="td">Noon Saakin and Tanween</td>
                              <td  className="td">Idhaar Idhghaam Iqlab Ikhfa Each topic will be taught separately</td>
                        </tr>
                        <tr>
                              <td className="td">Meem Sakeen</td>
                              <td  className="td">Ikhfa shafawi
                                Idhhaar shafawi Idhghaam shafawi</td>
                        </tr>
                        <tr>
                              <td className="td">Rule of laam</td>
                              <td  className="td">Shamsi Qamari Idhghaam shamsi</td>
                        </tr>
                        <tr>
                              <td className="td">Ismu Jalaalah Rule of reading the name of Allah in the Quran</td>
                              <td  className="td">Ismu Jalalah Mufakham Ismu Jalalah Muraqqiq</td>
                        </tr>
                      </tbody>
                    </table> */}


                    <h2> Course Contents</h2>
                    <div className="container" >
                      <div className="row">
                  <div className="col-lg-3 col-sm-6">
                  <div className="service-work-process-box">
                    <div className="service-work-process-number">
                      <span></span>
                    </div>
                    <div className="service-work-process-title">
                      <h4>Huroof Mufradat </h4>
                    </div>
                    <div className="service-work-process-desc text-justify">
                      <p>Focus on the students’ pronunciation and identification of the Arabic alphabets (Huroof Mufradat).

                       </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="service-work-process-box">
                    <div className="service-work-process-number">
                      <span></span>
                    </div>
                    <div className="service-work-process-title">
                      <h4> Huroof Murakkabat </h4>
                    </div>
                    <div className="service-work-process-desc text-justify">
                      <p>Students will learn about the joint letters.
                       All the letters from أ-ي</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-3 col-sm-6">
                  <div className="service-work-process-box">
                    <div className="service-work-process-number">
                      <span></span>
                    </div>
                    <div className="service-work-process-title">
                      <h4> Sukoon </h4>
                    </div>
                    <div className="service-work-process-desc text-justify">
                      <p>The letters that have sukoon are called Harf Jazam.

Students will be taught how to read the Huroof Jazam
</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="service-work-process-box">
                    <div className="service-work-process-number">
                      <span></span>
                    </div>
                    <div className="service-work-process-title">
                      <h4>Harakat </h4>
                    </div>
                    <div className="service-work-process-desc text-justify">
                      <p>Students will learn the sound of the short vowels

Fathhah, Dhammah, Kasra

The sound will then be applied on every alphabet for more practice</p>
                    </div>
                  </div>
                </div>
                </div>
                </div>
                <div className="container">
                      <div className="row">
                  <div className="col-lg-3 col-sm-6">
                  <div className="service-work-process-box">
                    <div className="service-work-process-number">
                      <span></span>
                    </div>
                    <div className="service-work-process-title">
                      <h4> Qalqalah</h4>
                    </div>
                    <div className="service-work-process-desc">
                      <p>To read the letters with echo sound when they have sukoon on it.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="service-work-process-box">
                    <div className="service-work-process-number">
                      <span></span>
                    </div>
                    <div className="service-work-process-title">
                      <h4> Huroof Maddah </h4>
                    </div>
                    <div className="service-work-process-desc">
                      <p>Letters with harakaat will be prolonged, if they are followed by letters of madd which are ا ي و.  this will be broken down in three sections of Madd bil Waw, madd bil alif and madd bi yaa</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-3 col-sm-6">
                  <div className="service-work-process-box">
                    <div className="service-work-process-number">
                      <span></span>
                    </div>
                    <div className="service-work-process-title">
                      <h4>Harf leen </h4>
                    </div>
                    <div className="service-work-process-desc">
                      <p>When a letter with Fathah is followed by the ىsaakin or وsaakin it will be read with a slight bend.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="service-work-process-box">
                    <div className="service-work-process-number">
                      <span></span>
                    </div>
                    <div className="service-work-process-title">
                      <h4>Hamzah </h4>
                    </div>
                    <div className="service-work-process-desc">
                      <p>The rule of hamzah depends on the position of the letter.

Hamzat Al wasl (joining)

Hamzah al qat (cutting)</p>
                    </div>
                  </div>
                </div>
                </div>
                </div>
              
                <div className="container">
                      <div className="row">
                  <div className="col-lg-3 col-sm-6">
                  <div className="service-work-process-box">
                    <div className="service-work-process-number">
                      <span></span>
                    </div>
                    <div className="service-work-process-title">
                      <h4> Small Alif, small Yaa and Small Dhammah </h4>
                    </div>
                    <div className="service-work-process-desc">
                      <p>We should stretch it same as Mad Asli</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="service-work-process-box">
                    <div className="service-work-process-number">
                      <span></span>
                    </div>
                    <div className="service-work-process-title">
                      <h4> Madd Muttasil (Big Madd)</h4>
                    </div>
                    <div className="service-work-process-desc">
                      <p>	
                      When a Hamza appears in the same word after a letter of Madd. The duration of Madd-ul-Muttasil is 4 Alifs (seconds)</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-3 col-sm-6">
                  <div className="service-work-process-box">
                    <div className="service-work-process-number">
                      <span></span>
                    </div>
                    <div className="service-work-process-title">
                      <h4> Madd Munfasil (Jaaiz) Small Madd </h4>
                    </div>
                    <div className="service-work-process-desc">
                      <p>When a word ends with a letter of Madd and the following word begins with a Hamza. • The duration of Madd-ul-Munfasil is 3 Alifs (seconds).</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="service-work-process-box">
                    <div className="service-work-process-number">
                      <span></span>
                    </div>
                    <div className="service-work-process-title">
                      <h4> Huroof Illat

Empty letters</h4>
                    </div>
                    <div className="service-work-process-desc">
                      <p>When the letters alif wow and yaa don’t have any vowel on them, they should not be read.

Alif when preceded by fathah and there is NO sukoon or shaddah after it should be lengthened</p>
                    </div>
                  </div>
                </div>
                </div>
                </div>
                <div className="container">
                      <div className="row">
                  <div className="col-lg-3 col-sm-6">
                  <div className="service-work-process-box">
                    <div className="service-work-process-number">
                      <span></span>
                    </div>
                    <div className="service-work-process-title">
                      <h4>Tanween </h4>
                    </div>
                    <div className="service-work-process-desc">
                      <p>The tanween is an “n” sound added to the end of the word. When a letter with Tanween is read it makes the N sound but there is no visible Noon it’s the sound of the double vowels. Gathatain, dhammatain and kasratain.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="service-work-process-box">
                    <div className="service-work-process-number">
                      <span></span>
                    </div>
                    <div className="service-work-process-title">
                      <h4> Harf Mushaddad</h4>
                    </div>
                    <div className="service-work-process-desc">
                      <p>	
                      The letter which has the shaddah on it should be doubled..</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-3 col-sm-6">
                  <div className="service-work-process-box">
                    <div className="service-work-process-number">
                      <span></span>
                    </div>
                    <div className="service-work-process-title">
                      <h4>Noon Saakin </h4>
                    </div>
                    <div className="service-work-process-desc">
                      <p><ul>
                     <li> Idhaar </li>

                     <li> Idhghaam</li>

                  <li>  Iqlab </li>


 
                    Each topic will be taught separately</ul></p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="service-work-process-box">
                    <div className="service-work-process-number">
                      <span></span>
                    </div>
                    <div className="service-work-process-title">
                      <h4> Meem Sakeen
</h4>
                    </div>
                    <div className="service-work-process-desc">
                      <p><ul>
                     <li>Ikhfa shafawi</li> 

                    <li>Idhhaar shafawi</li> 

                      <li>Idhghaam shafawi</li>                      
                        </ul></p>
                    </div>
                  </div>
                </div>
                </div>
                </div>
                <div className="container">
                      <div className="row">
                  <div className="col-lg-3 col-sm-6">
                  <div className="service-work-process-box">
                    <div className="service-work-process-number">
                      <span></span>
                    </div>
                    <div className="service-work-process-title">
                      <h4>Rule of laam </h4>
                    </div>
                    <div className="service-work-process-desc">
                      <p><ul>
                        <li>Shamsi</li>
                        <li>Qamari</li>
                        <li>Idhghaam shamsi</li>
                        </ul></p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="service-work-process-box">
                    <div className="service-work-process-number">
                      <span></span>
                    </div>
                    <div className="service-work-process-title">
                      <h4>Ismu Jalaalah</h4>
                    </div>
                    <div className="service-work-process-desc">
                    <p><ul>
                        <li>Ismu Jalalah Mufakham</li>
                        <li>Ismu Jalalah Muraqqiq</li>
                        </ul></p>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-3 col-sm-6">
                  <div className="service-work-process-box">
                    <div className="service-work-process-number">
                      <span></span>
                    </div>
                    <div className="service-work-process-title">
                      <h4>Rule of Raa </h4>
                    </div>
                    <div className="service-work-process-desc">
                      <p><ul>
                     <li> Tafkheem </li>

                     <li>Tarqeeq</li>

                  <li>  Jawaaz al wajhain (can read in both way) </li>


 
                    Each topic will be taught separately</ul></p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="service-work-process-box">
                    <div className="service-work-process-number">
                      <span></span>
                    </div>
                    <div className="service-work-process-title">
                      <h4>Madd laazim
</h4>
                    </div>
                    <div className="service-work-process-desc">
                      <p><ul>
                     <li>Harf muqataat</li> 

                    <li>Harf mushakkal</li> 

                      <li>kalmi</li>                      
                        </ul></p>
                    </div>
                  </div>
                </div>
                </div>
                </div>
                <div className="container">
                      <div className="row">
                  <div className="col-lg-3 col-sm-6">
                  <div className="service-work-process-box">
                    <div className="service-work-process-number">
                      <span></span>
                    </div>
                    <div className="service-work-process-title">
                      <h4>Stops in the Quran </h4>
                    </div>
                    <div className="service-work-process-desc">
                    <p><ul>
                     <li>End of aayah</li> 

                    <li>Waqf laazim</li> 

                      <li>Waqf mutallaq</li> 
                      <li>Waqf jaaiz</li>                     
                        </ul></p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="service-work-process-box">
                    <div className="service-work-process-number">
                      <span></span>
                    </div>
                    <div className="service-work-process-title">
                      <h4> Madd</h4>
                    </div>
                    <div className="service-work-process-desc">
                      <p>	
                      Maddu aaridh li sukoon</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-lg-3 col-sm-6">
                  <div className="service-work-process-box">
                    <div className="service-work-process-number">
                      <span></span>
                    </div>
                    <div className="service-work-process-title">
                      <h4> Elongation (Madd) </h4>
                    </div>
                    <div className="service-work-process-desc">
                      <p><ul>
                     <li> 	
                     Maddu Iwadh </li>

                     <li> Maddu leen</li>

</ul></p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="service-work-process-box">
                    <div className="service-work-process-number">
                      <span></span>
                    </div>
                    <div className="service-work-process-title">
                      <h4> Noon qutni
</h4>
                    </div>
                    <div className="service-work-process-desc">
                      <p>The noon qutni is the former noon sakinah of the tanween and is recited only when joining a letter ending in a tanween to a word that begins with hamzatul wasl.</p>
                    </div>
                  </div>
                </div>
                </div>
                </div>
 <br></br>
         
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
};

export default ServiceDetails;
