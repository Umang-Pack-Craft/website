import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './HomeTop.css';
import one from "../../assets/one.JPG";
import two from "../../assets/two.JPG";
import three from "../../assets/three.JPG";
import four from "../../assets/four.JPG";
import five from "../../assets/five.JPG";
import six from "../../assets/six.JPG";
import seven from "../../assets/seven.JPG";
import eight from "../../assets/eight.JPG";

import { Pagination, Navigation } from 'swiper/modules';
const HomeTop = () => {
    return (
        <>
              <Swiper
        slidesPerView={1}
        spaceBetween={1}
        loop={true}
       autoplay={
        {
          delay:1500,
        }
       }
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >


            <SwiperSlide>
            <div className="m-0 g-0 p-0 bg-danger wrapperupper">
            
            <img src={one} alt="firstimage" />
               <div className="btn btngetstarted ">Get Started</div>

            </div>
       
            </SwiperSlide>

            <SwiperSlide>
            <div className="m-0 g-0 p-0 bg-danger wrapperupper">
            
            <img src={two}  alt="firstimage" />
               <div className="btn btngetstarted ">Get Started</div>

            </div>
       
            </SwiperSlide>

            <SwiperSlide>
            <div className="m-0 g-0 p-0 bg-danger wrapperupper">
            
            <img src={three}  alt="firstimage" />

               <div className="btn btngetstarted ">Get Started</div>

            </div>
       
            </SwiperSlide>

            <SwiperSlide>
            <div className="m-0 g-0 p-0 bg-danger wrapperupper">
            
                        <img src={four}  alt="firstimage" />
               <div className="btn  btngetstarted ">Get Started</div>

            </div>
       
            </SwiperSlide>

            <SwiperSlide>
            <div className="m-0 g-0 p-0 bg-danger wrapperupper">
            
            <img src={five}  alt="firstimage" />
               <div className="btn  btngetstarted ">Get Started</div>

            </div>
       
            </SwiperSlide>

            <SwiperSlide>
            <div className="m-0 g-0 p-0 bg-danger wrapperupper">
            
            <img src={six}  alt="firstimage" />
               <div className="btn btngetstarted ">Get Started</div>

            </div>
       
            </SwiperSlide>
          </Swiper>
        </>
      );
}

export default HomeTop
