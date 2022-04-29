import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Sales from "../../images/sales.png";
import Growth from "../Growth/Growth";
const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className="container-fluid">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              class="nav-link active text-success fw-bold"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Sales Growth
            </button>
            <button
              class="nav-link text-success fw-bold"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              Offer
            </button>
            <button
              class="nav-link fw-bold text-success"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              Stock
            </button>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div className=" d-flex justify-content-center">
              <Growth></Growth>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
            
          >
            <div className="d-flex justify-content-around">
            <img className="w-25" src={Sales} alt="growth of sales" />
            <img className="w-25" src={Sales} alt="growth of sales" />
            <img className="w-25" src={Sales} alt="growth of sales" />
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            <div className="d-flex justify-content-around mt-3">
              <h3 className="fw-bold text-black">Kids Toys - 2403(pice)</h3>
              <h3 className="fw-bold text-black">Dress of Kids - 2403(pice)</h3>
              <h3 className="fw-bold text-black">Digital Toys - 2403(pice)</h3>
            </div>
            
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Home;
