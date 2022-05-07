import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./Improvebox.css";

const Improvebox = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    fetch("https://serene-headland-23680.herokuapp.com/readFeedback")
      .then((res) => res.json())
      .then((data) => setFeedbacks(data));
  }, [feedbacks]);

  const feedbackHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const department = e.target.department.value;
    const feedback = e.target.feedback.value;
    const data = { email, department, feedback };

    // console.log(data);
    fetch("https://serene-headland-23680.herokuapp.com/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        const newUser = [...feedbacks, result];
        setFeedbacks(newUser);
        alert("Your feedback submited uccessfully");
        e.target.reset();
        // console.log(result)
      });
    // console.log(feedbacks);
  };

  return (
    <div className="container-fluid suggestion--design">
      <div
        className=" container-fluid text-center mt-5"
        data-aos="zoom-in-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
      >
        <h1 className="fs-2 text-center my-5 fw-bold headIcon--design headText--design">
          <i class="fa-solid fa-comment-dots"></i>FeedBack
        </h1>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12 my-3">
          <form onSubmit={feedbackHandler} className="w-75 mx-auto">
            <div class="form-group mb-2">
              <input
                name="email"
                type="email"
                class="form-control"
                placeholder="Email.."
                required
              />
            </div>
            <div class="form-group mb-2">
              <input
                name="department"
                type="text"
                class="form-control"
                placeholder="Department"
                required
              />
            </div>

            <div class="form-group mb-2">
              <textarea
                name="feedback"
                class="form-control"
                rows="3"
                placeholder="Your suggestion............"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn--design"
              data-aos="zoom-in-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              submit
            </button>
          </form>
        </div>
        <div className="col-lg-6 col-md-12" data-aos="zoom-in-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
          <p className="text-center fs-3 fw-bold">
            {" "}
            Working with your valuable suggestion
          </p>
          <h5 className="fw-bold">
            User Name -<span className="text-primary">{user?.displayName}</span>
          </h5>
          {feedbacks.map((feed) => (
            <div className="bg-light p-3 mb-2">
              <p className="fw-bold">Department -{feed?.department}</p>
              <p>
                Suggestion -<span className="fw-bold">{feed?.feedback}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Improvebox;
