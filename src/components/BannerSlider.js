// components/BannerSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import Banner from './Banner'; // Import your Banner component
import Banner1 from './Banner1';

const BannerSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1} // Display one banner at a time
      pagination={{ clickable: true }} // Enable pagination bullets
      navigation // Enable navigation arrows
      loop // Enable loop for continuous scrolling
    >
      <SwiperSlide>
        <Banner />
      </SwiperSlide>
      <SwiperSlide>
        <Banner1 />
      </SwiperSlide>
    </Swiper>
  );
};

export default BannerSlider;
