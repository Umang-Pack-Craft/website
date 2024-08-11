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

const Vision = () => {
  return (
    <>
      {/* <ParallaxImage /> decrease the gap and give a white background */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 whyuscnt">
            <h2 className="whyusTitle pb-2">Vision</h2>

            <div className="line"></div>
            <p className="w-75 p-4 mb-4 pb-4 whyusTitleContent">
              <blockquote>
                <q>
                  To be the leading company and preferred supplier for providing
                  innovative, high-quality corrugated box packaging solutions to
                  customers across the country. We aim to build lasting
                  partnerships with our clients by delivering exceptional
                  products and services that meet their evolving needs.
                </q>
              </blockquote>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
