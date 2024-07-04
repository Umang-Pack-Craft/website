import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css/pagination";

import "./MainProductcaurosol.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { BsFillImageFill } from "react-icons/bs";
const MainProductcarousol = () => {
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
    <div className="container-fluid mt-4 mb-4">
      <div className="row">
        <Swiper
          slidesPerView={slide}
          spaceBetween={0}
          pagination={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="cardslider w-100">
              <div className="cardupper">
                <div className="cardimg bg-danger">
                  <img src="https://kesarcraft.com/images/box3.jpg" alt="" />
                </div>
                <div className="cardicon">
                  <BsFillImageFill fontSize={25} className="bsfillimage" />
                </div>
              </div>
              <div className="cardline"></div>
              <div className="cardbtm p-4">
                <div className="sheet">
                  <span>CORRUGATED</span>
                </div>
                <div className="sheetype">
                  <span>BOX</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cardslider w-100">
              <div className="cardupper">
                <div className="cardimg">
                  <img
                    src="https://kesarcraft.com/images/boxsheet.jpg"
                    alt=""
                  />
                </div>
                <div className="cardicon">
                  <BsFillImageFill fontSize={25} />
                </div>
              </div>
              <div className="cardline"></div>
              <div className="cardbtm p-4">
                <div className="sheet">
                  <span>CORRUGATED</span>
                </div>
                <div className="sheetype">
                  <span>BOX</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cardslider w-100">
              <div className="cardupper">
                <div className="cardimg">
                  <img src="https://kesarcraft.com/images/box1.jpg" alt="" />
                </div>
                <div className="cardicon">
                  <BsFillImageFill fontSize={25} />
                </div>
              </div>
              <div className="cardline"></div>
              <div className="cardbtm p-4">
                <div className="sheet">
                  <span>CORRUGATED</span>
                </div>
                <div className="sheetype">
                  <span>BOX</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="cardslider w-100">
              <div className="cardupper">
                <div className="cardimg">
                  <img
                    src="https://kesarcraft.com/images/boxsheet2.jpg"
                    alt=""
                  />
                </div>
                <div className="cardicon">
                  <BsFillImageFill fontSize={25} />
                </div>
              </div>
              <div className="cardline"></div>
              <div className="cardbtm p-4">
                <div className="sheet">
                  <span>CORRUGATED</span>
                </div>
                <div className="sheetype">
                  <span>BOX</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MainProductcarousol;
