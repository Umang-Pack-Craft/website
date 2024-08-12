import React from "react";
import "../Whyus/CoreValue.css";
import "../Whyus/Vision.css";



const QualityControl = () => {
  return (
    <>
  
      <div className="container-fluid ">
        <div className="row">
          <div className="col-12 whyuscnt  " id="mission">
            <h2 className="whyusTitle pb-2">Quality Control</h2>
             
            <p className="w-75 p-2 whyusTitleContent">
              
                <p>
                We are equipped with a state-of-the-art testing laboratory that ensures the highest quality of our products. From raw materials to finished goods, every stage undergoes rigorous testing using modern equipment, all under the supervision of qualified professionals. Our fully equipped QC lab meticulously tests all inbound and outbound materials to meet stringent standards, ensuring that our customers receive packaging solutions that not only safeguard their products but also come with the assurance of high quality and zero defects.
                </p>
                <p style={{float:"left"}}>
                  <strong>Facilities in our QC lab :</strong>
                </p>
              
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 ">
            <div className="missionPoint w-75 mx-auto">
              <p className="mx-2">• Compression strength machine for boxes</p>
              <p className="mx-2">• Bursting strength machine for boxes and paper</p>
              <p className="mx-2">• BF tester for paper</p>
              <p className="mx-2">• GSM tester</p>
              <p className="mx-2">• Moisture meter</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QualityControl;
