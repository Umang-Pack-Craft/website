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

import "./MainProductcaurosol.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { BsFillImageFill } from "react-icons/bs";
const MainProductcarousol = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
                  <img src={box1} alt="" />
                </div>
                <div className="cardicon">
                  <BsFillImageFill fontSize={25} className="bsfillimage" />
                </div>
              </div>
              <div className="cardline"></div>
              <div className="cardbtm p-4">
                <div className="sheet">
                  <span>PALLET BOX</span>
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
                <img src={box2} alt="" />
                </div>
                <div className="cardicon">
                  <BsFillImageFill fontSize={25} />
                </div>
              </div>
              <div className="cardline"></div>
              <div className="cardbtm p-4">
                <div className="sheet">
                  <span>DUPLEX BOX</span>
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
                <img src={box3} alt="" />
                </div>
                <div className="cardicon">
                  <BsFillImageFill fontSize={25} />
                </div>
              </div>
              <div className="cardline"></div>
              <div className="cardbtm p-4">
                <div className="sheet">
                  <span>MULTICOLOR BOX</span>
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
                <img src={box4} alt="" />
                </div>
                <div className="cardicon">
                  <BsFillImageFill fontSize={25} />
                </div>
              </div>
              <div className="cardline"></div>
              <div className="cardbtm p-4">
                <div className="sheet">
                  <span>DYE CUT BOX</span>
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
                <img src={box5} alt="" />
                </div>
                <div className="cardicon">
                  <BsFillImageFill fontSize={25} />
                </div>
              </div>
              <div className="cardline"></div>
              <div className="cardbtm p-4">
                <div className="sheet">
                  <span>REGULAR SLOTTED (RSC) BOX</span>
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
