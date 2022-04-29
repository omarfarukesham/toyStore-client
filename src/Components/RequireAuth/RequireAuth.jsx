import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { auth } from "../../firebase.init";
import Loading from "../Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const [sendEmailVerification, sending, sendingEmailerror] =
    useSendEmailVerification(auth);

  let location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!user.emailVerified) {
    return (
      <div className=" d-flex justify-content-center mt-5">
        <div>
          <h3 className="text-center text-danger fw-bold">
            Your email is not verified yet
          </h3>
          <h3 className="text-center text-success fw-bold">
            Please Verified your Email....
          </h3>
          <button
            onClick={async () => {
              await sendEmailVerification();
              toast('Sending Email Verification')
            }}
            className="btn btn-success text-center"
          >
            Resend Email Verification
          </button>
          
          <ToastContainer />
        </div>
      </div>
    );
  }
  return children;
};

export default RequireAuth;
