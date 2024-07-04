import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <>
      <div className="container-fluid p-0 m-0">
        <div className="row">
          <div className="col-12 p-0 m-0">
            <Swiper
              pagination={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="happycard">
                  <div className="cardheading">
                    <h3 className="p-5 happyhead">Happy Clients</h3>
                  </div>
                  <div className="happycardlogo">
                    <img
                      src="https://brandyuva.in/wp-content/uploads/2018/11/amul-marketing-strategies.jpg"
                      height="20px"
                      alt=""
                    />
                  </div>
                  <div className="happypara p-5">
                    <span>
                      Satisfied customer is the best source of advertisement.
                    </span>
                  </div>
                  <div className="happyname">
                    <span>Amul</span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="happycard">
                  <div className="cardheading">
                    <h3 className="p-5 happyhead">Happy Clients</h3>
                  </div>
                  <div className="happycardlogo">
                    <img
                      src="https://www.grocery.com/wp-content/uploads/2011/03/McCainFoods.jpg"
                      height="20px"
                      alt=""
                    />
                  </div>
                  <div className="happypara p-5">
                    <span>
                      A customer talking about their experience with you is
                      worth ten times that which you write or say about
                      yourself.
                    </span>
                  </div>
                  <div className="happyname">
                    <span>Mccain Foods</span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="happycard">
                  <div className="cardheading">
                    <h3 className="p-5 happyhead">Happy Clients</h3>
                  </div>
                  <div className="happycardlogo">
                    <img
                      src="https://media.licdn.com/dms/image/C4E0BAQHLhMnou6sh4w/company-logo_200_200/0/1630612164213?e=2147483647&v=beta&t=9NpFBIYzVQVNrTh-_1LtMpvfIl5JD7OfECGTErYBwZE"
                      alt=""
                    />
                  </div>
                  <div className="happypara p-5">
                    <span>
                      {" "}
                      "A satisfied customer is one who will continue to buy from
                      you, seldom shop around, refer other customers and in
                      general be a superstar advocate for your business."
                    </span>
                  </div>
                  <div className="happyname">
                    <span>Tirupati Groups</span>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="happycard">
                  <div className="cardheading">
                    <h3 className="p-5 happyhead">Happy Clients</h3>
                  </div>
                  <div className="happycardlogo">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrrkXk8YyI-y412-8_59EkXh3kyogQkY-6q9s9vBJI2Q&s"
                      alt=""
                    />
                  </div>
                  <div className="happypara p-5">
                    <span>
                      {" "}
                      "Loyal customers, they don’t just come back, they don’t
                      simply recommend you, they insist that their friends do
                      business with you"
                    </span>
                  </div>
                  <div className="happyname">
                    <span>Miraj Groups</span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
