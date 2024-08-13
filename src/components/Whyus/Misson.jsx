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
                To meet our customers' dynamic packaging needs by providing cost-effective, optimised, and eco-friendly corrugated box solutions. We are committed to delivering on our promises, continually enhancing our quality standards, and building customer services that create long-term satisfaction and loyalty.
                </p>
                <p >
                  <strong style={{fontSize:'1.4rem'}}>We seek to consistently amaze our customers by:</strong>
                </p>
                <div className="col-12 ">
            <div className="missionPoint w-75 mx-auto">
              <p className="mx-2 mb-2">• Fulfilling our promises</p>
              <p className="mx-2 mb-2">• Elevating our quality benchmarks</p>
              <p className="mx-2 mb-2">• Cultivating lasting customer service connections</p>
            </div>
          </div>
            </p>
          </div>
        </div>
        <div className="row">
         
        </div>
      </div>
    </>
  );
};

export default Misson;
