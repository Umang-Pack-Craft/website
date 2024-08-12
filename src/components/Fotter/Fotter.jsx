import React from "react";
import "./Fotter.css";
// import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/umangLogo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const handleNavigation = (path, sectionId) => {
    navigate(path);
    if (sectionId) {
      setTimeout(() => scrollToSection(sectionId), 100);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="Logo" onClick={() => handleNavigation('/home', 'home')} />
            <p>Precision in Delivery, Excellence in Service—Your Satisfaction Drives Us. We are committed to exceeding your expectations with professionalism in every interaction. </p>
            {/* <div className="social-icons">
              <FaFacebookF />
              <FaYoutube />
              <FaInstagram />
              <FaLinkedinIn />
            </div> */}
          </div>

          <div className="footer-links">
            <h3>Links</h3>
            <ul>
              <li onClick={() => handleNavigation('/home', 'home')}>Home</li>
              <li onClick={() => handleNavigation('/about', 'whyus')}>About</li>
              <li onClick={() => handleNavigation('/product', 'product')}>Product</li>
              <li onClick={() => handleNavigation('/customers', 'customers')}>Customers</li>
              <li onClick={() => handleNavigation('/contactus', 'contactus')}>Contact</li>
            </ul>
          </div>

          <div className="footer-services">
            <h3>Products</h3>
            <ul>
              <li>Pallet Box</li>
              <li>Duplex Box</li>
              <li>Multicolor Box</li>
              <li>Dye Cut Box</li>
              <li>Regular Slotted (RSC) Box</li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact</h3>
            <p>+079-40306208</p>
            <p>umang.packcraft@yahoo.com</p>
            <p>Sr. No.: 109 & 110, Nr. Ahmadpura Bus Stop, Talod-Himatnagar
              Highway, Ahmadpura Ta.Talod, Dist. Sabarkantha - 383215,
              Gujarat.(India)</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © 2024 Umang Pack Craft Pvt. Ltd. </p><p> Developed By <Link to="https://disneygraphics.com" className="design-link">
            Disney Graphics
          </Link></p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;