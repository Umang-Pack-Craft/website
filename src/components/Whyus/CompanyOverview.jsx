import React from "react";
import "./CompanyOverview.css";

import { FaBuilding, FaMapMarkerAlt, FaHistory, FaIndustry, FaUsers, FaBoxOpen } from "react-icons/fa";

const CompanyOverview = () => {
  const overviewCards = [
    {
      icon: <FaBuilding />,
      title: "About Us",
      content: "Kesar Craft Packaging Pvt. Ltd. is a professionally managed manufacturing company under the Vertex Industries Group of Companies, established in 2011."
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      content: "Based in Ahmedpura, Ta:~ Talod, Dist:- Sabarkantha in North Gujarat. 64km from Ahmedabad Airport, 20km from Himatnagar, and 52km from Gandhinagar."
    },
    {
      icon: <FaHistory />,
      title: "Experience",
      content: "Over 9 years of experience in Industrial marketing, understanding client requirements, demands, and service expectations."
    },
    {
      icon: <FaIndustry />,
      title: "Group Companies",
      content: "Under the parasol of our Group of Companies, Vertex Industries which manufactures PET Flakes we do business with leading companies in India like. Reliance industries limited, Ganesha Ecosphere Ltd. Tijaria Polypipes Ltd. Viral IndustrE pvt. ltd"
    },
    {
      icon: <FaUsers />,
      title: "Our Reputation",
      content: "Known as one of the renowned manufacturers, exporters, and suppliers in the domain of 3 ply & 5 ply Automatic Corrugated Packaging Boxes."
    },
    {
      icon: <FaBoxOpen />,
      title: "Product Range",
      content: "We manufacture 3 ply & 5 ply Automatic Corrugated Packaging Boxes and are also associated with Ceramic Tiles & Laminates, all compliant with industry standards."
    }
  ];

  return (
    <div className="company-overview">
      <div >
        <div className="company">
          <h2 className="company-overview mb-4 ">COMPANY OVERVIEW</h2>
          <div className="line "></div>
          
          {/* <h2 className="company-name">Umang Pack Craft Pvt. Ltd</h2> */}
        </div>
      </div>
      <div className="cards-container">
        {overviewCards.map((card, index) => (
          <div className="overview-card" key={index}>
            <div className="card-icon">{card.icon}</div>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-content">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyOverview;