//issue-1: form reset is not working
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Main = () => {
  const [users, setUsers] = useState([]);
  const [update, setUpdate] = useState({});
  const { register, reset } = useForm();

  //Modal code handler here
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    // console.log(id)
    const url = `https://serene-headland-23680.herokuapp.com/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUpdate(data));

    setShow(true);
  };

  //data pick from database through node server
  useEffect(() => {
    fetch("https://serene-headland-23680.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [users]);

  //collect data from form and send it to server then mongodb
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const quantity = e.target.quantity.value;
    const Description = e.target.Description.value;
    const supplier = e.target.supplier.value;

    const data = { name, image, quantity, Description, supplier };
    console.log(data)
    fetch("http://localhost:5000/product", {
      method: "POST",
      headers: {
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
      `http://localhost:5000/updateAll/${update._id}`,
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
      const url = `http://localhost:5000/product/${id}`;
      console.log(url);
      fetch(url, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = users.filter((user) => user._id !== id);
          setUsers(remaining);
          console.log(data);
        });
    }
  };

  return (
    <>
      <div className="h-50 w-50 mx-auto">
        <h3 className="text-center">Add Product</h3>
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

          <button type="submit" className="btn btn-primary w-100">
            Add Stock
          </button>
        </form>
      </div>

      <div className="d-flex justify-content-center container mt-5">
        <div className=" mx-auto">
          <h3 className="text-center">
            Total Stock Items - <span className="text-primary fw-bold">{users.length}</span>
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
                      className="w-25 rounded-circle"
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
                      className="btn btn-primary"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => deleteHandler(user._id)}
                      className="btn btn-danger"
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
    </>
  );
};

export default Main;
