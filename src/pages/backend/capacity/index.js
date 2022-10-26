import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import Moment from "react-moment";
import "moment-timezone";
import { Link } from "react-router-dom";

export default function Capacity() {

  // const role = localStorage.getItem("role");

  // if(role!=="admin"){
  //   alert(role)
  // }else{
  //   alert('no')
  // }

  const [capacity, setCapacity] = useState([]);

  const fetchData = async () => {
    await fetch("http://127.0.0.1:8000/api/capacity")
      .then((res) => res.json())
      .then((res) => setCapacity(res.capacity));
  };

  useEffect(() => {
    fetchData();
  }, []);


  const columns = [
    {
      dataField: "id",
      text: "ID",
      //filter: textFilter(),
      sort: true
    },
    {
      dataField: "title",
      text: "Capacity title",
      filter: textFilter(),
      sort: true
    },
    {
      dataField: "start",
      text: "Capacity date",
      filter: textFilter(),
      sort: true
    },
    {
      dataField: "capacity",
      text: "Capacity",
      filter: textFilter(),
      sort: true
      
    },
   
    {
      dataField: "created_at",
      text: "Import date",
      filter: textFilter(),
      sort: true,
      formatter: (cellContent, row) => {
        return (
          <Moment format="DD-MM-YYYY">{row.created_date}</Moment>
        )
      }
    },
    // {
    //   dataField: "username",
    //   text: "Username",
    // },
    // {
    //   dataField: "actions",
    //   text: "Actions",
    //   formatter: actionButton,
    // },
  ];

  // function actionButton(cell, row, rowIndex, formatExtraData) {
  //   return (
  //     <>
  //       <div className="btn-group">
  //         <Link to={"/bookings/view/" + row.id} className="btn btn-default">
  //           <i className="fas fa-file"></i>
  //         </Link>
  //         <Link to={"/bookings/edit/" + row.id} className="btn btn-default">
  //           <i className="fas fa-pen"></i>
  //         </Link>
  //         <button
  //           onClick={() => alert("Deleted booking successfully!")}
  //           type="button"
  //           className="btn btn-default"
  //         >
  //           <i class="fas fa-trash"></i>
  //         </button>
  //       </div>
  //     </>
  //   );
  // }

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Capacity list</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Capacity list</li>
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
                    <h5 className="m-0">Capacity list</h5>
                  </div>
                  <div className="card-body">
                    <div className="float-right mb-2">
                      {/* <a href="http://127.0.0.1:8000/capacity/import" className="btn btn-primary">
                        <i class="fas fa-plus"></i> Capacity
                      </a> */}
                      <Link className="btn btn-primary" to='/backend/capacity/upload'><i className="fas fa-file-upload"></i> Import file</Link>
                    </div>
                    <BootstrapTable
                      keyField="id"
                      data={capacity}
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
