import React, { useState,useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

export default function BookingCreate() {
  const navigation = useNavigate();
  const {id} = useParams();
  const [booking, setBooking] = useState([]);
  const [capacity, setCapacity] = useState('')

  const name = JSON.parse(localStorage.getItem("name"));

  const handleSubmit = () => {
    if(capacity === '') {
      alert("กรุณาใส่จำนวน Capacity ที่ต้องการด้วยครับ");
      return
    }

    if(capacity > 400){
      alert("ไม่สามารถเพิ่ม Booking ได้ เพราะ Capacity เกินกว่าที่กำหนด");
      return
    } else {
      alert("เพิ่ม Booking เรียบร้อยแล้วครับ");
    }
    navigation('/bookings')
  };

  const fetchData = async() => {
    await fetch('http://127.0.0.1:8000/api/booking/'+id)
      .then((res)=>res.json())
      .then((res)=>setBooking(res.booking))
  }

  useEffect(()=>{
    fetchData(id);
  },[])


  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Booking crate</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Create</li>
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
                  {/* <div className="card-header">
                    <h5 className="m-0">Booking create</h5>
                  </div> */}
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="name">FAB name</label>
                            <input
                              type="text"
                              className="form-control"
                              value={name}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="name">Booking date</label>
                            <input
                              type="text"
                              className="form-control"
                              value={booking.start}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="name">Capacity</label>
                            <input
                              type="number"
                              className="form-control"
                              value={capacity}
                              name='capacity'
                              onChange={(event) => setCapacity(event.target.value)}
                              placeholder="Please input your capacity"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="name">User name</label>
                            <input
                              type="text"
                              className="form-control"
                              value={name}
                            />
                          </div>
                        </div>
                        <div className="col-md-12 float-right">
                          <div className="float-right">
                            <button className="btn btn-primary">Submit</button>{" "}
                            <Link to="/bookings" className="btn btn-danger">
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
