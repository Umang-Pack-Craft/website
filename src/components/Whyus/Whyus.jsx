import React from "react";
import { IoShield } from "react-icons/io5";
import { FaPaperPlane } from "react-icons/fa";
import { IoPricetagsSharp } from "react-icons/io5";
import { FaRegCalendarDays } from "react-icons/fa6";
import { MdBusinessCenter } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import "./Whyus.css";
import CoreValue from "./CoreValue";
import Vision from "./Vision";
import Misson from "./Misson";
import CompanyOverview from "./CompanyOverview";
import mobileView from "../../assets/umangMobile.png";
const Whyus = () => {
  return (
    <>
      <div id="whyus" className="container-fluid containwyus">
        <div className="row">
          <div className="upper">
            <div className="whyusHeading m-2 pt-5 pb-3 ">
              <span>Why Choose Us ?</span>
            </div>
             
            <div className="parawhy my-3">
              <blockquote>
                <q>
                  Umang Pack-craft was founded in the year 2018 and we
                  specialise in manufacturing 3, 5, and 7 ply corrugated boxes.
                  Situated near Chhatral, our factory spans 7,500 sq. ft and
                  houses both manual and automatic corrugation plants. Our aim
                  is customer satisfaction, crafting boxes to meet diverse
                  specifications.
                </q>
              </blockquote>
            </div>
          </div>
          <div className="middle my-3">
            <div className="container-fluid">
              <div className="newclasswhy">
                <div className="childOfNewclasswhy">
                  <div className="iconpara mt-5 mb-5 pb-5">
                    <div className="hoverbounce mt-4 mb-4">
                      <span>
                        <IoShield
                          color="rgb(0,48,131)"
                          fontSize={40}
                          className="ioshield"
                        />
                      </span>
                      <span className="titlewhy w-100 mx-2">
                        International quality standards
                      </span>
                    </div>

                    <div className="paraicon mb-4">
                      <p>
                        International quality standards are criteria or rules
                        set up by organizations that help determine compliance
                        across national borders.
                      </p>
                    </div>
                  </div>

                  <div className="iconpara mt-5 mb-5 pb-5">
                    <div className="hoverbounce mt-4 mb-4">
                      <span>
                        <IoPricetagsSharp
                          color="rgb(0,48,131)"
                          fontSize={40}
                          className="ioshield"
                        />
                      </span>
                      <span className="titlewhy w-100 mx-2">
                        Competitive pricing policy
                      </span>
                    </div>

                    <div className="paraicon">
                      <p>
                        Competitive pricing is a pricing strategy in which the
                        competitors' prices are taken into consideration when
                        setting the price of the same or similar products.
                      </p>
                    </div>
                  </div>

                  <div className="iconpara mt-5 mb-5 pb-5">
                    <div className="hoverbounce mt-4 mb-4">
                      <span>
                        <FaPaperPlane
                          color="rgb(0,48,131)"
                          fontSize={40}
                          className="ioshield"
                        />
                      </span>
                      <span className="titlewhy w-100 mx-2">
                        Technically qualified engineers
                      </span>
                    </div>

                    <div className="paraicon">
                      <p>
                        An engineering technician is primarily trained in the
                        skills and techniques related to a specific ...
                        Engineering technicians help solve technical problems in
                        many ways.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="">
                  <img
                    src={mobileView}
                    alt="kesarmobileapp"
                    className="m-auto kesarImage img-fluid"
                  />
                  <div className="borderBWThem"></div>
                </div>

                <div className="childOfNewclasswhy">
                  <div className="iconpara mt-5 mb-5 pb-5">
                    <div className="hoverbounce extraright lastHoverBon mt-4 mb-4 mr-0">
                      <span className="titlewhy mx-2">
                        Stringent quality control
                      </span>
                      <span>
                        <FaRegCalendarDays
                          color="rgb(0,48,131)"
                          fontSize={40}
                          className="ioshield"
                        />
                      </span>
                    </div>
                    <div className="paraicon mb-4">
                      <p className="rightparawhy">
                        Our customers should expect nothing less than the best
                        possible product.
                      </p>
                    </div>
                  </div>

                  <div className="iconpara mt-5 mb-5 pb-5">
                    <div className="hoverbounce lastHoverBon mt-4 mb-4">
                      <span className="titlewhy mx-2">
                        Ethical business policies
                      </span>
                      <span>
                        <MdBusinessCenter
                          color="rgb(0,48,131)"
                          fontSize={40}
                          className="ioshield"
                        />
                      </span>
                    </div>
                    <div className="paraicon mb-4">
                      <p className="rightparawhy">
                        Ethical policies are guidelines for all employees of a
                        company to do the right thing and behave at high
                        standards at all times. Good ethical policies create a
                        good culture based on trust and transparency..
                      </p>
                    </div>
                  </div>

                  <div className="iconpara mt-5 mb-5 pb-5">
                    <div className="hoverbounce lastHoverBon mt-4 mb-4">
                      <span className="titlewhy mx-2">
                        Timely delivery schedule
                      </span>
                      <span>
                        <IoMdSettings
                          color="rgb(0,48,131)"
                          fontSize="40"
                          className="ioshield"
                        />
                      </span>
                    </div>
                    <div className="paraicon mb-4">
                      <p className="rightparawhy">
                        On time delivery seems simple but is actually quite
                        nuanced, with a myriad of factors complicating both the
                        definition of OTD and how it is measured.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CompanyOverview />
      <CoreValue />
      <Vision />
      <Misson />
    </>
  );
};

export default Whyus;
