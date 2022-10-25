import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      await fetch("http://127.0.0.1:8000/api/users")
        .then((res) => res.json())
        .then((res) => setUsers(res.users));
    } catch (error) {
      setErrors(error);
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      dataField: "id",
      text: "ID",
    },
    {
      dataField: "name",
      text: "Name",
    },
    {
      dataField: "email",
      text: "Email",
    },
    {
      dataField: "role",
      text: "Role",
    },
    {
      dataField: "fab_name",
      text: "FAB",
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
          <Link
            to={"/backend/users/edit/" + row.id}
            className="btn btn-default"
          >
            <i className="fas fa-pen"></i>
          </Link>
          {/* <Link to={"/bookings/edit/" + row.id} className="btn btn-default">
          <i className="fas fa-pen"></i>
          </Link> */}
          <button
            type="button"
            className="btn btn-default"
            onClick={async () => {
              const isConfirm = window.confirm(
                "แน่ใจว่าต้องการลบข้อมูล "
              );
              if (isConfirm === true) {
                await axios.delete(
                  "http://127.0.0.1:8000/api/users-delete/" + row.id
                );
                window.location.reload(false)
              }
            }}
          >
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </>
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading === true) {
    return (
      <div className="preloader flex-column justify-content-center align-items-center">
        <img
          className="animation__shake"
          src="/assets/dist/img/AdminLTELogo.png"
          alt="AdminLTELogo"
          height="60"
          width="60"
        />
      </div>
    );
  }

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Users list</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Users</li>
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
                    <h5 className="m-0">Users list</h5>
                  </div>
                  <div className="card-body">
                    <div className="float-right mb-2">
                      <Link
                        to="/backend/users/create"
                        className="btn btn-primary"
                      >
                        <i class="fas fa-plus"></i> Create
                      </Link>
                    </div>
                    <BootstrapTable
                      keyField="id"
                      data={users}
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
