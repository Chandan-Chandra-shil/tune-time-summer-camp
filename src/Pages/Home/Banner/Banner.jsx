import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slider from "../../../assets/slider.jpg";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide>
          <img src={slider} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
