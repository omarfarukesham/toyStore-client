import React from 'react';
import './Footer.css'
const Footer2 = () => {
    return (
        <div className='container-fluid footer2--design'>
             <div className="row">
            <div className="d-flex justify-content-around align-items-center">
              <div className="col-md-6 text-center fw-bold mt-3">
                <small className='text-white'> @All right reserve by kidStore- 2022.</small>
              </div>
              <div className="col-md-6 d-flex justify-content-end align-items-center mx-3">
                <span className="mx-3 fs-3 text-white mt-3">
                  <i class="fa-brands fa-facebook"></i>
                </span>
                <span className="mx-3 fs-3 text-white mt-3">
                  <i class="fa-brands fa-twitter"></i>
                </span>
                <span className="mx-3 fs-3 text-white mt-3">
                  <i class="fa-brands fa-linkedin"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Footer2;