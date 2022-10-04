import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { Link } from "react-router-dom";

const localizer = momentLocalizer(moment);

export default function Bookings(props) {
  const [bookings, setBookings] = useState([
    { 
      id: 1,
      title:'Booking one',
      start: '2022, 10, 03',
      end: '2022, 10, 05',
    }, { 
      id: 2,
      title:'Booking two',
      start: '2022, 10, 11',
      end: '2022, 10, 13',
    }, { 
      id: 3,
      title:'Booking three',
      start: '2022, 10, 19',
      end: '2022, 10, 21',
    }, { 
      id: 4,
      title:'Booking four',
      start: '2022, 10, 25',
      end: '2022, 10, 27',
    },{ 
      id: 5,
      title:'Booking five',
      start: '2022, 10, 28',
      end: '2022, 10, 29',
    }
  ]);
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
                  <div className="card-header">
                    <h5 className="m-0">Bookings</h5>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="float-right mb-2">
                          <Link
                            to="/bookings/create"
                            className="btn btn-primary"
                          >
                            <i class="fas fa-plus"></i> Booking
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <Calendar
                          localizer={localizer}
                          events={bookings}
                          startAccessor="start"
                          endAccessor="end"
                          style={{ height: 700 }}
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
