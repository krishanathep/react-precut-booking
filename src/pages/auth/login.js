import React,{ useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault();

    const data = { username, password };

    const resusetOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    await fetch("https://www.melivecode.com/api/login", resusetOptions)
      .then((res) => res.json())
      .then((res) => {
        console.log(data)
        if ("accessToken" in res) {

          localStorage.setItem("accessToken", res["accessToken"]);
          localStorage.setItem("user", JSON.stringify(res["user"]));
          //navigate("/dashboard")
          
          toast.success('Logged in successfully.', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });

            window.setTimeout(function() {
              window.location.href = "/dashboard";
            }, 2500)

        } else {

          toast.error("Incorrect username or password.", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

        }
      });
  }

  return (
    <>
    <ToastContainer/>
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <Link to="/">
            <b>Admin</b>LTE
          </Link>
        </div>
        <div className="card card-primary card-outline">
          <div className="card-header" align="center">
            Sign in to start your session
          </div>
          <div className="card-body login-card-body">
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  type="username"
                  className="form-control"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
