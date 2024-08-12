import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import box1 from "../../assets/1.jpg";
import box2 from "../../assets/2.jpg";
import box3 from "../../assets/3.jpg";
import box4 from "../../assets/4.jpg";
import box5 from "../../assets/5.jpg";

// Import Swiper styles

import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";

import "../Whyus/CoreValue.css";
import "../Whyus/Vision.css";

const OurProductRange = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const [slide, setSlide] = useState(3.5);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  let slide = 3.5;
  if (windowWidth <= 768) {
    slide = 2;
  }
  if (windowWidth <= 425) {
    slide = 1;
  }
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="headingRange">
              <p>Our Product Range</p>
            </div>

            <Swiper
              slidesPerView={slide}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={true}
              modules={[Pagination, Autoplay]}
              className=" mt-4 mb-4"
            >
              <div className="row my-2 bg-dark">
                <SwiperSlide>
                  {" "}
                  <img
                    src={box1}
                    alt="1"
                  />{" "}
                </SwiperSlide>
                <SwiperSlide>
                  <img   src={box1} alt="2" />
                </SwiperSlide>
                <SwiperSlide>
                  <img   src={box2} alt="3" />
                </SwiperSlide>
                <SwiperSlide>
                  <img   src={box3} alt="4" />
                </SwiperSlide>
                <SwiperSlide>
                  <img   src={box4} alt="5" />
                </SwiperSlide>
                <SwiperSlide>
                  <img   src={box5} alt="6" />
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProductRange;
