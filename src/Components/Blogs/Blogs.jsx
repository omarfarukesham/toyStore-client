import React from "react";
import Footer2 from "../Footer/Footer2";

const Blogs = () => {
  return (
    <>
      <div className="w-75 mx-auto">
        <h1 className="text-center fs-2 fw-bold">Your Question</h1>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Difference between javascript and nodejs
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                You can analysis this two concepts in various aspect here some
                of them---<br></br>
                1.JavaScript(JS) is a high level programming language.<br></br>
                --NodeJS is an open source(runtime) server which is used v8
                engine.<br></br>
                2. Javascript is for client side<br></br>
                --NodeJs is used for server side.<br></br>
                3.Javascript can run any browser which made various engine like,
                safari and Spidermonkey.<br></br> --Nodejs internally used v8
                engine which google chrome engine. 4.Javascript is capable
                enough to add HTML and play with the DOM. <br></br>
                --Nodejs does not have capability to add HTML tags.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                When should you use nodejs and when should you use mongodb
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                NodeJS and MongoDB are two types of significant technologies.
                Monog is a database system in which gives us a unique chance to
                efficiently store documents in a database than store data by
                JSON formate, and to perform operations like data updates, or to
                search documents by some method. on the other hand NodeJs
                responsiblities are especially to execute application
                requirement.Their is no subistitue of these important
                technologies but anyone can used it altogether.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Differences between sql and nosql databases.
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                1. SQL is a structure data storing system.<br></br>
                --- NoSql is a non-structural json formate data storing system.
                <br></br>
                2. SQL is an relational database process<br></br>
                ---NoSql is a non-relational database.<br></br>
                3. SQL is an table base database.<br></br>
                ---key-value pair based on JSON formate. <br></br>
                4. SQL is an vertically scalable <br></br>
                --- NoSql is a horizontally scalable.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2></Footer2>
    </>
  );
};

export default Blogs;
