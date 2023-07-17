import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function UsersCreate() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("user");
  const [fab_id, setFabId] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirm, setPasswordConfirm] = useState("");

  const [fab, setFab] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== password_confirm) {
      Swal.fire({
        title: "Oops...",
        text: "Please Check Password confirm",
        icon: "error",
        confirmButtonText: "OK",
        timer: 3000,
      });
      return;
    }

    const data = {
      email,
      name,
      role,
      fab_id,
      password,
    };

    const resusetOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    //fetch("http://127.0.0.1:8000/api/register", resusetOptions)
    fetch("https://precutbooking.windsor.co.th/bookings/laravel_api_auth/public/api/register", resusetOptions)
      .then((res) => res.json())
      .then((res) => {
        if (res.success === true) {
          Swal.fire({
            title: "Successfully",
            text: "Created User Successfully",
            icon: "success",
            confirmButtonText: "OK",
            timer: 3000,
          });

          navigate("/backend/users");
        } else {
          Swal.fire({
            title: "Oops...",
            text: "Something went wrong!",
            icon: "error",
            confirmButtonText: "OK",
            timer: 3000,
          });
          return;
        }
      });
  };

  const fetchData = async () => {
    await fetch("https://precutbooking.windsor.co.th/bookings/laravel_api_auth/public/api/fab-url")
      .then((res) => res.json())
      .then((res) => setFab(res.faburl));
    console.log(fab);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Users Create</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Users create</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card card-primary card-outline">
                  <div className="card-header">
                    <h5 className="m-0">Users create</h5>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="name">Email</label>
                            <input
                              type="text"
                              className="form-control"
                              value={email}
                              onChange={(event) => setEmail(event.target.value)}
                              placeholder="Enter your email"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                              type="text"
                              className="form-control"
                              value={name}
                              onChange={(event) => setName(event.target.value)}
                              placeholder="Enter your Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="name">FAB Name</label>
                            <select class="form-control" id="sel1"
                            value={fab_id}
                            onChange={(event) => setFabId(event.target.value)}
                            >
                              <option value={""}>Select FAB</option>
                              {fab.map((item) => (
                                <option key={item.id} value={item.id}>
                                  {item.fabricator_name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            {/* <label htmlFor="name">Role</label> */}
                            <input
                              type="text"
                              className="form-control"
                              value={role}
                              onChange={(event) => setRole(event.target.value)}
                              hidden
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="name">Password</label>
                            <input
                              type="password"
                              className="form-control"
                              value={password}
                              onChange={(event) =>
                                setPassword(event.target.value)
                              }
                              placeholder="Enter your password"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="name">Password confirm</label>
                            <input
                              type="password"
                              className="form-control"
                              value={password_confirm}
                              onChange={(event) =>
                                setPasswordConfirm(event.target.value)
                              }
                              placeholder="Enter your password confirm"
                            />
                          </div>
                        </div>
                        <div className="col-md-12 float-right">
                          <div className="float-right">
                            <button className="btn btn-primary">Submit</button>{" "}
                            <Link
                              to="/backend/users"
                              className="btn btn-danger"
                            >
                              Cancel
                            </Link>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
