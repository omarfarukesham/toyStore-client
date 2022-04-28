import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Register.css";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { auth } from "../../../firebase.init.js";
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  //update user name set with firebase auth code
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  //email and password login
  const [createUserWithEmailAndPassword, user, loading, hookerror] =
    useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true });

  //Github login here
  const [signInWithGithub, userGit, loadingGit, errorGit] = useSignInWithGithub(auth);
    if(userGit){
        navigate('/')
    }
  // google login here
  const [signInWithGoogle, userGoogle] = useSignInWithGoogle(auth);
  if (userGoogle) {
    navigate("/");
  }

  console.log(user)
  // email password form handler here
  const formHandler = async (e) => {

    e.preventDefault();
     const name = e.target.userName.value

    if (password !== confirmPass) {
      setError("OPP! Password Mismatch, try again !");
    } else {
     await createUserWithEmailAndPassword(email, password);
     await updateProfile({ displayName: name });
  
      navigate("/");
    }
  };

  return (
    <div className=" form--design mx-auto my-5 login--form">
      {/* <Helmet>
        <title>SignUp</title>
      </Helmet> */}
      <h3 className="my-4 icon--lock text-center">
        <i class="fa-solid fa-user-plus"></i> SignUp
      </h3>
      <Form onSubmit={formHandler}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            name="userName"
            type="text"
            placeholder="Enter Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            onBlur={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            onBlur={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            onBlur={(e) => setConfirmPass(e.target.value)}
            type="password"
            placeholder="ConfirmPassword"
            required
          />
        </Form.Group>
        <p className="text-danger">{error}</p>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={()=>setAgree(!agree)}
            type="checkbox"
            name="terms"
            className={agree ? 'text-primary':'text-danger'}
            label="Agree with terms and conditions"
          />
         
        </Form.Group>

        <Button
            disabled={!agree}
          className="btn btn-outline-primary w-100"
          variant=""
          type="submit"
        >
          SignUp
        </Button>
        <div className="d-flex justify-content-center align-items-center">
          <div className="or--left"></div>
          <p className="fw-bold p-3">Or</p>
          <div className="or--right"></div>
        </div>
        <div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline-primary google--btn w-100 mb-3"
          >
            <i class="fa-brands fa-google"></i>Google SignUp
          </button>
          <button
            onClick={() => signInWithGithub()}
            className="btn btn-outline-primary google--btn w-100 mb-3"
          >
            <i class="fa-brands fa-github-square"></i>GitHub SignUp
          </button>
          
    
        </div>
      </Form>
    </div>
  );
};

export default Login;
