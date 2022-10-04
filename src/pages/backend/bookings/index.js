import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import { Link } from "react-router-dom";

export default function BookingStatus() {
  const bookings = [
    {
      id: 1,
      name: "Bookings Name 1",
      type: "Type 1",
      detail: "Bookings case items detail 1",
      user: "UserName",
      status: "Status",
      date_at: "14-09-2022",
    },
    {
      id: 2,
      name: "Bookings Name 2",
      type: "Type 2",
      detail: "Bookings case items detail 2",
      user: "UserName",
      status: "Status",
      date_at: "14-09-2022",
    },
    {
      id: 3,
      name: "Bookingsr Name 3",
      type: "Type 1",
      detail: "Bookings case items detail 3",
      user: "UserName",
      status: "Status",
      date_at: "14-09-2022",
    },
    {
      id: 4,
      name: "Bookings Name 4",
      type: "Type 1",
      detail: "Bookings case items detail 4",
      user: "UserName",
      status: "Status",
      date_at: "14-09-2022",
    },
    {
      id: 5,
      name: "Bookings Name 5",
      type: "Type 1",
      detail: "Bookings case items detail 5",
      user: "UserName",
      status: "Status",
      date_at: "14-09-2022",
    },
    {
      id: 6,
      name: "Bookings Name 6",
      type: "Type 1",
      detail: "Bookings case items detail 6",
      user: "UserName",
      status: "Status",
      date_at: "14-09-2022",
    },
    {
      id: 7,
      name: "Bookings Name 7",
      type: "Type 1",
      detail: "Bookings case items detail 7",
      user: "UserName",
      status: "Status",
      date_at: "14-09-2022",
    },
    {
      id: 8,
      name: "Bookings Name 8",
      type: "Type 1",
      detail: "Bookings case items detail 8",
      user: "UserName",
      status: "Status",
      date_at: "14-09-2022",
    },
    {
      id: 9,
      name: "Bookings Name 9",
      type: "Type 1",
      detail: "Bookings case items detail 9",
      user: "UserName",
      status: "Status",
      date_at: "14-09-2022",
    },
    {
      id: 10,
      name: "Bookings Name 10",
      type: "Type 1",
      detail: "Bookings case items detail 10",
      user: "UserName",
      status: "Status",
      date_at: "14-09-2022",
    },
    {
      id: 11,
      name: "Bookings Name 11",
      type: "Type 1",
      detail: "Bookings case items detail 11",
      user: "UserName",
      status: "Status",
      date_at: "14-09-2022",
    },
  ];

  const columns = [
    {
      dataField: "id",
      text: "ID",
    },
    {
      dataField: "name",
      text: "Booking name",
    },
    {
      dataField: "type",
      text: "Type",
    },
    {
      dataField: "detail",
      text: "Booking Detail",
    },
    {
      dataField: "user",
      text: "Username",
    },
    {
      dataField: "status",
      text: "Status",
    },
    {
      dataField: "date_at",
      text: "Start date",
    },
    {
      dataField: "date_at",
      text: "Stop date",
    },
    {
      dataField: "actions",
      text: "Actions",
      formatter: actionButton,
    },
  ];

  function actionButton(cell, row, rowIndex, formatExtraData) {
    return (
      <>
        <div className="btn-group">
          <Link to={"/bookings/view/" + row.id} className="btn btn-default">
          <i className="fas fa-file"></i>
          </Link>
          <Link to={"/bookings/edit/" + row.id} className="btn btn-default">
          <i className="fas fa-pen"></i>
          </Link>
          <button onClick={()=>alert('Deleted booking successfully!')} type="button" className="btn btn-default">
          <i class="fas fa-trash"></i>
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Bookings list</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Bookings-list</li>
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
                    <h5 className="m-0">Bookings list</h5>
                  </div>
                  <div className="card-body">
                    {/* <div className="float-right mb-2">
                      <Link to="/bookings/create" className="btn btn-primary">
                        <i class="fas fa-plus"></i> Booking
                      </Link>
                    </div> */}
                    <BootstrapTable
                      keyField="id"
                      data={bookings}
                      columns={columns}
                      pagination={paginationFactory()}
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