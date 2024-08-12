import React from "react";
// import { IoShield } from "react-icons/io5";
// import { FaPaperPlane } from "react-icons/fa";
// import { IoPricetagsSharp } from "react-icons/io5";
// import { FaRegCalendarDays } from "react-icons/fa6";
// import { MdBusinessCenter } from "react-icons/md";
// import { IoMdSettings } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
// import { FaDollarSign } from "react-icons/fa"; // Added for the dollar sign icon
import "./Whyus.css";
import CoreValue from "./CoreValue";
import Vision from "./Vision";
import Misson from "./Misson";
import CompanyOverview from "./CompanyOverview";
// import mobileView from "../../assets/umangMobile.png";
const Whyus = () => {
  return (
    <>
      <div id="whyus" className="container-fluid containwyus">
        <div className="row">
          <div className="upper">
            <div className="whyusHeading ">
              <span>Why Us ?</span>
            </div>

            <div className="parawhy my-3">
              <blockquote>
                <pattern>
                  <strong>Umang Pack Craft</strong> was founded in the year 2018 and we
                  specialise in manufacturing 3, 5, and 7 ply corrugated boxes.
                  Situated near Chhatral, our factory spans 7,500 sq. ft and
                  houses both manual and automatic corrugation plants. Our aim
                  is customer satisfaction, crafting boxes to meet diverse
                  specifications.
                </pattern>
              </blockquote>
            </div>
            {/* New section for statistics */}
            <div className="statistics-container">
              <div className="statistic-item">
                <h2>6</h2>
                <p>Years of Experience</p>
              </div>
              <div className="statistic-item">
                <h2>50+</h2>
                <p>Employees</p>
              </div>
              <div className="statistic-item">
                <h2>50+</h2>
                <p>Global Customers</p>
              </div>
              <div className="statistic-item">
                <h2>10000</h2>
                <p>Ton's of Corrugated Boxes</p>
              </div>
            </div>
          </div>
          <div className="key-steps-container">
            <h2>Our Key Steps to Success</h2>
            <div className="key-steps-grid">
              {[
                "Cost Effective Solutions",
                "Customer First Approach",
                "Strong Quality Assurance Practices",
                "State of the Art Infrastructure",
                "Diverse Customer Base",
                "Professionalism and Ethics"
              ].map((step, index) => (
                <div key={index} className="key-step-item">
                  <FaCheckCircle className="key-step-icon" />
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
 

      </div>


    </div >
      <CompanyOverview />
      <CoreValue />
      <Vision />
      <Misson />
    </>
  );
};

export default Whyus;
