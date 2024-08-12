import React from "react";
import "./CoreValue.css";
import "./Vision.css";

const Misson = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 whyuscnt" id="mission">
            <h2 className="whyusTitle">Mission</h2>

            <p className="w-75 p-2 whyusTitleContent ">
              
                <p>
                  To meet our customer's dynamic packaging needs by providing
                  cost-effective, optimised, and eco-friendly corrugated box
                  solutions. We are committed to delivering on our promises,
                  continually enhancing our quality standards, and building
                  customer services that create long-term satisfaction and
                  loyalty.
                </p>
                <p style={{float:"left"}}>
                  <strong>We want to consistently delight our customers by:</strong>
                </p>
              
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 ">
            <div className="missionPoint w-75 mx-auto">
              <p className="mx-2">→ Delivering with commitments</p>
              <p className="mx-2">→ Improving our quality standards</p>
              <p className="mx-2">→ Building customer services that last</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Misson;
