import React from "react";
import "./CompanyOverview.css";
import { FaCircle } from "react-icons/fa";
const CompanyOverview = () => {
  return (
    <>
      <div className="component1">
        <div className="parallax-image"></div>
        <div className="timeline containeroverview content-below-parallax">
          <div className="container-fluid m-0 p-0 g-0 ">
            <div className="upperco ">
              <h2 className="overviewheading m-5 mb-3">Company Overview</h2>
              <div className="below mt-2">
                <span>Kesar Craft Packaging Pvt. Ltd</span>
              </div>
              <div>
                <div className="contcircle ">
                  <span>2020</span>
                </div>
              </div>
            </div>
          </div>

          <div className="containerx left-container ">
            <div className="timelinelogo">
              <FaCircle color="#DDDDDD" className="facircle" />
            </div>
            <div className="text-box">
              <p>
                A professionally managed by vertex industries manufacturing
                company under the parasol of our Group of Companies.
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="containerx right-container">
            <div className="timelinelogo">
              <FaCircle color="#DDDDDD" className="facircle" />
            </div>
            <div className="text-box">
              <p>
                Kesar Craft Packaging, based in Ahmedpura, Ta:~ Talod, Dist:-
                Sabarkantha in North Gujarat.
              </p>
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="containerx left-container">
            <div className="timelinelogo">
              <FaCircle color="#DDDDDD" className="facircle" />
            </div>
            <div className="text-box">
              <p>
                Established in the year 2011, we are constantly working towards
                improvising our business strategies as well as upgrading product
                quality.
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="containerx right-container">
            <div className="timelinelogo">
              <FaCircle color="#DDDDDD" className="facircle" />
            </div>
            <div className="text-box">
              <p>
                our company is marked in a well developed area with its
                proximity to Ahmedabad Airport in 64kms distance & 20Km. from
                district city of Himatnagar as well as 52 Km, from capital city
                of Gandhinagar,Gujarat.
              </p>
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="containerx left-container">
            <div className="timelinelogo">
              <FaCircle color="#DDDDDD" className="facircle" />
            </div>
            <div className="text-box">
              <p>
                Having more than 9+ Year experience in Industrial marketing, we
                can understand client requirements, their demand and services
                expected.
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="containerx right-container">
            <div className="timelinelogo">
              <FaCircle color="#DDDDDD" className="facircle" />
            </div>
            <div className="text-box">
              <p>
                Under the parasol of our Group of Companies, Vertex Industries
                which manufactures PET Flakes, we do business with leading
                companies in India like. Reliance industries limited, Ganesha
                Ecosphere Ltd. Tijaria Polypipes Ltd. Viral Industries pvt. ltd
              </p>
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="containerx left-container">
            <div className="timelinelogo">
              <FaCircle color="#DDDDDD" className="facircle" />
            </div>
            <div className="text-box">
              <p>
                We are known as one of the renowned manufacturers, exporters and
                suppliers of the domain. The product gamut offered by us
                comprises of 3 ply & 5 ply Automatic Corrugated Packaging Boxes.
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="containerx right-container">
            <div className="timelinelogo">
              <FaCircle color="#DDDDDD" />
            </div>
            <div className="text-box">
              <p>
                We are also associated with Ceramic Tiles & Laminates.We
                manufacture all our products in compliance with the industry
                standards and norms in order to meet the client expectations..
              </p>
              <span className="right-container-arrow"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyOverview;
