import React, { useState,useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";

const localizer = momentLocalizer(moment);

export default function Bookings() {
  const [capacity, setCapacity] = useState([]);

  const fetchData = async() => {
    await fetch('http://127.0.0.1:8000/api/capacity')
    //await fetch('https://precutbooking.windsor.co.th/bookings/laravel_api_auth/public/api/capacity')
      .then((res)=>res.json())
      .then((res)=>setCapacity(res.capacity))
  }

  useEffect(()=>{
    fetchData();
  },[])

  const handleSelectBookings = (event) =>{
    //if (event.slots?.length > 15) return;
    //alert("onSelectSlot" + JSON.stringify(event));
    
    if (event.title === 'ไม่ว่าง') {
      alert('ไม่สามารถจองวันได้เนื่องจาก CAP เต็มแล้วครับ')
      return
    }

    if (event.title === 'ว่าง 200 ชุด') {
      alert('ถ้าต้องการจองวันที่ CAP 200 กรุณาติดต่อเจ้าหน้าที่')
      return
    }

    window.location.href = `/bookings/create/`+ event.id
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
                          events={capacity}
                          startAccessor="start"
                          endAccessor="end"
                          views={['month','agenda']}
                          style={{ height: 700 }}
                          
                          onSelectEvent={handleSelectBookings}
                          eventPropGetter={(
                            capacity
                          ) => {
                            let newStyle = {
                              //backgroundColor: "lightgrey",
                            };

                            if(capacity.start < capacity.start) {
                              newStyle.backgroundColor = "#DE3163";
                            }

                            if (capacity.title  === "ไม่ว่าง") {
                              newStyle.backgroundColor = "#DE3163";
                            } else {
                              if (capacity.title === "ว่าง 400 เซ็ต") {
                                newStyle.backgroundColor = "#40E0D0";
                              } else {
                                if (capacity.title === "ว่าง 200 เซ็ต") {
                                  newStyle.backgroundColor = "#FFBF00";
                                }
                              }
                            }

                          
                            return {
                              className: "",
                              style: newStyle,
                            };
                          }}

                          onNavigate={(date, view) => {
                            console.log('#### onNavigate');
                            console.log('#### date=', date);
                            console.log('#### view=', view);
                            //this.setState({currentDate: date});
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
