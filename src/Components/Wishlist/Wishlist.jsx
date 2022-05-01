import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import wishlist from "../../images/wishlist.png";
import "./wishlist.css";

const Wishlist = () => {
  const [user] = useAuthState(auth);
  const [wishlists, setWishlist] = useState([]);
  useEffect(() => {
    const email = user.email;
    const url = `http://localhost:5000/order?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setWishlist(data));
  }, [wishlists]);

  return (
    <div className="text-center">
      <div className="container-fluid">
        <div className=" container-fluid text-center mt-5">
          <h1 className="fs-2 text-center my-5 fw-bold headIcon--design headText--design">
          <i class="fa-solid fa-dove"></i>My Wishlist.....
            {wishlists.length}
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <img src={wishlist} className="img-fluid" alt="wishlistImg" />
          </div>
          <div className="col-lg-6 col-md-12">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">ProductName</th>
                  <th scope="col">Option</th>
                </tr>
              </thead>
              <tbody>
               
                  {wishlists.map((wish) => (
                     <tr>
                      <th scope="row">{wishlists.indexOf(wish) + 1}</th>
                      <td>{wish.productName}</td>
                      <td>
                        <button className="btn btn--design1">
                          Remove
                        </button>
                      </td>
                      </tr>
                  ))}
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Your favorite product={wishlists.length}
      {wishlists.map((wish) => (
        <div className="text-center">
          <p className="text-primary fw-bold">Favorite -{wish.productName}</p>
        </div>
      ))} */}
    </div>
  );
};

export default Wishlist;
