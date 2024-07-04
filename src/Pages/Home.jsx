import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import HomeTop from "../components/HomeTop/HomeTop";
import Whyus from "../components/Whyus/Whyus";
import CompanyOverview from "../components/Whyus/CompanyOverview";
import Vision from "../components/Whyus/Vision";
import Misson from "../components/Whyus/Misson";
import Product from "../components/Product/Product";
import Contactus from "../components/Contactus/Contactus";
import CoreValue from "../components/Whyus/CoreValue.jsx";
import Fotter from "../components/Fotter/Fotter.jsx";
import { BrowserRouter } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <HomeTop />
      <Whyus />
      {/* <Product/>
      <Contactus/>
      <Fotter/> */}
    </div>
  );
};

export default Home;
