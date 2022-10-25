import React, { useState } from "react";
import { Link,useNavigate } from 'react-router-dom'

export default function UsersCreate() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('')
    const [role, setRole] = useState('user')
    const [fab_name, setFabName] = useState('')
    const [password, setPassword] = useState('')
    const [password_confirm, setPasswordConfirm] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();

        if(password !== password_confirm){
          alert('please Check Password confirm')
          return
        }

        const data = {
            email, name, role, fab_name, password,
          }
         
          const resusetOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          };
        
          fetch("http://127.0.0.1:8000/api/register", resusetOptions)
          .then((res) => res.json())
          .then((res) => {
            if (res.success === true) {
              alert("เพิ่มข้อมูลเรียบร้อยแล้ว" + res.status);
              //window.location.href = "/backend/users";
              navigate('/backend/users')
            } else {
              alert("มีบางอย่างผิดพลาด" + res.success);
            }
          });
    
    }

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
                            />
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
                            <label htmlFor="name">FAB</label>
                            <input
                              type="text"
                              className="form-control"
                              value={fab_name}
                              onChange={(event) => setFabName(event.target.value)}
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
                              onChange={(event) => setPassword(event.target.value)}
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
                              onChange={(event) => setPasswordConfirm(event.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-md-12 float-right">
                          <div className="float-right">
                            <button className="btn btn-primary">Submit</button>{" "}
                            <Link to="/backend/users" className="btn btn-danger">
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
