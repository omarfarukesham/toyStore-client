import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Growth = () => {
  const [charts, setCharts] = useState([]);
  useEffect(() => {
    fetch("https://serene-headland-23680.herokuapp.com/sales")
      .then((res) => res.json())
      .then((data) => setCharts(data));
  }, []);

  return (
    <div className="navbar--bg">
      <div className=" container-fluid text-center mt-5">
        <h1 className="fs-2 text-center my-5 fw-bold headIcon--design headText--design">
          <i class="fa-solid fa-arrow-up-right-dots"></i>Our Growth
        </h1>
      </div>
      <div className="container-fluid">
        <div className="row text-center">
          <div
            className="col-lg-6 col-md-12 d-flex justify-content-center"
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="m-3">
              <h3 className="text-dark fw-bold">First Quarter(Sales)</h3>
              <LineChart width={350} height={300} data={charts}>
                <Line dataKey={"sell"} stroke="#8884d8" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip></Tooltip>
              </LineChart>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-12 d-flex justify-content-center"
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="m-2 ">
              <h3 className="text-dark fw-bold">Second Quarter(Revenue)</h3>
              <BarChart width={350} height={300} data={charts}>
                <XAxis dataKey="month" />
                <YAxis />
                <Bar dataKey="revenue" barSize={20} fill="#8884d8" />
                <Tooltip></Tooltip>
              </BarChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Growth;
