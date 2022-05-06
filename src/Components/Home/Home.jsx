import React from "react";
import Banner from "../Banner/Banner";
import Growth from "../Growth/Growth";
import Inventory from "../Inventory/Inventory";
import Footer from "../Footer/Footer";
import "./Home.css";
import Improvebox from "../Improvement/Improvebox";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Growth></Growth>
      <Inventory></Inventory>
      <Improvebox></Improvebox>
      <Footer></Footer>
    </>
  );
};

export default Home;
