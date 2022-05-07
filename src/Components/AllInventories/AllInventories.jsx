import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import Footer2 from "../Footer/Footer2";
import "./Allinventories.css";

const Main = () => {
  //product load and update hooks here.................................
  const [users, setUsers] = useState([]);
  const [update, setUpdate] = useState({});
  //user loading firebase hooks code....................................
  const [user, loading, error] = useAuthState(auth);

  //pagination hooks for all items page here...........................
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);

  useEffect(() => {
    fetch(
      `https://serene-headland-23680.herokuapp.com/product?page=${page}&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users, page, size]);

  useEffect(() => {
    fetch("https://serene-headland-23680.herokuapp.com/productCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 5);
        setPageCount(pages);
      });
  }, []);

  //Modal code handler here.............................................
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    const url = `https://serene-headland-23680.herokuapp.com/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUpdate(data));
    setShow(true);
  };


  //collect data from form and send it to server then mongodb
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const quantity = e.target.quantity.value;
    const Description = e.target.Description.value;
    const supplier = e.target.supplier.value;

    const data = { name, image, quantity, Description, supplier };
    console.log(data);
    fetch("https://serene-headland-23680.herokuapp.com/product", {
      method: "POST",
      headers: {
        Authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        const newUser = [...users, result];
        setUsers(newUser);
        alert("Product insert successfully");
        e.target.reset();
      });
  };

  //update items handler code here
  const updateHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const quantity = e.target.quantity.value;
    const Description = e.target.Description.value;
    const supplier = e.target.supplier.value;

    const data = { name, image, quantity, Description, supplier };
    console.log(data);

    fetch(
      `https://serene-headland-23680.herokuapp.com/updateAll/${update._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        const newUser = [...users, result];
        setUsers(newUser);
        alert("Stock Update successfully");
      });
  };
  // Delete items from UI and database
  const deleteHandler = (id) => {
    const proceed = window.confirm("Are you sure for Delete .........");
    if (proceed) {
      const url = `https://serene-headland-23680.herokuapp.com/product/${id}`;
      console.log(url);
      fetch(url, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = users.filter((user) => user._id !== id);
          setUsers(remaining);
          // console.log(data);
        });
    }
  };

  return (
    <>
      <Helmet>
        <title>addStock</title>
      </Helmet>
      <div
        className="h-50 w-50 mx-auto"
        data-aos="zoom-in-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <h3 className="text-center">Add Product</h3>
        <small className="text-center text-primary">....Only for Email/password verified user(jwt-integrated)</small>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control my-2"
              name="name"
              placeholder="Product Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control my-2"
              name="image"
              placeholder="Img URL"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control my-2"
              name="quantity"
              placeholder="quantity"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              className="form-control my-2"
              name="Description"
              placeholder="Product Details"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control my-2"
              name="supplier"
              placeholder="Suppliers"
              required
            />
          </div>

          <button type="submit" className="btn btn--design1 w-100">
            Add Stock
          </button>
        </form>
      </div>

      <div className="d-flex justify-content-center container mt-5">
        <div className=" mx-auto">
          <h3 className="text-center">
            Total Stock Per page -{" "}
            <span className="text-primary fw-bold">{users.length}</span>
          </h3>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Img</th>
                <th scope="col">Name</th>
                <th scope="col">Qty</th>
                <th scope="col">Supplier</th>
                <th scope="col">Options</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <th scope="row">{users.indexOf(user) + 1}</th>
                  <td>
                    <img
                      className="tableImg--design"
                      src={user.image}
                      alt="pImage"
                    />{" "}
                  </td>
                  <td>{user.name}</td>
                  <td>{user.quantity}</td>
                  <td>{user.supplier}</td>

                  <td className="d-flex h-100">
                    <button
                      onClick={() => handleShow(user._id)}
                      className="btn btn--design1"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => deleteHandler(user._id)}
                      className="btn btn-outline-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* modal used here */}
        <div className="modal--design">
          <Modal
            className="mx-auto text-center"
            show={show}
            onHide={handleClose}
            animation={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Product Stock Update</Modal.Title>
            </Modal.Header>
            {/* onClick={() => updateHandler()} */}

            <Modal.Body>
              <div className="mt-2">
                <form onSubmit={updateHandler}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control my-2"
                      name="name"
                      placeholder={update?.name}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control my-2"
                      name="image"
                      placeholder="Img URL"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control my-2"
                      name="quantity"
                      placeholder={update?.quantity}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      type="text"
                      className="form-control my-2"
                      name="Description"
                      placeholder={update?.Description}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control my-2"
                      name="supplier"
                      placeholder={update.supplier}
                    />
                  </div>

                  <button type="submit" className="btn btn-outline-primary">
                    Update Stock
                  </button>
                </form>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      <div className="pagination d-flex justify-content-center">
        {[...Array(pageCount).keys()].map((number) => (
          <button
            onClick={() => setPage(number)}
            className={page == number ? "selected" : ""}
          >
            {" "}
            {number + 1}
          </button>
        ))}

        <div className="pagination">
          <select onChange={(e) => setSize(e.target.value)}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </div>
      </div>
      <Footer2></Footer2>
    </>
  );
};

export default Main;
