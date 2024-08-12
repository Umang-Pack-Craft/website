import React from "react";
import "./CompanyOverview.css";

import { FaBuilding, FaMapMarkerAlt, FaHistory, FaIndustry, FaUsers, FaBoxOpen } from "react-icons/fa";

const CompanyOverview = () => {
  const overviewCards = [
    {
      icon: <FaBuilding />,
      title: "About Us",
      content: "Umang Pack Craft, established in 2018, specializes in producing 3, 5, and 7-ply corrugated boxes. Located near Chhatral, our 7,500 sq. ft. facility is equipped with both manual and automated corrugation plants. We are dedicated to delivering tailored packaging solutions that ensure complete customer satisfaction."
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      content: "We are located at Sr. No. 109 & 110, near Ahmadpura Bus Stop on the Talod-Himatnagar Highway, Sabarkantha, Gujarat - 383215. Our facility is 64 km from Ahmedabad Airport, 20 km from Himatnagar, and 52 km from Gandhinagar."
    },
    {
      icon: <FaHistory />,
      title: "Achievements",
      content: "Since our inception in April 2018, we scaled production to 150-200 tons per month within just 3 months. We serve a diverse range of industries, including Oil, Tiles & Ceramics, Pharmaceuticals, Food & Beverages, and Solar."
    },
    {
      icon: <FaIndustry />,
      title: "Market Coverage",
      content: "We cater to various industries, providing high-strength, odorless boxes for food and dairy, robust packaging for the oil industry, large-sized boxes for textiles, and custom-fit solutions for pharmaceuticals, all crafted with precision to meet diverse needs."
    },
    {
      icon: <FaUsers />,
      title: "Our Reputation",
      content: "Known as one of the renowned manufacturers, exporters, and suppliers in the domain of 3, 5, and 7-ply Automatic Corrugated Packaging Boxes."
    },
    {
      icon: <FaBoxOpen />,
      title: "Product Range",
      content: "We offer a range of packaging solutions: Pallet Boxes for bulk and heavy products, Duplex Boxes with a glossy finish and optional lamination, Multicolor Boxes featuring vibrant designs from our Flexo and offset printing, Die Cut Boxes customized for easy packing, and Regular Slotted (RSC) Boxes for universal sizes with fast turnaround."
    }
  ];

  return (
    <div className="company-overview">
      <div >
        <div className="company">
          <h2 className="overview mt-5 ">Company Overview</h2>
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