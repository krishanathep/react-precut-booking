import React, { useState,useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { NumericFormat } from 'react-number-format';
import Moment from "react-moment";
import moment from "moment";
import "moment-timezone";
import Swal from "sweetalert2";

export default function BookingCreate() {
  const {id} = useParams();
  const navigate = useNavigate()
  const [capacity, setCapacity] = useState([]);
  const [booking_capacity, setBookingCapacity] = useState('')
  const [booking_date, setBookingDate] = useState('')
  const [limite, setLimite] = useState('')

  const [fab_name, setFabName] = useState(JSON.parse(localStorage.getItem("fab")))
  const [user_name, setUserName] = useState(JSON.parse(localStorage.getItem("name")))

  const [faburl, setFabUrl] = useState(JSON.parse(localStorage.getItem("url")))
  const [fabcode, setFabCode] = useState(JSON.parse(localStorage.getItem("code")))

  const getData = async() => {
    await fetch('http://127.0.0.1:8000/api/capacity/' + id)
    //await fetch('https://precutbooking.windsor.co.th/bookings/laravel_api_auth/public/api/capacity/' + id)
      .then((res)=>res.json())
      .then((res)=>setCapacity(res.capacity))
  }

  useEffect(()=>{
    getData();
    setBookingDate(capacity.date)
    setLimite(capacity.capacity)
  },[capacity.date, capacity.capacity])

  const handleSubmit = (event) => {
    event.preventDefault();

    if(booking_capacity === '') {
      Swal.fire({
        title: "เกิดข้อผิดพลาด",
        text: "กรุณาใส่จำนวน Capacity ที่ต้องการด้วยครับ",
        icon: "error",
        confirmButtonText: "OK",
        //timer: 3000
      });
      return
    }

    if(booking_capacity > capacity.capacity){
      Swal.fire({
        title: "เกิดข้อผิดพลาด",
        text: "ไม่สามารถเพิ่ม Booking ได้ เพราะ Capacity เกินกว่าที่กำหนด",
        icon: "error",
        confirmButtonText: "OK",
        //timer: 3000
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

    //window.open(faburl +'?'+'fabName'+'='+fab_name+'&'+'bookingDate'+'='+booking_date+'&'+'capacity'+'='+booking_capacity+'&'+'userName'+'='+user_name);
    
    window.open(faburl + '?' + 'token' + '=' + fabcode +'&'+'V2'+'='+ moment(new Date(booking_date)).format("DD-MM-YYYY") +'&'+ 'V1' + '=' + booking_capacity);

    fetch('http://127.0.0.1:8000/api/booking-create', resusetOptions)
      .then((res)=>res.json())
      .then((res)=>{
        if(res.status === 200){
          Swal.fire({
            title: "Successfully",
            text: "Bookings Created Successfully",
            icon: "success",
            confirmButtonText: "OK",
            timer: 3000
          });
          navigate('/bookings')
        }else {
          Swal.fire({
            title: "Oops...",
            text: "Something went wrong!",
            icon: "error",
            confirmButtonText: "OK",
            timer: 3000
          });
        }
      })
   
  };

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">{fab_name}</h1>
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
                  <div className="card-header">
                    <h5 className="m-0">จองวันที่ผลิตสินค้า</h5>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            {/* <label htmlFor="name">FAB name</label> */}
                            <input
                              type="text"
                              className="form-control"
                              value={fab_name}
                              onChange={(event) => setFabName(event.target.value)}
                              hidden
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="name">Booking date</label>
                            <input
                              type="text"
                              className="form-control"
                              //value={booking_date}
                              value={ booking_date ? moment(new Date(booking_date)).format("DD-MM-YYYY"): ''}
                              onChange={(event) => setBookingDate(event.target.value)}
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="name">Capacity สามารถจองได้ {limite} ชุด</label>
                            <NumericFormat
                              type="number"
                              className="form-control"
                              value={booking_capacity}
                              onChange={(event) => setBookingCapacity(event.target.value)}
                              placeholder="Input capacity"
                              decimalScale={0}
                            />
                            <small className="text-danger">* หากต้องการสั่งซื้อมากกว่า CAP ที่กำหนด ให้ติดต่อทีมขาย หรือ ทีม CS ที่ดูแลท่าน</small>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            {/* <label htmlFor="name">User name</label> */}
                            <input
                              type="text"
                              className="form-control"
                              value={user_name}
                              onChange={(event) => setUserName(event.target.value)}
                              hidden
                            />
                          </div>
                        </div>
                        <div className="col-md-12 float-right">
                          <div className="float-right">
                            <button className="btn btn-primary">ยืนยัน</button>{" "}
                            <Link to="/bookings" className="btn btn-danger">
                              ยกเลิก
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
