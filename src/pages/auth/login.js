import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const data = { email, password };

    const resusetOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    await fetch("http://127.0.0.1:8000/api/login", resusetOptions)
    //await fetch("https://precutbooking.windsor.co.th/bookings/laravel_api_auth/public/api/login", resusetOptions)
    //await fetch(`${process.env.REACT_APP_API}/login`, resusetOptions)
      .then((res) => res.json())
      .then((res) => {
        if ("token" in res.data) {
          
          localStorage.setItem("token", res.data["token"]);
          localStorage.setItem("name", JSON.stringify(res.data["name"]));
          localStorage.setItem("email", JSON.stringify(res.data["email"]));
          localStorage.setItem("fab", JSON.stringify(res.data["fab"]));
          localStorage.setItem("role", JSON.stringify(res.data["role"]));

          localStorage.setItem("url", JSON.stringify(res.data["url"]));
          localStorage.setItem("code", JSON.stringify(res.data["code"]));

          console.log(res.data.url);
          console.log(res.data.code);

          Swal.fire({
            title: "Successfully",
            text: "Welcome to Precut Booking System",
            icon: "success",
            confirmButtonText: "OK",
            timer: 3000,
          });

          if (res.data.role === "admin") {
            navigate("/bookings");
          } else if (res.data.role === "user") {
            navigate("/bookings");
          } else if (res.data.role === "owner") {
            navigate("/backend/capacity");
          } else if (res.data.role === "estimate"){
            navigate("/backend/specail-design")
          } else if (res.data.role === "sales") {
            navigate("/backend/discount")
          }
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
  }

  return (
    <>
      <div className="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
          <img src={process.env.PUBLIC_URL+"/logo-winsor.png"} class="rounded"></img>
          </div>
          <div className="card card-primary card-outline">
            <div className="card-header" align="center">
              Login to Your Account
            </div>
            <div className="card-body login-card-body">
              <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    {/* <div className="icheck-primary">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember Me</label>
                </div> */}
                  </div>
                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">
                      Sign In
                    </button>
                  </div>
                </div>
              </form>
              <p class="mb-1">
                <a href="https://precutbooking.windsor.co.th/bookings/laravel_api_auth/public/password/reset">I forgot my password</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
