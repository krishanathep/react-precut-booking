import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import Moment from "react-moment";
import "moment-timezone";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState("");
  //const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const role = JSON.parse(localStorage.getItem("role"));

  if (role =='user') {
    window.location.href = "/th";
  }

  const fetchData = async () => {
    try {
      //setLoading(true);
      await fetch("https://precutbooking.windsor.co.th/bookings/laravel_api_auth/public/api/users")
        .then((res) => res.json())
        .then((res) => setUsers(res.users));
    } catch (error) {
      setErrors(error);
    } finally {
      //setLoading(false);
    }
  };

  const columns = [
    // {
    //   dataField: "row",
    //   text: "ID", 
    // },
    {
      dataField: "name",
      text: "Name",
      //filter: textFilter(),
      sort: true
    },
    {
      dataField: "email",
      text: "Email",
      //filter: textFilter(),
      sort: true
    },
    {
      dataField: "faburl.fabricator_name",
      text: "Fabricator",
      //filter: textFilter(),
      sort: true
    },
    {
      dataField: "role",
      text: "Role",
      //filter: textFilter(),
      sort: true,
    },
    {
      dataField: "created_at",
      text: "Create at",
      //filter: textFilter(),
      sort: true,
      formatter: (cellContent, row) => {
        return <Moment format="DD-MM-YYYY">{row.created_at}</Moment>;
      },
    },
    {
      dataField: "actions",
      text: "Actions",
      formatter: actionButton,
      align: 'center'
    },
  ];

  function actionButton(cell, row, rowIndex, formatExtraData) {
    async function deleteUser(event, id) {
      event.preventDefault();

        await Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(
              "https://precutbooking.windsor.co.th/bookings/laravel_api_auth/public/api/users-delete/" + row.id ,
              { method: "DELETE" }
            )
              .then((res) => res.json())
              .then((res) => console.log(res.user));
    
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              showConfirmButton: false,
            });
            setTimeout(function () {
              window.location.reload();
            }, 1500);
          } else {
            console.log(errors);
          }
        });
      }
    return (
      <>
        <div className="btn-group">
          <Link
            to={"/backend/users/edit/" + row.id}
            className="btn btn-default"
          >
            <i className="fas fa-pen"></i>
          </Link>
          {/* <a href="http://localhost:8000/change-password" className="btn btn-default">
          <i className="fas fa-key"></i>
          </a> */}
          <button
            type="button"
            className="btn btn-default"
            onClick={deleteUser}
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

  // if (loading === true) {
  //   return (
  //     <div className="preloader flex-column justify-content-center align-items-center">
  //       <img
  //         className="animation__shake"
  //         src="/assets/dist/img/AdminLTELogo.png"
  //         alt="AdminLTELogo"
  //         height="60"
  //         width="60"
  //       />
  //     </div>
  //   );
  // }

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
                      filter={ filterFactory() }
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
