import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer class="footer-10">
        <div class="container">
          <div class="row mb-2 pb-3 no-gutters">
            <div class="col-md-4 mb-md-0 mb-4 d-flex">
              <div class="con con-1 w-100 py-5">
                <div class="con-info w-100 text-center">
                  <div class="icon d-flex align-items-center justify-content-center common--icon">
                    <span className="text-center">
                      {" "}
                      <i class="fa-solid fa-phone"></i>
                    </span>
                  </div>
                  <div class="text">
                    <span>(+00) 1234 5678</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-md-0 mb-4 d-flex">
              <div class="con con-2 w-100 py-5">
                <div class="con-info w-100 text-center">
                  <div class="icon d-flex align-items-center justify-content-center common--icon">
                    <i class="fa-solid fa-envelope-circle-check "></i>
                  </div>
                  <div class="text">
                    <span>info@email.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-md-0 mb-4 d-flex">
              <div class="con con-3 w-100 py-5">
                <div class="con-info w-100 text-center">
                  <div class="icon d-flex align-items-center justify-content-center common--icon">
                    <i class="fa-solid fa-address-card"></i>
                  </div>
                  <div class="text">
                    <span>
                      203 Fake St. Mountain View, San Francisco, California, USA
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-7">
              <div class="row">
                <div class="col-md-4 mb-md-0 mb-4">
                  <h2 class="footer-heading">About</h2>
                  <ul class="list-unstyled">
                    <li>
                      <a href="/" class="d-block">
                        Out story
                      </a>
                    </li>

                    <li>
                      <a href="/" class="d-block">
                        Our Team
                      </a>
                    </li>
                    <li>
                      <a href="/" class="d-block">
                        Career
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-md-4 mb-md-0 mb-4">
                  <h2 class="footer-heading">Company</h2>
                  <ul class="list-unstyled">
                    <li>
                      <a href="/" class="d-block">
                        Our services
                      </a>
                    </li>
                    <li>
                      <a href="/" class="d-block">
                        Clients
                      </a>
                    </li>
                    <li>
                      <a href="/" class="d-block">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-md-4 mb-md-0 mb-4">
                  <h2 class="footer-heading">Resources</h2>
                  <ul class="list-unstyled">
                    <li>
                      <Link to="/blog" class="d-block">
                        Newsletter
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" class="d-block">
                        blog
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" class="d-block">
                        Private policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-5 mb-md-0 mb-4">
              <h2 class="footer-heading">Subscribe</h2>
              <form action="#" class="subscribe-form">
                <div class="form-group d-flex">
                  <input
                    type="text"
                    class="form-control rounded-left"
                    placeholder="Enter email address"
                  />
                  <button
                    type="submit"
                    class="btn btn--design submit rounded-right"
                  >
                    Subscribe
                  </button>
                </div>
                <span class="subheading">
                  Get digital marketing updates in your mailbox
                </span>
              </form>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="d-flex justify-content-around align-items-center">
              <div className="col-md-6 text-center fw-bold">
                <small> @All right reserve by kidStore- 2022.</small>
              </div>
              <div className="col-md-6 d-flex justify-content-end mx-3">
                <span className="mx-3 fs-3 text-dark">
                  <i class="fa-brands fa-facebook"></i>
                </span>
                <span className="mx-3 fs-3 text-dark">
                  <i class="fa-brands fa-twitter"></i>
                </span>
                <span className="mx-3 fs-3 text-dark">
                  <i class="fa-brands fa-linkedin"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
