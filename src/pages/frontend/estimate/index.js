import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
//import overlayFactory from 'react-bootstrap-table2-overlay';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import moment from "moment";
import axios from "axios";

function Estimate() {
  const [estimates, setEstimate] = useState([]);
  const [fab_name, setFabName] = useState(
    JSON.parse(localStorage.getItem("fab"))
  );
  const fabcode = JSON.parse(localStorage.getItem("code"));
  const [fab_request_no, setFabRequestNo] = useState("");
  const [status, setStatus] = useState("");
  const [product_name, setProductName] = useState("");
  const [requestDate, setRequestDate] = useState(new Date());


  const fetchData = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API}/estimates-byfab?name=${fab_name}`);
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
      dataField: "product_name",
      text: "ประเภทสินค้า",
      sort: true,
    },
    {
      dataField: "product_model",
      text: "รุ่นสินค้า",
      sort: true,
    },
    {
      dataField: "request_date",
      text: "วันที่ขอแบบ",
      sort: true,
    },
    {
      dataField: "status",
      text: "สถานะ",
      sort: true,
    },
    {
      dataField: "actions",
      text: "View",
      align: "center",
      formatter: actionButton,
      headerStyle: (colum, colIndex) => {
        return { width: "100px" };
      },
    },
  ];

  const onClickCreate = () => {
    Swal.fire({
      title: 'สร้างใบคำขอแบบและราคาสั่งผลิต',
      text: "คุณต้องการสร้างใบคำขอแบบและราคาสั่งผลิตใช่ไหม?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'ยกเลิก',
      confirmButtonText: 'ยืนยัน'
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(`https://form.jotform.com/231448819747469?token=${fabcode}`)
      }
    })
  };

  function actionButton(cell, row, rowIndex, formatExtraData) {
    return (
      <>
        <div>
          <Link
            to={"/estimate/view/" + row.fab_request_no}
            className="btn btn-primary"
          >
            <i className="fas fa-eye"></i>
          </Link>
        </div>
      </>
    );
  }

  const searchRequest = async (key) => {
    try {
      await axios
        .get(`${process.env.REACT_APP_API}/estimate-fab-request-no-byfab?name=${fab_name}&data=${key}`)
        .then((res) => setEstimate(res.data.estimate));
    } catch (error) {
      console.log(error);
    }
  };

  const searchStatus = async (key) => {
    try {
      await axios
        .get(`${process.env.REACT_APP_API}/estimate-status-byfab?name=${fab_name}&data=${key}`)
        .then((res) => setEstimate(res.data.estimate));
    } catch (error) {
      console.log(error);
    }
  };

  const searchProductName = async (key) => {
    try {
      await axios
        .get(`${process.env.REACT_APP_API}/estimate-product-name-byfab?name=${fab_name}&data=${key}`)
        .then((res) => setEstimate(res.data.estimate));
    } catch (error) {
      console.log(error);
    }
  };

  const searchDate = async (date) => {
    try {
      setRequestDate(date)
      await axios
        .get(
          `${process.env.REACT_APP_API}/estimate-request-date-byfab?name=${fab_name}&data=${moment(
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
                <h1 className="m-0">{fab_name}</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Estimate-list</li>
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
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="float-right mb-2">
                          <button
                            className="btn btn-info"
                            href="#"
                            onClick={onClickCreate}
                          >
                            <i className="fas fa-plus"></i> สร้างใบคำขอแบบและราคาสั่งผลิต
                          </button>
                        </div>
                      </div>
                    </div>
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
                              <label htmlFor="">ประเภทสินค้า</label>
                              <select
                                class="form-control"
                                id="sel1"
                                name={product_name}
                                onChange={(event) =>
                                  searchProductName(event.target.value)
                                }
                              >
                                <option value="">เลือกประเภทสินค้า</option>
                                <option value="ประเภท Set (เต็มบาน)">
                                  ประเภท Set (เต็มบาน)
                                </option>
                                <option value="Profiles เส้นวงกบดัดโค้ง">
                                  Profiles เส้นวงกบดัดโค้ง
                                </option>
                                <option value="PProfiles เส้นลูกฟักดัดโค้ง">
                                  Profiles เส้นลูกฟักดัดโค้ง
                                </option>
                                <option value="ซี่ลูกกรง 32X32">
                                  ซี่ลูกกรง 32X32
                                </option>
                              </select>
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
                                <option value="">เลือกสถานะ</option>
                                <option value="รับข้อมูลเข้าระบบ">
                                  รับข้อมูลเข้าระบบ
                                </option>
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
                                <option value="ยกเลิก">
                                  ยกเลิก
                                </option>
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
                          // overlay={ overlayFactory({
                          //   spinner: true,
                          // }) }
                          // loading={ (estimates.length > 0)?false:true }
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

export default Estimate;
