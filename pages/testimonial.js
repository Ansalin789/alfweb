import Breadcumb from "@/src/components/Breadcumb";
import Layout from "@/src/layout/Layout";
import Image from 'next/image';

const Testimonial = () => {
  return (
    <Layout>
      <Breadcumb pageName={"Testimonial"} />
      {/*==================================================*/}
      {/* Start consen Testimonial Area */}
      <div className="testimonial-area new-style">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="consen-section-title pb-40">
                <h5>TESTIMONIALS</h5>
                <h2> What Say Students </h2>
                <h2>
                  {" "}
                  About <span>AL Furqan</span>
                </h2>
              </div>
              <div className="row">
                <div className="testi_list owl-carousel">
                  <div className="col-lg-12">
                    <div className="single-testimonial">
                      <div className="testimonial-icon-thumb">
                        <img src="assets/images/resource/testi-icon.png" alt />
                      </div>
                      <div className="testimonial-ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                      </div>
                      <div className="testimonial-content">
                        <div className="testimonial-text">
                          <p>
                            Proactively leverage existing robust imperatives
                            standards compliant this paradigms. Competently
                            formulate excellent experiences withoutlicks-and it
                            mortar methodologies. Seamlessly enhance technically
                            sound e-business tactical communities holisticly
                            coordinate.
                          </p>
                        </div>
                        <div className="testimonial-title">
                          <h2>John M. Alexon</h2>
                          <span>UX Designer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 h-full w-full">
  <div className="testimonial-thumb relative h-full w-full">
    {/* Video Container */}
    <video
      className="w-full h-full object-cover rounded-lg"
      controls
      autoPlay
      muted
      style={{ height: '50vh', width: '40vw', objectFit: 'cover' }} // Fullscreen video styles
    >
      <source src="/assets/videos/your-video.mp4" type="video/mp4" />
    </video>

    {/* Play Button Overlay */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="bg-green-600 p-4 rounded-full opacity-75">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          {/* <path d="M3 22v-20l18 10-18 10z" /> */}
        </svg>
      </div>
    </div>
  </div>
</div>



          </div>
        </div>
      </div>
        <div className="container">
          <br/>
        <div className="bg-gray py-16 px-4 text-center text-#333333">
      {/* Title Section */}
      <h1 className="text-3xl font-bold mb-6" style={{color:'#333333',fontsize:'15px',textAlign:'center'}}>
        I choose <span className="text-4xl mb-19" style={{color:'#F14D5D'}}>AL Furqan</span>
      </h1> <br/>
      <p className="text-gray-600 max-w-4xl mx-auto mb-15 " style={{fontSize:'16px',textAlign:'center',color:'#555555'}}>
         I choose AL Furqan because it transforms the way I understand the Quran. Through engaging lessons and expert teachers, I’ve deepened my connection with the words of Allah. It’s not just learning—it's a journey of reflection, growth, and spiritual insight. With BAYYINAH, every verse opens a new door of understanding.
      </p>

      <div className="image-container">

  <div className="bottom-images">

    <Image src="/assets/img/cross1.png" alt="Bottom Image 1" width={320} height={320}  style={{    marginLeft:'-6px'}} />
    <Image src="/assets/img/cross3.png" alt="Bottom Image 2" width={320} height={320}  style={{marginLeft:'306px'}} />
  </div>
    <div className="center-image">
    <Image src="/assets/img/cross2.png" alt="Center Image" width={320} height={320}  style={{marginLeft:'5px'}} />
  </div>
</div>

    </div>
        </div>
     



      {/*==================================================*/}
      {/* <div className="testimonial-area style-two">
        <div className="container">
          <div className="row testi-rotate align-items-center">
            <div className="col-lg-12">
              <div className="consen-section-title pb-50 text-center upper">
                <h5> Testimonials </h5>
                <h2>  Trusted Customers </h2>
                <h2>
                  {" "}
                  Awesome <span> Reviews </span>
                </h2>
                
              </div>
            </div>
          </div>
    
        </div>
      </div> */}
      {/*==================================================*/}
      {/* End consen Testimonial Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start consen Subscribe Area */}
      {/*==================================================*/}
      {/* <div className="subscribe-area style-two mt-5 mt-sm-0">
        <div className="container">
          <div className="subscribe">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-12">
                <div className="subscribe-title">
                  <h1>Get your Free Business Consolution</h1>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <a href="tel:09837393403" className="subscribe-icon">
                  <i className="bi bi-telephone-inbound" />
                </a>
                <div className="subscribe-title2">
                  <h1> +98 376 (2890) 100 </h1>
                  <p> example@gmail.com </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}


      
    </Layout>
  );
};
export default Testimonial;
