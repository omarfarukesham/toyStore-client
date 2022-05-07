import React from "react";
import noticeboard from "../../images/1.png";
import policy from "../../images/2.png";
const Banner = () => {
  return (
    <div className="container-fluid mt-3 align-items-center">
      <div className="row">
        <div
          className="col-lg-6 col-md-12"
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className="d-flex justify-content-center align-items-center">
            <img className="w-75" src={noticeboard} alt="banner for header" />
          </div>
        </div>

        <div
          className="col-lg-6 col-md-12"
          data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className="d-flex justify-content-center align-items-center">
            <img className="w-75" src={policy} alt="banner for header" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
