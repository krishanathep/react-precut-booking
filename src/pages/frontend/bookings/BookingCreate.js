import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function BookingCreate() {
  const navigation = useNavigate();
  const {start} = useParams();
  const [capacity, setCapacity] = useState([]);
  const [booking_capacity, setBookingCapacity] = useState('')
  const [fab_name, setFabName] = useState(JSON.parse(localStorage.getItem("fab")))
  const [booking_date, setBookingDate] = useState(start)
  const [user_name, setUserName] = useState(JSON.parse(localStorage.getItem("name")))
  const data_from = 'https://form.jotform.com/222820524863455'

  const handleSubmit = (event) => {
    event.preventDefault();

    if(booking_capacity === '') {
      //alert("กรุณาใส่จำนวน Capacity ที่ต้องการด้วยครับ");
      toast.error("กรุณาใส่จำนวน Capacity ที่ต้องการด้วยครับ", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return
    }

    if(booking_capacity > 400){
      //alert("ไม่สามารถเพิ่ม Booking ได้ เพราะ Capacity เกินกว่าที่กำหนด");
      toast.error("ไม่สามารถเพิ่ม Booking ได้ เพราะ Capacity เกินกว่าที่กำหนด", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return
    } 

    const data = {
      booking_capacity, fab_name, booking_date, user_name
    }

    const resusetOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    alert('เพิ่มข้อมูลเรียบร้อยแล้วครับ')

    //window.open(data_from+'?'+fab_name+'&'+booking_date+'&'+booking_capacity+'&'+user_name);
    window.open(data_from+'?'+'fabName'+'='+fab_name+'&'+'bookingDate'+'='+booking_date+'&'+'capacity'+'='+booking_capacity+'&'+'userName'+'='+user_name);

    // fetch('http://127.0.0.1:8000/api/booking-create', resusetOptions)
    //   .then((res)=>res.json())
    //   .then((res)=>{
    //     if(res.status === 200){
    //       //alert("เพิ่มข้อมูลเรียบร้อยแล้วครับ");
    //       toast.success('เพิ่มข้อมูลเรียบร้อยแล้วครับ', {
    //         position: "top-right",
    //         autoClose: 2000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         });

    //          window.setTimeout(function() {
    //           window.location.href = "/bookings";
    //         }, 2500)

    //     }else {
    //       //alert("มีบางอย่างผิดพลาด");
    //       toast.error("มีบางอย่างผิดพลาด", {
    //         position: "top-right",
    //         autoClose: 2000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //       });
    //     }
    //   })
   
  };

  return (
    <>
    <ToastContainer/>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Booking create</h1>
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
                              value={fab_name}
                              onChange={(event) => setFabName(event.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="name">Booking date</label>
                            <input
                              type="text"
                              className="form-control"
                              value={booking_date}
                              onChange={(event) => setBookingDate(event.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="name">Capacity</label>
                            <input
                              type="number"
                              className="form-control"
                              value={booking_capacity}
                              onChange={(event) => setBookingCapacity(event.target.value)}
                              placeholder="Input capacity"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="name">User name</label>
                            <input
                              type="text"
                              className="form-control"
                              value={user_name}
                              onChange={(event) => setUserName(event.target.value)}
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
