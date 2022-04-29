import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Inventory = () => {
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

  return (
    <div className="container-fluid my-5">
      <h1 className="text-center fw-bolder fs-1 mb-5">
        {" "}
        Inventory <span className="text-success">Items</span>
      </h1>
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
                  <button onClick={()=>updateHandler(product._id)} className='btn btn-outline-primary'>Update</button>
                </div>
              </div>
            </div>
          ))}
       

      </div>
    </div>
  );
};

export default Inventory;
