import React, { useState,useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const localizer = momentLocalizer(moment);

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  const fetchData = async() => {
    await fetch('http://127.0.0.1:8000/api/bookings')
      .then((res)=>res.json())
      .then((res)=>setBookings(res.bookings))
  }

  useEffect(()=>{
    fetchData();
  },[])

  const handleSelectBookings = (event) =>{
    window.location.href = "/bookings/create/"+event.id
  } 

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Bookings</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Bookings</li>
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
                    <h5 className="m-0">Bookings</h5>
                  </div> */}
                  <div className="card-body">
                    <div className="row">
                      {/* <div className="col-md-12">
                        <div className="float-right mb-2">
                          <Link
                            to="/bookings/create"
                            className="btn btn-primary btn-sm"
                          >
                            <i class="fas fa-plus"></i> Booking
                          </Link>
                        </div>
                      </div> */}
                      <div className="col-md-12">
                        <Calendar
                          localizer={localizer}
                          events={bookings}
                          startAccessor="start"
                          endAccessor="end"
                          views={['month','day','agenda']}
                          style={{ height: 700 }}
                          onSelectEvent={handleSelectBookings}
                          eventPropGetter={(
                            bookings,
                            status,
                            start,
                            end,
                            isSelected
                          ) => {
                            let newStyle = {
                              backgroundColor: "lightgrey",
                            };

                            if (bookings.status === "full") {
                              newStyle.backgroundColor = "#DE3163";
                            } else {
                              if (bookings.status === "null") {
                                newStyle.backgroundColor = "#40E0D0";
                              } else {
                                if (bookings.status === "haft") {
                                  newStyle.backgroundColor = "#FFBF00";
                                }
                              }
                            }

                            return {
                              className: "",
                              style: newStyle,
                            };
                          }}
                        />
                      </div>
                    </div>
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
