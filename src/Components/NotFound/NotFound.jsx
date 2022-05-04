import React from "react";
import notFound from "../../images/404.jpg";
import Footer2 from "../Footer/Footer2";
const NotFound = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="w-75 mx-auto text-center h-100 mt-5">
          <img src={notFound} className="img-fluid" alt="page not found" />
        </div>
      </div>
      <div className="mt-3">
        <Footer2></Footer2>
      </div>
    </>
  );
};

export default NotFound;
