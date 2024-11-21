import React from 'react';

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
        delay: 3000, 
        disableOnInteraction: false, 
      }}
      modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          className="md:h-[700px] w-full object-cover rounded-3xl"
          src='https://www.shutterstock.com/shutterstock/photos/2374184363/display_1500/stock-vector-winter-clothes-donation-vector-illustration-in-flat-style-2374184363.jpg'
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="md:h-[700px] w-full object-cover rounded-3xl"
          src='https://www.shutterstock.com/image-photo/female-volunteer-holding-donation-box-260nw-2109643052.jpg'
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="md:h-[700px] w-full object-cover rounded-3xl"
          src='https://www.shutterstock.com/image-vector/winter-clothes-donationvector-illustration-flat-260nw-2374184361.jpg'
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="md:h-[700px] w-full object-cover rounded-3xl"
          src='https://img.freepik.com/premium-photo/2-closeup-hands-passing-donation-box-filled-with-clothing-essentials-charity-worker-urban-setting_1295806-43252.jpg?semt=ais_hybrid'
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="md:h-[700px] w-full object-cover rounded-3xl"
          src='https://www.shutterstock.com/image-vector/clothes-donation-those-need-flat-600nw-2264436335.jpg'
          alt=""
        />
      </SwiperSlide>
     
    </Swiper>
  );
};

export default Slider;