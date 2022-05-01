import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Sales from "../../images/sales.png";
import Growth from "../Growth/Growth";
import Inventory from "../Inventory/Inventory";
import Footer from "../Footer/Footer";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Growth></Growth>
     
      {/* Inventory section design  */}
      <Inventory></Inventory>
      <Footer></Footer>
    </>
  );
};

export default Home;
