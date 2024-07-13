import React from "react";
import "./Fotter.css";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import { ImGooglePlus3 } from "react-icons/im";
import { Link } from "react-router-dom";

const Fotter = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-12 p-0 m-0">
            <div class="footer-icons p-0 m-4">
              <div className="footerContact">
                <span>
                  <FaPhoneVolume className="fotterphone" fontSize={30} />
                </span>
                <span className="mt-3">02770-239243/44</span>
              </div>

              <div className="footerContact">
                <span>
                  <FaLocationDot className="fotterphone" fontSize={33} />
                </span>
                <span
                  className="mt-3 addressMobile"
                  style={{ textAlign: "center" }}
                >
                  {" "}
                  Sr. No.: 109 & 110, Nr. Ahmadpura Bus Stop, Talod-Himatnagar
                  <br />
                  Highway, Ahmadpura Ta.Talod, Dist. Sabarkantha - 383215,
                  Gujarat.(lndia)
                </span>
              </div>

              <div className="footerContact">
                <span>
                  <IoMail className="fotterphone" fontSize={30} />
                </span>
                <span className="mt-3">
                  {" "}
                  info@kesarcraft.com
                  <br />
                  sales@kesarcraft.com
                </span>
              </div>
            </div>
            <div class="footer-content p-0 m-0">
              <p className="w-50 p-4">
                Copyright © 2020 Kesar. All rights reserved.
              </p>
              <div class="design-info">
                <div class="copyright-icons m-4">
                  <CiFacebook
                    fontSize={35}
                    className="copyrighticoninner p-1"
                  />
                  <ImGooglePlus3
                    fontSize={35}
                    className="copyrighticoninner p-1"
                  />
                </div>
                <p>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to="disneygraphics.com"
                  >
                    Design by Disneygraphics
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fotter;
