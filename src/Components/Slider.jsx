import React from 'react';
import bannerImg1 from "../assets/Banner 1.jpg";
import bannerImg2 from "../assets/Banner 4.jpg";
import bannerImg3 from "../assets/Banner 7.jpg";
import bannerImg4 from "../assets/Banner 5.jpg";
import bannerImg5 from "../assets/Donation 7.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

const Slider = () => {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={{ clickable: true }}
      mousewheel={true}
      keyboard={true}
      autoplay={{
        delay: 3000, // Time in milliseconds (3 seconds)
        disableOnInteraction: false, // Keep autoplay running even after user interaction
      }}
      modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          className="md:h-[800px] w-full object-cover rounded-3xl"
          src={bannerImg1}
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="md:h-[800px] w-full object-cover rounded-3xl"
          src={bannerImg2}
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="md:h-[800px] w-full object-cover rounded-3xl"
          src={bannerImg3}
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="md:h-[800px] w-full object-cover rounded-3xl"
          src={bannerImg4}
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="md:h-[800px] w-full object-cover rounded-3xl"
          src={bannerImg5}
          alt=""
        />
      </SwiperSlide>
     
    </Swiper>
  );
};

export default Slider;