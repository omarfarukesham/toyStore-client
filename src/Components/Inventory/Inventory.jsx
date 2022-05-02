import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import './Inventory.css'

const Inventory = () => {
  const [user, loading, error] = useAuthState(auth);
  const [products, setProducts] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/products")
      // fetch("https://serene-headland-23680.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const updateHandler = (id) => {
    navigate(`/inventory/${id}`);
  };

  const wishlistHandler = (id) => {
    const productName = id;
    const userEmail = user?.email;
    // const productName = products.name
    const order = { productName, userEmail };
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        navigate("/wishlist");
      });
  };
  return (
    <div className="container-fluid my-3">
      <div className=" container-fluid text-center mt-3">
        <h1 className="fs-2 text-center my-5 fw-bold headIcon--design headText--design">
        <i class="fa-solid fa-shop-lock"></i>Stock Items
        </h1>
      </div>
      <div className="d-flex justify-content-end mb-3">
      <Link
        className="text-decoration-none fw-bold btn btn--design1 my-3"
        to="/allInventories"
      >
        All Inventories...
      </Link>

      </div>
     
      <div className="row">
        {products.map((product) => (
          <div className="col-md-6 col-lg-3 ">
            <div class="card my-3">
              <img
                class="card-img-top"
                src={product.image}
                alt="UpdateImages"
              />
              <div class="card-body">
                <h5 class="card-title fw-bold">Name - {product.name}</h5>
                <h6 class="card-title fw-bold text-primary">
                  Stock -{product.quantity}
                </h6>
                <h6 class="card-title">Brand -{product.supplier}</h6>
                <div className="d-flex justify-content-around align-items-center">
                  <button
                    onClick={() => wishlistHandler(product.name)}
                    className="btn btn--design1 "
                  >
                    {" "}
                    <i class="fa-solid fa-heart-circle-plus mx-1"></i>
                    Wishlist
                  </button>
                  <button
                    onClick={() => updateHandler(product._id)}
                    className="btn btn--design2"
                  >
                    UpdateStock
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
