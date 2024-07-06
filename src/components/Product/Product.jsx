import React from "react";
import OurProductRange from "./OurProductRange";
import MainProducts from "./MainProducts";
import QualityControl from "./QualityControl";
import Certification from "./Certification";
import MainProductcarousol from "./MainProductcarousol";
import Policies from "./Policies";
import Testimonial from "./Testimonial";

const Product = () => {
  return (
    <>
      <div id="product" className="container-fluid  mt-5 mb-5">
        <div className="row">
          <div className="col-12 whyuscnt">
            <h2 className="whyusTitle pb-2">Product</h2>
            <div className="line"></div>
          </div>
        </div>
        <OurProductRange />
        <MainProducts />
        <MainProductcarousol />
        <QualityControl />
        {/* <QualityAssurance /> */}
        <Certification />
        <Policies />
        <Testimonial />
      </div>
    </>
  );
};

export default Product;
