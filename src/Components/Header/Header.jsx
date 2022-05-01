import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import './Header.css'
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import './Header.css'

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  
  const logOut = () =>{
    signOut(auth);
  }

  return (
    <div className="container-fluid navbar--bg sticky-top text-dark">
      <nav className="navbar navbar-expand-lg  sticky-top">
        <div className="container-fluid">
        <Link to="/" className="navbar-brand fs-3 fw-bold navbar--design text-dark " title="TOYS FOR HAPPINESS....." >
           {/* <img className="logo--design" src={logo} alt="" /> */}
           Kids <span className="navbar--design">Store</span>
          </Link>
          <button
            className="navbar-toggler text-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-dark"></span>
          </button>
       
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav w-100 justify-content-end ">
              <li className="nav-item">
                <CustomLink className="nav-link  text-dark " aria-current="page" to="/home" >
                  Home
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink  to='/blogs' className="nav-link text-dark" >
                  Blogs
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink  to='/inventory/:id' className="nav-link text-dark" >
                  Inventory
                  
                </CustomLink>
              </li>
              <li className="nav-item">
              {
                  user && <>
                  
                  <CustomLink className="nav-link text-dark" to="/wishlist" >
                  <i class="fa-solid fa-heart-circle-plus mx-2 icon--design"></i> WishList
                 </CustomLink>
                  </>
                }
                
              </li>
              <li className="nav-item">
              { user?.uid ? <button onClick={logOut} className="btn btn--design">SignOut</button>:
                 <CustomLink className=" text-dark fw-bold icon--plus nav-link " to="/login"> <i className="fa-solid fa-user-plus"></i>Login</CustomLink>
               }
               
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
