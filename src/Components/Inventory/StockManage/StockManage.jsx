import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const StockManage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    // fetch(`https://serene-headland-23680.herokuapp.com/products/${productId}`)
    fetch(`http://localhost:5000/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [product]);
  //Reduce update
  const reduceQty = (id) => {
    if (product.quantity < 0) {
      return alert("!OPPS No Stock product.......");
    }
    const reduceQuantity = product.quantity - 1;
    console.log(reduceQuantity, id);
    fetch(`http://localhost:5000/update/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: reduceQuantity }),
    })
      .then((res) => res.json())
      // .then(result => console.log(result))
      .then((result) => {
        const newStock = { ...product, result };
        setProduct(newStock);
        alert("One qty Stock has Reduced");
      });
  };

  //stock update
  const stockUpdate = (event) => {
    event.preventDefault();
    const stock = event.target.quantity.value;
    const addStockQty = parseInt(product.quantity) + parseInt(stock);
    // console.log(typeof parseInt(stock));
    // console.log(typeof parseInt(addStockQty));
    console.log(addStockQty);

    //    console.log(data)
    fetch(`http://localhost:5000/update/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity: addStockQty }),
    })
      .then((res) => res.json())
      .then((result) => {
        const newStock = { ...product, result };
        setProduct(newStock);
        alert("Stock added Successfully");
      });
  };

  return (
    <>
      <h1 className="fw-bold fs-2 my-3 text-center">Inventory Management</h1>
      <div className="d-flex justify-content-center">
        <Link
          className="text-decoration-none fw-bold btn btn-outline-primary my-3 text-center"
          to="/allInventories"
        >
          All Inventories...
        </Link>
      </div>

      <div className="m-5 d-flex justify-content-around">
        <div className="w-50">
          <img className="w-25" src={product?.image} alt="pd IMAGES" />
          <p>productId - {productId}</p>
          <p>ProductName - {product?.name}</p>
          <p className="fw-bold text-primary">Stock - {product?.quantity}</p>
          <p>Details - {product?.Description}</p>
          <p>Supplier - {product?.supplier}</p>

          <button
            onClick={() => reduceQty(product._id)}
            className="btn btn-success"
          >
            Delivered
          </button>
        </div>
        <div>
          <h3>
            Restock Your product::{" "}
            <span className="fw-bold text-primary">{product?.quantity}</span>
          </h3>
          <form onSubmit={stockUpdate}>
            <label htmlFor="ImputStock"></label>
            <input type="number" name="quantity" id="" required />
            <button type="submit">Stock Update</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default StockManage;
