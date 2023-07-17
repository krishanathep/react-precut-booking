import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import moment from "moment";
import axios from "axios";

function SpecialDesign() {
  const [estimates, setEstimate] = useState([]);

  const [fab_name, setFabName] = useState(
    JSON.parse(localStorage.getItem("fab"))
  );

  const [nameSearch, setNameSearch] = useState("");

  const [status, setStatus] = useState("");
  const [fab_request_no, setFabRequestNo] = useState("");
  const [product_name, setProductName] = useState("");
  const [requestDate, setRequestDate] = useState(new Date());

  const name = JSON.parse(localStorage.getItem("name"));

  const fabcode = JSON.parse(localStorage.getItem("code"));

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/estimates-design`
      );
      setEstimate(res.data.estimates);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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

  const columns = [
    {
      dataField: "fab_request_no",
      text: "หมายเลขคำร้อง",
      sort: true,
    },
    {
      dataField: "fab_name",
      text: "ชื่อลูกค้า",
      sort: true,
    },
    {
      dataField: "product_name",
      text: "ประเภทสินค้า",
      sort: true,
    },
    { dataField: "request_date", text: "วันที่ขอแบบ", sort: true },
    {
      dataField: "status",
      text: "สถานะ",
      sort: true,
    },
    {
      dataField: "actions",
      text: "Actions",
      align: "center",
      formatter: actionButton,
      headerStyle: (colum, colIndex) => {
        return { width: "200px" };
      },
    },
  ];

  function actionButton(cell, row, rowIndex, formatExtraData) {
    const onClickUpload = () => {
      Swal.fire({
        html: `
          <h3>
          ${
            row.status === "อยู่ระหว่างจัดทำแบบ"
              ? "ต้องการอัพโหลดแบบใช่ไหม?"
              : "ต้องการอัพโหลดใบเสนอราคาใช่ไหม?"
          }
          </h3>
          <p>หมายเลขคำร้อง : ${row.fab_request_no}</p>
          <p>วันที่ขอแบบ : ${row.request_date}</p>
          <p>ชื่อลูกค้า : ${row.fab_name}</p>
          <p>รายการสินค้า : ${row.product_name}</p>
          <p>รุ่นสินค้า : ${row.product_model}</p>
          <p>สีสินค้า : ${row.product_color}</p>
        `,
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "ยืนยัน",
      }).then((result) => {
        if (result.isConfirmed) {
          window.open(
            `https://precutbooking.windsor.co.th/forms/orderform/C/index.php?fabRequest=${row.fab_request_no}&status=${row.status}&input76=${name}&uploadBy81=${name}`
          );
        }
      });
    };

    const onClickNewUpload = ()=>{
      Swal.fire({
        title: "ต้องการย้อนกลับไปสถานะก่อนหน้า ?",
        text: "หากท่านอัพโหลดไฟล์ผิด กรุณากด 'ยืนยัน' เพื่อดำเนินการต่อ",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "ยืนยัน",
      }).then((result) => {
        if (result.isConfirmed) {
          window.open(
            `https://precutbooking.windsor.co.th/forms/orderform/D/index.php?fabRequest=${row.fab_request_no}&input84=${row.status}&rerunBy=${name}`
          );
        }
      });
    }

    return (
      <>
        <Link
          to={"/backend/specail-design/view/" + row.fab_request_no}
          className="btn btn-primary"
        >
          <i className="fas fa-eye"></i>
        </Link>{" "}
        <button
          disabled={
            !(
              row.status === "อยู่ระหว่างจัดทำแบบ" ||
              row.status === "อยู่ระหว่างประเมินราคา"
            )
          }
          className=" btn btn-warning"
          href="#"
          onClick={onClickUpload}
        >
          <i className="fas fa-file-upload"></i>
        </button>{' '}
        <button
          disabled={
            !(
              row.status === "อยู่ระหว่างประเมินราคา" ||
              row.status === "ออกใบเสนอราคาเสร็จ"
            )}
          className=" btn btn-danger"
          href="#"
          onClick={onClickNewUpload}
        >
          <i className="fas fa-redo"></i>
        </button>
      </>
    );
  }

  const searchRequest = async (key) => {
    try {
      await axios
        .get(`${process.env.REACT_APP_API}/estimate-fab-request-no?data=${key}`)
        .then((res) => setEstimate(res.data.estimate));
    } catch (error) {
      console.log(error);
    }
  };

  const searchStatus = async (key) => {
    try {
      await axios
        .get(`${process.env.REACT_APP_API}/estimate-status?data=${key}`)
        .then((res) => setEstimate(res.data.estimate));
    } catch (error) {
      console.log(error);
    }
  };

  const searchFabName = async (key) => {
    try {
      await axios
        .get(`${process.env.REACT_APP_API}/estimate-fab-name?data=${key}`)
        .then((res) => setEstimate(res.data.estimate));
    } catch (error) {
      console.log(error);
    }
  };

  const searchDate = async (date) => {
    try {
      setRequestDate(date);
      await axios
        .get(
          `${process.env.REACT_APP_API}/estimate-request-date?data=${moment(
            date
          ).format("DD-MM-YYYY")}`
        )
        .then((res) => setEstimate(res.data.estimate));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">จัดการแบบและราคาสั่งผลิต</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">
                    Special-design-list
                  </li>
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
                    <h5 className="m-0 text-primary">*หาก ไม่พบรายการข้อมูล เนื่องจากยังไม่มี <b>"รายการรอดำเนินการ"</b></h5>
                  </div>
                  <div className="card-body">
                    <div className="card">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-3">
                            <div className="form-group">
                              <label htmlFor="">หมายเลขคำร้อง</label>
                              <input
                                name={fab_request_no}
                                type="text"
                                className="form-control"
                                placeholder="หมายเลขคำร้อง"
                                onChange={(e) => searchRequest(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group">
                              <label htmlFor="">ชื่อลูกค้า</label>
                              <input
                                name={nameSearch}
                                type="text"
                                className="form-control"
                                placeholder="ชื่อลูกค้า"
                                onChange={(e) => searchFabName(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group">
                              <label htmlFor="">วันที่ขอแบบ</label>
                              <DatePicker
                                className="form-control"
                                selected={requestDate}
                                onChange={searchDate}
                              />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group">
                              <label htmlFor="">สถานะ</label>
                              <select
                                class="form-control"
                                id="sel1"
                                name={status}
                                onChange={(event) =>
                                  searchStatus(event.target.value)
                                }
                              >
                                <option>เลือกสถานะ</option>
                                <option value="ตรวจสอบข้อมูล">
                                  ตรวจสอบข้อมูล
                                </option>
                                <option value="อยู่ระหว่างจัดทำแบบ">
                                  อยู่ระหว่างจัดทำแบบ
                                </option>
                                <option value="อยู่ระหว่างประเมินราคา">
                                  อยู่ระหว่างประเมินราคา
                                </option>
                                <option value="ออกใบเสนอราคาเสร็จ">
                                  ออกใบเสนอราคาเสร็จ
                                </option>
                                <option value="ยกเลิก">ยกเลิก</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <BootstrapTable
                          keyField="id"
                          data={estimates}
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
        </div>
      </div>
    </>
  );
}

export default SpecialDesign;
