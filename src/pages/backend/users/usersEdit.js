import React, { useState,useEffect } from "react";
import { Link,useParams,useNavigate } from 'react-router-dom'
import Swal from "sweetalert2";

export default function UsersEdit() {
    const navigate = useNavigate();

    const {id} = useParams()

    const[edituser, setEditUser] = useState([])
    const[fab, setFab] = useState([])

    const getData = async () => {
        await fetch('https://precutbooking.windsor.co.th/bookings/laravel_api_auth/public/api/users/'+id)
        .then((res)=>res.json())
        .then((res)=>setEditUser(res.user))
      }
      console.log(edituser)

      const getFab = async () => {
        await fetch("https://precutbooking.windsor.co.th/bookings/laravel_api_auth/public/api/fab-url")
          .then((res) => res.json())
          .then((res) => setFab(res.faburl));
      };

   useEffect(()=>{
    getData(id)
    getFab()
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
      fab_id: edituser.fab_id,
    }

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    await fetch('https://precutbooking.windsor.co.th/bookings/laravel_api_auth/public/api/users-update/'+id, requestOptions)
    .then((res)=>res.json())
    .then((res)=>{
      if(res.status === 200) {
        Swal.fire({
          title: "Successfully",
          text: "Updated User Successfully",
          icon: "success",
          confirmButtonText: "OK",
          timer: 3000
        });
        navigate('/backend/users')
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
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="name">FAB Name</label>
                            <select class="form-control" id="sel1"
                            //value={fab_id}
                            //onChange={(event) => setFabId(event.target.value)}
                            value={edituser.fab_id}
                            onChange={handleInput}
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
