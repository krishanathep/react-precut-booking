import React, { useState,useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import DateRangePicker from 'react-bootstrap-daterangepicker';
import "bootstrap-daterangepicker/daterangepicker.css";


export default function Status() {

  const [precut, setPrecut] = useState([])
  const [error, setError] = useState('')
  const [quotation, setQuotation] = useState('')
  const [status, setStatus] = useState('')
  const [sendDate, setSendDate] = useState('')
  const [startDate, setStartDate] = useState(new Date());

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
    // {
    //   dataField: "id",
    //   text: "ID",
    //   sort: true
    // },
    {
      dataField: "fabricator_name",
      text: "FAB name",
      //filter: textFilter(),
      sort: true
    },
    {
      dataField: "order_receive_date",
      text: "วันส่งคำสั่งสินค้า",
      //filter: textFilter(),
      sort: true,
      formatter: (cellContent, row) => {
        return <Moment format="DD-MM-YYYY">{row.order_receive_date}</Moment>;
      },
    },
    {
      dataField: "qt_number",
      text: "เลขที่ใบเสนอราคา",
      //filter: textFilter(),
      sort: true,
    },
    {
      dataField: "real_customer_name",
      text: "ชื่อโครงการ/ลูกค้า",
      //filter: textFilter(),
      sort: true,
    },
    {
      dataField: "product_type",
      text: "ประเภทสินค้า",
      //filter: textFilter(),
      sort: true,
    },
    {
      dataField: "product_group",
      text: "กลุ่มสินค้า",
      //filter: textFilter(),
      sort: true,
    },
    {
      dataField: "product_color",
      text: "สีสินค้า",
      //filter: textFilter(),
      sort: true,
    },
    {
      dataField: "product_series",
      text: "รุ่นสินค้า",
      //filter: textFilter(),
      sort: true,
    },
    {
      dataField: "request_date",
      text: "วันที่ส่งสินค้า",
      //filter: textFilter(),
      sort: true,
    },
    {
      dataField: "order_status",
      text: "สถานะงาน",
      //filter: textFilter(),
      sort: true,
    },
    {
      dataField: "actions",
      text: "Actions",
      formatter: actionButton,
      align: "center",
    },
  ];

  function actionButton(cell, row, rowIndex, formatExtraData) {
    return (
      <>
        <div>
          <Link to={"/booking-status/view/"} className="btn btn-default">
            <i className="fas fa-file-alt"></i>
          </Link>
        </div>
      </>
    );
  }

  const [state, setState] = useState('');

  const handleCallback = (start) => {
    setState({start});
  };

  const start = state?.start?.format("YYYY-MM-DD");

  async function searchSendDate() {
    try {
      await fetch(`http://localhost:8000/api/precut-send-date?data=${start}`)
        .then((res) => res.json())
        .then((res) => setPrecut(res.precut));
    } catch (error) {
      setError(error);
    }
  }

  async function searchRequestDate() {
    try {
      await fetch(`http://localhost:8000/api/precut-request-date?data=${start}`)
        .then((res) => res.json())
        .then((res) => setPrecut(res.precut));
    } catch (error) {
      setError(error);
    }
  }

  async function searchStatus(key) {
    try {
      await fetch("http://localhost:8000/api/precut-status?data=" + key)
        .then((res) => res.json())
        .then((res) => setPrecut(res.precut));
    } catch (error) {
      setError(error);
    }
  }

  async function searchQt(key) {
    try {
      await fetch("http://localhost:8000/api/precut-qutation?data=" + key)
        .then((res) => res.json())
        .then((res) => setPrecut(res.precut));
    } catch (error) {
      setError(error);
    }
  }

  async function getData() {
    try {
      await fetch("http://localhost:8000/api/precut")
      .then((res) => res.json())
      .then((res) => setPrecut(res.precut));
    } catch(error) {
      setError(error)
    }
  }

  useEffect(()=>{
    getData();
  },[])

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Status</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Status</li>
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
                    <h5 className="m-0">จัดการสถานะงาน</h5>
                  </div>
                  <div className="card-body">
                    <div className="card mb-4">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-md-3">
                            <div className="form-group">
                              <label htmlFor="">วันที่สั่งสินค้า</label>
                              <DateRangePicker
                              initialSettings={{
                              singleDatePicker: true
                              }}
                              onCallback={handleCallback}
                              onApply={searchSendDate}
                            >
                              <input type="text" className="form-control" />
                            </DateRangePicker>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group">
                              <label htmlFor="">วันที่ส่งสินค้า</label>
                              <DateRangePicker
                              initialSettings={{
                              singleDatePicker: true
                              }}
                              onCallback={handleCallback}
                              onApply={searchRequestDate}
                            >
                              <input type="text" className="form-control" />
                            </DateRangePicker>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group">
                              <label htmlFor="">เลขที่ใบเสนอราคา</label>
                              <input
                                name={quotation}
                                type="text"
                                className="form-control"
                                placeholder="เลขที่ใบเสนอราคา"
                                onChange={(event) =>
                                  searchQt(event.target.value)
                                }
                              />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group">
                              <label htmlFor="">สถานะสินค้า</label>
                              <select class="form-control" id="sel1" name={status} onChange={(event) =>
                                searchStatus(event.target.value)
                              }>
                                <option value="">
                                  เลือกสถานะสินค้า
                                </option>
                                <option value="รับข้อมูลเข้าระบบ">รับข้อมูลเข้าระบบ</option>
                                <option value="รอตรวจแบบ">รอตรวจแบบ</option>
                                <option value="อนุมัติและเข้าสู่กระบวนการ">
                                  อนุมัติและเข้าสู่กระบวนการ
                                </option>
                                <option value="ไม่ได้รับการอนุมัติ">ไม่ได้รับการอนุมัติ</option>
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
                      data={precut}
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
