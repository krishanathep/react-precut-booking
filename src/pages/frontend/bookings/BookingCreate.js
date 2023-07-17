import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { NumericFormat } from "react-number-format";
import Moment from "react-moment";
import moment from "moment";
import "moment-timezone";
import Swal from "sweetalert2";

export default function BookingCreate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [capacity, setCapacity] = useState([]);
  const [booking_capacity, setBookingCapacity] = useState("");
  const [booking_date, setBookingDate] = useState("");
  const [limite, setLimite] = useState("");
  const [error, setError] = useState("");

  const [fab_name, setFabName] = useState(
    JSON.parse(localStorage.getItem("fab"))
  );
  const [user_name, setUserName] = useState(
    JSON.parse(localStorage.getItem("name"))
  );

  const [faburl, setFabUrl] = useState(JSON.parse(localStorage.getItem("url")));
  const [fabcode, setFabCode] = useState(
    JSON.parse(localStorage.getItem("code"))
  );
  const [qtType, setQtType] = useState(true);
  const [checked, setChecked] = useState(true);
  const [message, setMessage] = useState("");

  const handleOnChange1 = () => {
    setChecked();
    setQtType(true);
    setBookingCapacity("");
    setMessage(
      `<b>วันที่ต้องการสินค้า</b> : ${moment(new Date(booking_date)).format(
        "DD-MM-YYYY"
      )} <br> <b>ประเภทใบคำสั่งซื้อ </b>: จัดทำโดยระบบ Prefsuite`
    );
  };

  const handleOnChange2 = () => {
    setChecked();
    setBookingCapacity(0);
    setQtType(false);
    setMessage(
      `<b>วันที่ต้องการสินค้า</b> : ${moment(new Date(booking_date)).format(
        "DD-MM-YYYY"
      )} <br> <b>ประเภทใบคำสั่งซื้อ </b>: ${fab_name} จัดทำขึ้นมาเอง`
    );
  };

  const getData = async () => {
    await fetch(
      "https://precutbooking.windsor.co.th/bookings/laravel_api_auth/public/api/capacity/" +
        id
    )
      .then((res) => res.json())
      .then((res) => setCapacity(res.capacity));
  };

  useEffect(() => {
    getData();
    setBookingDate(capacity.date);
    setLimite(capacity.capacity);
    setMessage(
      `<b>วันที่ต้องการสินค้า</b> : ${moment(new Date(capacity.date)).format(
        "DD-MM-YYYY"
      )} <br> <b>ประเภทใบคำสั่งซื้อ </b>: จัดทำโดยระบบ Prefsuite`
    );
  }, [capacity.date, capacity.capacity]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (booking_capacity === "") {
      Swal.fire({
        title: "ขออภัย (T..T)'' ",
        text: "กรุณาใส่จำนวน Capacity ที่ต้องการด้วยครับ",
        icon: "error",
        confirmButtonText: "OK",
        //timer: 3000
      });
      return;
    }

    if (booking_capacity > capacity.capacity) {
      Swal.fire({
        title: "ขออภัย (T..T)'' ",
        text: "ไม่สามารถเพิ่ม Booking ได้ เพราะ Capacity เกินกว่าที่กำหนด",
        icon: "error",
        confirmButtonText: "OK",
        //timer: 3000
      });
      return;
    }

    Swal.fire({
      title: "กรุณาตรวจสอบข้อมูลอีกครั้ง",
      // text: message,
      html: booking_capacity  == "0" ? message  : "<b>จำนวนชุดที่ต้องการ : "+ booking_capacity + " ชุด</br>" + message,
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "ยกเลิก",
      confirmButtonText: "ยืนยัน",
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(
          faburl +
            "?" +
            "token" +
            "=" +
            fabcode +
            "&" +
            "V2" +
            "=" +
            moment(new Date(booking_date)).format("DD-MM-YYYY") +
            "&" +
            "V1" +
            "=" +
            booking_capacity
        );

        const data = {
          booking_capacity,
          fab_name,
          booking_date,
          user_name,
        };

        const resusetOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        };

        // fetch(
        //   "http://127.0.0.1:8000/api/booking-create",
        //   resusetOptions
        // )

        // fetch(
        //   "https://precutbooking.windsor.co.th/bookings/laravel_api_auth/public/api/booking-create",
        //   resusetOptions
        // )

        fetch(
          `${process.env.REACT_APP_API}/booking-create`,
          resusetOptions
        )
        
          .then((res) => res.json())
          .then((res) => {
            if (res.status === 200) {
              Swal.fire({
                title: "Successfully",
                text: "Bookings Created Successfully",
                icon: "success",
                confirmButtonText: "OK",
                timer: 3000,
              });
              navigate("/bookings");
            } else {
              Swal.fire({
                title: "Oops...",
                text: "Something went wrong!",
                icon: "error",
                confirmButtonText: "OK",
                timer: 3000,
              });
            }
          });
        // setTimeout(function () {
        //   window.location.reload();
        // }, 1500);
      } else {
        console.log(error);
      }
    });
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
                              onChange={(event) =>
                                setFabName(event.target.value)
                              }
                              hidden
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="name">วันที่ต้องการสินค้า</label>
                            <input
                              type="text"
                              className="form-control"
                              //value={booking_date}
                              value={
                                booking_date
                                  ? moment(new Date(booking_date)).format(
                                      "DD-MM-YYYY"
                                    )
                                  : ""
                              }
                              onChange={(event) =>
                                setBookingDate(event.target.value)
                              }
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="type">ประเภทของใบเสนอราคา</label>
                            <div class="form-check">
                              <label class="form-check-label">
                                <input
                                  type="radio"
                                  class="form-check-input"
                                  name="optradio"
                                  onChange={handleOnChange1}
                                  checked={checked}
                                />
                                ใบเสนอราคาที่ออกจากระบบ Prefsuite
                              </label>
                            </div>
                            <div class="form-check">
                              <label class="form-check-label">
                                <input
                                  type="radio"
                                  class="form-check-input"
                                  name="optradio"
                                  onClick={handleOnChange2}
                                />
                                ใบเสนอราคาที่ {fab_name} จัดทำขึ้นเอง
                              </label>
                            </div>
                          </div>
                        </div>
                        {qtType ? (
                          <>
                            <div className="col-md-12">
                              <div className="form-group">
                                <label htmlFor="name">
                                  จำนวนชุดที่ต้องการ (สามารถจองได้ {limite} ชุด)
                                </label>
                                <NumericFormat
                                  className="form-control"
                                  value={booking_capacity}
                                  onChange={(event) =>
                                    setBookingCapacity(event.target.value)
                                  }
                                  placeholder="ระบุจำนวนชุดที่ต้องการ"
                                  decimalScale={0}
                                  allowNegative={false}
                                />
                                <small className="text-danger">
                                  * หากต้องการสั่งซื้อจำนวนชุดมากกว่า
                                  จำนวนที่สามารถจองได้ให้ติดต่อทีมขาย หรือ ทีม
                                  CS ที่ดูแลท่าน
                                </small>
                              </div>
                            </div>
                          </>
                        ) : (
                          <small className="text-danger">
                            * กรณีที่ท่านต้องการสั่งซื้อโดยใช้ใบเสนอราคาที่
                            Fabricator จัดทำขึ้นมาเองเท่านั้น
                          </small>
                        )}
                        <div className="col-md-12">
                          <div className="form-group">
                            {/* <label htmlFor="name">User name</label> */}
                            <input
                              type="text"
                              className="form-control"
                              value={user_name}
                              onChange={(event) =>
                                setUserName(event.target.value)
                              }
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
