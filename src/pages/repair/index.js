import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import { Link } from "react-router-dom";

export default function Repair() {
  const products = [
    {
      id: 1,
      name: "Test Repair Name 1",
      type: "Type 1",
      detail: "Test repair case items detail 1",
      user: "Test UserName",
      status: "Test Status 1",
      date_at: "14-09-2022",
    },
    {
      id: 2,
      name: "Test Repair Name 1",
      type: "Type 1",
      detail: "Test repair case items detail 1",
      user: "Test UserName",
      status: "Test Status 1",
      date_at: "14-09-2022",
    },
    {
      id: 3,
      name: "Test Repair Name 1",
      type: "Type 1",
      detail: "Test repair case items detail 1",
      user: "Test UserName",
      status: "Test Status 1",
      date_at: "14-09-2022",
    },
    {
      id: 4,
      name: "Test Repair Name 1",
      type: "Type 1",
      detail: "Test repair case items detail 1",
      user: "Test UserName",
      status: "Test Status 1",
      date_at: "14-09-2022",
    },
    {
      id: 5,
      name: "Test Repair Name 1",
      type: "Type 1",
      detail: "Test repair case items detail 1",
      user: "Test UserName",
      status: "Test Status 1",
      date_at: "14-09-2022",
    },
    {
      id: 6,
      name: "Test Repair Name 1",
      type: "Type 1",
      detail: "Test repair case items detail 1",
      user: "Test UserName",
      status: "Test Status 1",
      date_at: "14-09-2022",
    },
    {
      id: 7,
      name: "Test Repair Name 1",
      type: "Type 1",
      detail: "Test repair case items detail 1",
      user: "Test UserName",
      status: "Test Status 1",
      date_at: "14-09-2022",
    },
    {
      id: 8,
      name: "Test Repair Name 1",
      type: "Type 1",
      detail: "Test repair case items detail 1",
      user: "Test UserName",
      status: "Test Status 1",
      date_at: "14-09-2022",
    },
    {
      id: 9,
      name: "Test Repair Name 1",
      type: "Type 1",
      detail: "Test repair case items detail 1",
      user: "Test UserName",
      status: "Test Status 1",
      date_at: "14-09-2022",
    },
    {
      id: 10,
      name: "Test Repair Name 1",
      type: "Type 1",
      detail: "Test repair case items detail 1",
      user: "Test UserName",
      status: "Test Status 1",
      date_at: "14-09-2022",
    },
    {
      id: 11,
      name: "Test Repair Name 1",
      type: "Type 1",
      detail: "Test repair case items detail 1",
      user: "Test UserName",
      status: "Test Status 1",
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
      text: "Repair name",
    },
    {
      dataField: "type",
      text: "Repair type",
    },
    {
      dataField: "detail",
      text: "Detail",
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
      text: "Date at",
    },
  ];

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Repair items</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Repair</li>
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
                    <h5 className="m-0">Repair items</h5>
                  </div>
                  <div className="card-body">
                    <div className="float-right mb-2">
                      <Link to="/repair/create" className="btn btn-success">
                      <i class="fas fa-plus"></i>{' '}
                        Repair item
                      </Link>
                    </div>
                    <BootstrapTable
                      keyField="id"
                      data={products}
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
