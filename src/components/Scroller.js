// Import Swiper and modules from Swiper package
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { Navigation, EffectCoverflow } from 'swiper';

// Import any required images
import Client1 from '../public/assets/img/client-1.png';
import Client2 from '../public/assets/img/client-2.png';
import Client3 from '../public/assets/img/client-3.png';
import QuoteIcon from '../public/assets/img/qoute.png';
import StarIcon from '../public/assets/img/star.png';
import StarGreyIcon from '../public/assets/img/star-grey.png';

const Testimonials = () => {
  const testimonials = [
    { name: "John Deo", course: "3D Animation", image: Client1 },
    { name: "Charlie Burns", course: "3D Animation", image: Client2 },
    { name: "Nina Bennett", course: "3D Animation", image: Client3 },
  ];

  return (
    <div className="el-testmnl-wrapper">
      <div className="container">
        <div className="el-team-heading text-center">
          <h4 className="el-top-heading-center">Testimonials</h4>
          <h2 className="el-main-heading">What Our Students Say About Us</h2>
          <p className="el-para">
            Get latest news in your inbox. Consectetur adipiscing elitadipiscing elitse <br />
            ddo eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>

        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-12">
            <Swiper
              modules={[Navigation, EffectCoverflow]}
              effect="coverflow"
              spaceBetween={30}
              slidesPerView={1}
              navigation
              centeredSlides
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="el-tm-banner-media">
                    <img src={testimonial.image.src} alt={`Client Image - ${testimonial.name}`} />
                    <div className="el-tm-banner-media_content">
                      <h6>{testimonial.name}</h6>
                      <p className="el-para">
                        <img src="../assets/images/all-instructor/team-icon.png" alt="icon" /> {testimonial.course}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="col-xl-5 col-lg-12">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
            >
              {[...Array(3)].map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="el-temsl-text-slider">
                    <img src={QuoteIcon.src} alt="quote icon" />
                    <p className="el-para">
                      Get latest news in your inbox. Consectetur adipiscing elitaedipisa
                      cingelitseddo eisusmod tempor incididunt utlabore etdolore and
                      magnaseded doeiusmod tempor incididunt ut labore et dolore a
                      magna aliquasded elitadipiscing elitsed.
                    </p>
                    <div className="el-tesmnl-rating">
                      <img src="../assets/images/all-instructor/like-star.png" alt="rating star" />
                      <span>4.0</span>
                      <span className="el-temnl-rating">
                        {[...Array(4)].map((_, i) => (
                          <img key={i} src={StarIcon.src} alt="star" />
                        ))}
                        <img src={StarGreyIcon.src} alt="star grey" />
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
