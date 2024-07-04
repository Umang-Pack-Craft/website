import React from "react";
import "../Whyus/Vision.css";
import "../Whyus/CoreValue.css";
import "./Certification.css";
const Certification = () => {
  const openPDF = () => {
    window.open(
      "https://kesarcraft.com/certificate/Policy%20On%20Prevention%20Of%20Sexual%20Harassment.pdf"
    );
  };
  const openPDF1 = () => {
    window.open(
      "https://kesarcraft.com/certificate/Policy%20On%20Prevention%20Of%20Sexual%20Harassment.pdf"
    );
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 whyuscnt">
          <h2 className="whyusTitle pb-2">Certification</h2>
          <div className="line"></div>
          <span className="p-3">Click on Image for Download Certificate</span>
          <div className="certis">
            <div className="certi1 m-4 p-4" onClick={openPDF}>
              <img
                src="https://kesarcraft.com/certificate/EMS-CA.jpg"
                height="500px"
                alt=""
              />
            </div>
            <div className="certi2 m-4 p-4" onClick={openPDF1}>
              <img
                src="https://kesarcraft.com/certificate/QMS-CA.jpg"
                height="500px"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certification;
