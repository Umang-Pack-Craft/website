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
import "./CoreValue.css";
import CoreValue from "./CoreValue";
import Vision from "./Vision";
import Misson from "./Misson";
import CompanyOverview from "./CompanyOverview";
// import mobileView from "../../assets/umangMobile.png";
const Whyus = () => {
  return (
    <>
      <CompanyOverview />
      <div  className="container-fluid containwyus">
        <div className="row">
          <div className="upper">
            <h2 className="whyusTitle ">
              Why us?
            </h2>

            <div className="parawhy my-3 p-3">

              <p>
                Founded in 2018, <strong>Umang Pack Craft</strong> specializes in custom 3, 5, and 7 ply corrugated boxes from our 1,76,000 sq. ft. factory near Chhatral, Gujarat.
              </p>

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
            <h2>Our Core Success Methodologies</h2>
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

      <CoreValue />
      <Vision />
      <Misson />
    </>
  );
};

export default Whyus;
