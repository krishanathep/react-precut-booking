import React, { useState,useEffect } from "react";
import { Link,useParams,useNavigate } from 'react-router-dom'

export default function UsersEdit() {
    const navigate = useNavigate();

    const {id} = useParams()

    const[edituser, setEditUser] = useState([])

    const getData = async () => {
        await fetch('http://127.0.0.1:8000/api/users/'+id)
        .then((res)=>res.json())
        .then((res)=>setEditUser(res.user))
      }

   useEffect(()=>{
    getData(id)
   },[id])

   function handleInput(event){
    event.persist();
    setEditUser({
      ...edituser,
      [event.target.name]: event.target.value,
    });
   }

   async function handleSubmit(event){
    event.preventDefault();

    const data = {
      name: edituser.name,
      fab_name: edituser.fab_name,
    }

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    await fetch('http://127.0.0.1:8000/api/users-update/'+id, requestOptions)
    .then((res)=>res.json())
    .then((res)=>{
      if(res.status === 200) {
        alert(res.message)
        navigate('/backend/users')
        //window.location.href = "/backend/users"
      }
    })
  }

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Users Update</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Users update</li>
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
                    <h5 className="m-0">Users update</h5>
                  </div>
                  <div className="card-body">
                  <form onSubmit={handleSubmit}>
                      <div className="row">
                        {/* <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="name">Email</label>
                            <input
                              type="text"
                              name="email"
                              className="form-control"
                              value={edituser.email}
                              onChange={handleInput}  
                              readOnly  
                            />
                          </div>
                        </div> */}
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                              type="text"
                              name="name"
                              className="form-control"
                              value={edituser.name}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                        {/* <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="name">Role</label>
                            <input
                              type="text"
                              name="role"
                              className="form-control"
                              value={edituser.role}
                              onChange={handleInput}
                              readOnly
                            />
                          </div>
                        </div> */}
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="name">FAB</label>
                            <input
                              type="text"
                              name="fab_name"
                              className="form-control"
                              value={edituser.fab_name}
                              onChange={handleInput}
                            />
                          </div>
                        </div>
                        {/* <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="name">Password</label>
                            <input
                              type="password"
                              name="password"
                              className="form-control"
                              value={edituser.password}
                              onChange={handleInput}
                            />
                          </div>
                        </div> */}
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
