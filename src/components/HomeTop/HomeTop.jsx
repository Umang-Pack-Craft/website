import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "./HomeTop.css";
import one from "../../assets/one.JPG";
import two from "../../assets/two.JPG";
import three from "../../assets/three.JPG";
import four from "../../assets/four.JPG";
import five from "../../assets/five.JPG";
import six from "../../assets/six.JPG";

import { Pagination, Autoplay } from "swiper/modules";
const HomeTop = () => {
  return (
    <div id="home">
    
      <Swiper
        slidesPerView={1}
        spaceBetween={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="m-0 g-0 p-0 bg-danger wrapperupper">
            <img src={one} alt="firstimage" />
          
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="m-0 g-0 p-0 bg-danger wrapperupper">
            <img src={two} alt="firstimage" />
        
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="m-0 g-0 p-0 bg-danger wrapperupper">
            <img src={three} alt="firstimage" />

         
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="m-0 g-0 p-0 bg-danger wrapperupper">
            <img src={four} alt="firstimage" />
          
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="m-0 g-0 p-0 bg-danger wrapperupper">
            <img src={five} alt="firstimage" />
          
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="m-0 g-0 p-0 bg-danger wrapperupper">
            <img src={six} alt="firstimage" />
      
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeTop;
