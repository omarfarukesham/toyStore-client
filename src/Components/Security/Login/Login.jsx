import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdatePassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Login.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { async } from "@firebase/util";
import { Helmet } from "react-helmet-async";



const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const[error12, setError12] = useState('')
  const [guser, gloading, gerror] = useAuthState(auth);

  const [ signInWithEmailAndPassword, user1, loading1, error1] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [updatePassword, updating, updateError] = useUpdatePassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(
    auth
  );

  // redirect the user required path
  const navigate = useNavigate()
  const location = useLocation()
  let from = location.state?.from?.pathname || "/";

  if(user1){

// json web token(jwt) token create for secure user when email&password login ........... 
    if(guser){
      console.log(guser?.email)
      const url = 'https://serene-headland-23680.herokuapp.com/login'
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: guser?.email })
      })
      .then(res=>res.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("accessToken", data.token);
        navigate(from, { replace: true });
    });
    }
  }


  if(user){
   navigate(from, { replace: true });
  }


// email password  login code here
  const loginHandler =(e)=>{
    e.preventDefault()
    const email = emailRef.current.value 
    const password = passwordRef.current.value
    signInWithEmailAndPassword(email, password)
    toast("We are cheeking your info, Please wait!")
  }


  //password reset code here .........
  const resetPassword = async() =>{
    const email = emailRef.current.value
    console.log(email)
    if(email){
      await sendPasswordResetEmail(email);
      toast('sending email...............');
      setError12('')

    }else{
      setError12('Please Give your Authentic Email')
    }

  }

  //sign In with google code here 
  const signInGoogle = ()=>{
    signInWithGoogle()
  }

  return (
    <div className=" form--design mx-auto my-5 login--form">
      {/* <Helmet>
        <title>Login</title>
      </Helmet> */}
      <h3 className="my-4 icon--lock text-center"><i className="fa-solid fa-lock-open"></i> LOGIN</h3>
      <p className="text-danger">{error?.message}</p>
      <p className="text-danger">{error1?.message}</p>
      <p className="text-danger">{error12}</p>

      <Form onSubmit={loginHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email"  placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control ref={passwordRef} type="password"  placeholder="Password" required />
        </Form.Group>

        <Button
           className="btn btn-outline-primary w-100"
          variant=""
          type="submit"
          // onClick={notify}
        >
          Log In
        </Button>
        <div className="d-flex justify-content-center align-items-center">
          <div className="or--left"></div>
          <p className="fw-bold p-3">Or</p>
          <div className="or--right"></div>
        </div>
        <div>
          Forget Password ? <button onClick={resetPassword} className="btn btn-link ">Reset Password</button>
          <hr></hr>
          SignIn With Google ? <button onClick={signInGoogle} className="btn btn-link">Google LogIn</button>
          <hr></hr>
          Are you A new User ? <Link to="/register"> New User SignUp</Link>
        </div>

      </Form>
      <ToastContainer />
    </div>
  );
};

export default Login;
