import React from "react";
import "./Fotter.css";
import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import { ImGooglePlus3 } from "react-icons/im";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="footer-content">
          <div className="footer-info">
            <div className="footer-contact">
              <FaPhoneVolume className="footer-icon" />
              <span>02770-239243/44</span>
            </div>
            <div className="footer-contact">
              <FaLocationDot className="footer-icon" />
              <span className="address">
                Sr. No.: 109 & 110, Nr. Ahmadpura Bus Stop, Talod-Himatnagar
                Highway, Ahmadpura Ta.Talod, Dist. Sabarkantha - 383215,
                Gujarat.(India)
              </span>
            </div>
            <div className="footer-contact">
              <IoMail className="footer-icon" />
              <span>
                info@UmangPackCraft.com
                <br />
                sales@UmangPackCraft.com
              </span>
            </div>
          </div>
          
          
          <div className="footer-bottom">
            <p className="copyright">
              Copyright © 2024 Umang Pack Craft. All rights reserve
            </p>
            <div className="design-info">
              <div className="social-icons">
                <CiFacebook className="social-icon" />
                <ImGooglePlus3 className="social-icon" />
              </div>
              
                <Link to="https://disneygraphics.com" className="design-link">
                   d    |    Design by Disneygraphics
                </Link>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;