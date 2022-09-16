import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import { json } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      await fetch("https://www.melivecode.com/api/users")
        .then((res) => res.json())
        .then((res) => setUsers(res));
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
      dataField: "avatar",
      isDummyField: true,
      text: "Avatar",
      formatter: (cellContent, row) => {
        return (
          <>
          <img src={row.avatar} className="rounded-circle" alt="Avatar" width='50'/>
          </>
        );
      },
    },
    {
      dataField: "fname",
      text: "First name",
    },
    {
      dataField: "lname",
      text: "Last Name",
    },
    {
      dataField: "username",
      text: "User name",
    },
    {
      dataField: "avatar",
      text: "Avatar link",
    },
  ];

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
