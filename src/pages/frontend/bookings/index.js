import React, { useState, useEffect, Children, useCallback } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import moment from "moment";

const localizer = momentLocalizer(moment);

const CURRENT_DATE = moment().add(13, "days").toDate();

const ColoredDateCellWrapper = ({ children, value }) =>
  React.cloneElement(Children.only(children), {
    style: {
      ...children.style,
      backgroundColor: value < CURRENT_DATE ? "lightgrey" : "",
    },
  });

export default function Bookings() {

  const navigate = useNavigate()

  const [capacity, setCapacity] = useState([]);

  const fabname = JSON.parse(localStorage.getItem("fab"));

  const [date, setDate] = useState(moment().add(13, "days").toDate());

  const onNavigate = useCallback((newDate) => setDate(newDate), [setDate]);

  const fetchData = async () => {
    //await fetch("http://127.0.0.1:8000/api/capacity")
  await fetch('https://precutbooking.windsor.co.th/bookings/laravel_api_auth/public/api/capacity')
      .then((res) => res.json())
      .then((res) => setCapacity(res.capacity));
  };

  useEffect(() => {
    fetchData();
  }, []);

  //const [date1, setDate1] = useState(moment().toDate());
  const [date2, setDate2] = useState(moment().add(13, "days").toDate());

  // //------------------------------------
  //     const str = capacity.date;
  //     const datesubstring = str.substring(0, 10);
  //     const myDate1 = moment(datesubstring, "YYYY-MM-DD").toDate();
  // //------------------------------------

  const showTitle = (e) => {
    const str = e.date;
    const datesubstring = str.substring(0, 10);
    const myDate = moment(datesubstring, "YYYY-MM-DD").toDate();
    //alert(result);
    if (e.capacity == 0) {
      return (e.title = "ไม่ว่าง");
    }

    if (myDate <= date2) {
      return (e.title = "ไม่ว่าง");
    } else {
      return (e.title = "ว่าง" + " " + e.capacity + " " + "ชุด");
    }
  };

  const handleSelectBookings = (event) => {
    // if (event.slots?.length > 15) return;
    // alert("onSelectSlot" + JSON.stringify(event));

    if (event.title == "ไม่ว่าง") {
      Swal.fire({
        title: "ขออภัย (T..T)'' ",
        text: "ไม่สามารถจองวันได้เนื่องจาก CAP ไม่ว่างครับ หากต้องการในวันนี้ กรุณาติดต่อเจ้าหน้าที่หรือแจ้งผ่านผู้แทนขายหรือ CS ผ่านช่องทาง E-mail",
        icon: "error",
        confirmButtonText: "ตกลง",
        //timer: 3000
      });
      return;
    }

    // if (event.capacity == 0) {
    //   Swal.fire({
    //     title: "เกิดข้อผิดพลาด",
    //     text: "ไม่สามารถจองวันได้เนื่องจาก CAP ไม่ว่างครับ",
    //     icon: "error",
    //     confirmButtonText: "ตกลง",
    //     //timer: 3000
    //   });
    //   return;
    // }

    // if (event.capacity < 200) {
    //   Swal.fire({
    //     title: "เกิดข้อผิดพลาด",
    //     text: "ถ้าต้องการจองวันที่ CAP 200 กรุณาติดต่อเจ้าหน้าที่",
    //     icon: "warning",
    //     confirmButtonText: "ตกลง",
    //     //timer: 3000
    //   });
    //   return;
    // }

     navigate('/bookings/create/'+ event.id)
  };

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="alert alert-primary alert-dismissible">
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-hidden="true"
              >
                &times;
              </button>
              <h5>
                <i className="icon fas fa-exclamation-circle"></i> เรียน{' '}{fabname}
              </h5>
              ** ข้อมูลระบบจะทำการอัพเดทจำนวนข้อมูลชุด Capacity รอบละ 1 วัน ซึ่งอาจส่งผลต่อการจองสินค้า อาจไม่ได้รับสินค้าที่ต้องการเสมอไป 
              ท่านสามารถดูวันที่คาดว่าจะได้รับจริง ในแถบ "ตรวจสอบสถานะ" เมื่อทีมวางแผนมีการลงแผนการผลิตเรียบร้อยแล้ว **
            </div>
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">{fabname}</h1>
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
                    <h5 className="m-0">จองวันผลิตสินค้า</h5>
                  </div>
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
                          titleAccessor={showTitle}
                          startAccessor="date"
                          endAccessor="date"
                          views={["month"]}
                          style={{ height: 700 }}
                          onNavigate={onNavigate}
                          date={date}
                          onSelectEvent={handleSelectBookings}
                          components={{
                            dateCellWrapper: ColoredDateCellWrapper,
                          }}
                          eventPropGetter={(capacity) => {
                            let newStyle = {
                              backgroundColor: "",
                            };

                            if (moment(new Date(capacity.date)) <= date2) {
                              newStyle.backgroundColor = "grey";
                            } else if (
                              (capacity.capacity === 0)
                            ) {
                              newStyle.backgroundColor = "#DE3163";
                              //newStyle.backgroundColor = "grey";
                            } else if (
                              (capacity.capacity / capacity.maxcap) * 100 >=
                              80
                            ) {
                              newStyle.backgroundColor = "#40E0D0";
                            } else {
                              if (
                                (capacity.capacity / capacity.maxcap) * 100 <
                                80
                              ) {
                                newStyle.backgroundColor = "#FFBF00";
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
