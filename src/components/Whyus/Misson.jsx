import React from "react";
import "./CoreValue.css";
import "./Vision.css";

const ParallaxImage = () => {
  return (
    <div className="parallax-wrapper">
      {/* Adjust the background image URL and other styles as needed */}
      <div className="parallax-image"></div>
    </div>
  );
};

const Misson = () => {
  return (
    <>
      {/* <ParallaxImage /> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 whyuscnt  " id="mission">
            <h2 className="whyusTitle pb-2">Mission</h2>
             
            <p className="w-75 p-4 whyusTitleContent notCen">
              <blockquote>
                <q>
                  To meet our customers' dynamic packaging needs by providing
                  cost-effective, optimised, and eco-friendly corrugated box
                  solutions. We are committed to delivering on our promises,
                  continually enhancing our quality standards, and building
                  customer services that create long-term satisfaction and
                  loyalty.
                </q>
                <p className="my-2">
                  {" "}
                  We want to consistently delight our customers by:
                </p>
              </blockquote>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 ">
            <div className="missionPoint w-75 m-auto">
              <p className="mx-2">→ Delivering with commitments</p>

              <p className="mx-2"> → Improving ourqualitystandards</p>

              <p className="mx-2"> → Building customer services that last</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Misson;
