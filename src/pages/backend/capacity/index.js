import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import Moment from "react-moment";
import "moment-timezone";
import { Link } from "react-router-dom";

export default function Capacity() {

  const role = JSON.parse(localStorage.getItem("role"));

  if (role =='user') {
    window.location.href = "/th";
  }

  const [capacity, setCapacity] = useState([]);

  const fetchData = async () => {
    await fetch("https://precutbooking.windsor.co.th/bookings/laravel_api_auth/public/api/capacity")
      .then((res) => res.json())
      .then((res) => setCapacity(res.capacity));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    // {
    //   dataField: "id",
    //   text: "ID",
    //   sort: true,
    // },
    {
      dataField: "date",
      text: "Date (วันที่)",
      //filter: textFilter(),
      sort: true,
      formatter: (cellContent, row) => {
        return <Moment format="DD-MM-YYYY">{row.date}</Moment>;
      },
    },
    {
      dataField: "demand",
      text: "Demand (จองแล้ว)",
      //filter: textFilter(),
      sort: true,
    },
    {
      dataField: "maxcap",
      text: "Max CAP (จำนวนสูงสุดต่อวัน)",
      //filter: textFilter(),
      sort: true,
    },
    {
      dataField: "capacity",
      text: "Available (คงเหลือ)",
      //filter: textFilter(),
      sort: true,
    },
    {
      dataField: "created_at",
      text: "วันที่เพิ่มข้อมูล",
      //filter: textFilter(),
      sort: true,
      formatter: (cellContent, row) => {
        return <Moment format="DD-MM-YYYY">{row.created_at}</Moment>;
      },
    },
  ];

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Capacity Management</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Capacity management</li>
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
                    <h5 className="m-0">Capacity management</h5>
                  </div>
                  <div className="card-body">
                    <div className="float-right mb-2">
                      <Link
                        className="btn btn-primary"
                        to="/backend/capacity/upload"
                      >
                        <i className="fas fa-file-upload"></i> Import
                      </Link>
                    </div>
                    <BootstrapTable
                      keyField="id"
                      data={capacity}
                      columns={columns}
                      pagination={paginationFactory()}
                      filter={filterFactory()}
                    />
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
