import React from "react";
import "../Whyus/CoreValue.css";
import "../Whyus/Vision.css";

const ParallaxImage = () => {
  return (
    <div className="parallax-wrapper">
      {/* Adjust the background image URL and other styles as needed */}
      <div className="parallax-image"></div>
    </div>
  );
};

const QualityControl = () => {
  return (
    <>
      {/* <ParallaxImage /> */}

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 whyuscnt  " id="mission">
            <h2 className="whyusTitle pb-2">QUALITY CONTROL</h2>
            <div className="line"></div>
            <p className="w-75 p-4 whyusTitleContent notCen">
              <blockquote>
                <q>
                  We are equipped with a dedicated testing laboratory for
                  ensuring the best quality of the products. From the raw
                  materials to the finished products, we conduct testing with
                  the most modern testing equipments under the supervision of
                  qualified professionals to make sure that the customers get
                  the best packaging solutions that safeguard their products.
                  Each product that comes out of our lab has the assurance of
                  high quality and zero defects. The testing equipments that we
                  use are ...
                </q>
              </blockquote>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 ">
            <div className="missionPoint w-75 m-auto">
              <p>→ Box Compression Tester.</p>
              <p>→ Bursting Strength Tester- Double head.</p>
              <p>→ Crush Tester - RCT of paper & ECT & FCT & PAT.</p>
              <p>→ Cobb Tester with a roller.</p>
              <p>→ Electronic GSM Tester.</p>
              <p>→ GSM Tester.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QualityControl;
