import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import moment from "moment";
import axios from "axios";

const Discount = () => {
  const [name] = useState(JSON.parse(localStorage.getItem("name")));
  const role = JSON.parse(localStorage.getItem("role"));
  const [discounts, setDiscounts] = useState([]);
  const [requestDate, setRequestDate] = useState(new Date());
  const [preftsuite_fiilter] = useState('')
  const [design_name_filter] = useState('')
  const [project_type_filter] = useState('')
  
  const getData = async () => {
    await axios.get(process.env.REACT_APP_API+"/discounts").then((res) => {
      console.log(res.data);
      setDiscounts(res.data.discounts);
    });
  };


  const handleDelete = (row) => {
    Swal.fire({
      title: "ยืนยันการลบข้อมูล",
      text: "คุณต้องการลบข้อมูลเอกสารส่วนลดแบบพิเศษ!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "ยกเลิก",
      confirmButtonText: "ตกลง",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Your Discount has been deleted",
          showConfirmButton: false,
          timer: 2000,
        });
        axios
          .post(process.env.REACT_APP_API+"/discount-delete/" + row.id)
          .then((res) => {
            console.log(res);
            getData();
          });
      }
    });
  };

  const filterPreftsuiteID = async (key) => {
    try {
      await axios
        .get(process.env.REACT_APP_API+"/discount-preftsuite_id_filter?data="+key)
        .then((res) => setDiscounts(res.data.discounts));
    } catch (error) {
      console.log(error);
    }
  };

  const filterDesignName = async (key) => {
    try {
      await axios
        .get(process.env.REACT_APP_API+"/discount-design_name_filter?data="+key)
        .then((res) => setDiscounts(res.data.discounts));
    } catch (error) {
      console.log(error);
    }
  };

  const filterProjectType = async (key) => {
    try {
      await axios
        .get(process.env.REACT_APP_API+"/discount-project_type_filter?data="+key)
        .then((res) => setDiscounts(res.data.discounts));
    } catch (error) {
      console.log(error);
    }
  };

  const filterCreateDate = async (date) => {
    try {
      setRequestDate(date)
      await axios
        .get(process.env.REACT_APP_API+"/discount-create_date_filter?data="+moment(date).format("YYYY-MM-DD"))
        .then((res) => setDiscounts(res.data.discounts));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      dataField: "prefsuit_id",
      text: "Prefsuite ID",
      sort: true,
    },
    {
      dataField: "design_name",
      text: "แบบบ้าน",
      sort: true,
    },
    {
      dataField: "standard_type",
      text: "มาตรฐาน",
      sort: true,
    },
    {
      dataField: "revision",
      text: "Revision",
      sort: true,
    },
    {
      dataField: "project_type",
      text: "ประเภทงาน",
      sort: true,
    },
    {
      dataField: "created_at",
      text: "วันที่เพิ่มเอกสาร",
      sort: true,
      formatter: (cellContent, row) => {
        return <Moment format="DD-MMMM-YYYY">{row.created_at}</Moment>;
      },
    },
    {
      dataField: "actions",
      text: "Actions",
      align: "center",
      headerStyle: {textAlign: 'center'},
      formatter: actionButton,
    },
  ];

  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      {" "}
      Showing {from} to {to} of {size} Results
    </span>
  );

  const options = {
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
  };

  function actionButton(cell, row, rowIndex, formatExtraData) {
    return (
      <>
        <Link to={"/backend/discount/view/" + row.id} className="btn btn-info">
          <i className="fas fa-eye"></i>
        </Link>{" "}
        <Link
          to={"/backend/discount/edit/" + row.id}
          className="btn btn-primary"
        >
          <i className="fas fa-edit"></i>
        </Link>{" "}
        <button hidden={!(( role === 'admin')) } onClick={() => handleDelete(row)} className="btn btn-danger">
          <i className="fas fa-trash"></i>
        </button>
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
                <h1 className="m-0">ระบบจัดการส่วนลดแบบพิเศษ</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">List</li>
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
                    <h5 className="m-0">ระบบจัดการส่วนลดแบบพิเศษ</h5>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="float-right mb-2">
                          <Link
                            className="btn btn-primary"
                            to={"/backend/discount/create"}
                          >
                            <i className="fas fa-plus"></i> ส่วนลดพิเศษ
                          </Link>{" "}
                          <Link
                            className="btn btn-success"
                            to={"/backend/discount/import"}
                          >
                            <i className="fas fa-file-excel"></i> นำเข้าไฟล์
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="card mt-2">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-3">
                            <input 
                            className="form-control" 
                            type="text" 
                            placeholder="Preftsuite ID" 
                            name={preftsuite_fiilter}
                            onChange={(e) => filterPreftsuiteID(e.target.value)}
                            />
                          </div>
                          <div className="col-md-3">
                            <input 
                            className="form-control" 
                            type="text" 
                            placeholder="แบบบ้าน" 
                            name={design_name_filter}
                            onChange={(e) => filterDesignName(e.target.value)}
                            />
                          </div>
                          <div className="col-md-3">
                          <select
                                class="form-control"
                                id="sel1"
                                name={project_type_filter}
                                onChange={(e) =>
                                  filterProjectType(e.target.value)
                                }
                              >
                                <option value="">เลือกประเภทงาน</option>
                                <option value="บ้านเดี่ยว">
                                  บ้านเดี่ยว
                                </option>
                                <option value="โครงการ">
                                  โครงการ
                                </option>
                              </select>
                          </div>
                          <div className="col-md-3">
                          <DatePicker
                            className="form-control"
                            selected={requestDate}
                            onChange={filterCreateDate}
                          />
                          </div>
                        </div>
                      </div>
                    </div>
                    <BootstrapTable
                      keyField="id"
                      data={discounts}
                      columns={columns}
                      pagination={paginationFactory(options)}
                      noDataIndication="ไม่พบข้อมูล"
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
};

export default Discount;
