import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

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

  const updateHandler = (id) =>{
      navigate(`/inventory/${id}`);

  }

  const wishlistHandler = (id) =>{
      const productName = id;
      const userEmail = user.email
      // const productName = products.name
      const order = {productName, userEmail}
      fetch('http://localhost:5000/order', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then(data => {
          console.log(data);
          navigate('/wishlist')
        })

  }
  return (
    <div className="container-fluid my-5">
      <h1 className="text-center fw-bolder fs-1 mb-5">
        {" "}
        Inventory <span className="text-success">Items</span>
      </h1>
     <Link className="text-decoration-none fw-bold btn btn-outline-primary my-3" to='/allInventories' >All Inventories...</Link>

      <div className="row">
        
          {products.map((product) => (
            <div className="col-md-6 col-lg-4">
              <div class="card">
                <img
                  class="card-img-top"
                  src={product.image}
                  alt="UpdateImages"
                />
                <div class="card-body">
                  <h5 class="card-title fw-bold">Name - {product.name}</h5>
                  <h6 class="card-title fw-bold text-primary">Stock -{product.quantity}</h6>
                  <h6 class="card-title">Brand -{product.supplier}</h6>
                  <button onClick={()=>wishlistHandler(product.name)} className="btn btn-outline-warning w-100"> <i class="fa-solid fa-heart-circle-plus mx-2 fs-3"></i>Make Me Happy....</button><br></br>
                  <button onClick={()=>updateHandler(product._id)} className='btn btn-outline-primary mt-2 w-100'>Update Stock</button>
                </div>
              </div>
            </div>
          ))}
       

      </div>
    </div>
  );
};

export default Inventory;
