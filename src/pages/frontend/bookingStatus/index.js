import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
//import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import { Link } from "react-router-dom";

export default function BookingStatus() {
  const fabname = JSON.parse(localStorage.getItem("fab"))

  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      {' '} Showing { from } to { to } of { size } Results
    </span>
  );

  const options = {

    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
   
  }

  const bookings = [
    {
      id: 1,
      fab_name: "บจ.ไทยไวนิล",
      date: "Oct 22, 2022",
      invoice: "2013149609/2",
      project: "คุณกมเลศวร์ จุลบุตร ส่งสาขานครสวรรค์",
      type: "หน้าต่าง&ประตู",
      model: "Signature",
      status: "รอตรวจแบบ",
    },
    {
      id: 2,
      fab_name: "บจ.ไทยไวนิล",
      date: "Oct 22, 2022",
      invoice: "2013149691/2",
      project: "คุณกมเลศวร์ จุลบุตร ส่งสาขานครสวรรค์",
      type: "หน้าต่าง&ประตู",
      model: "Signature",
      status: "รอตรวจแบบ",
    },
    {
      id: 3,
      fab_name: "บจ.ไทยไวนิล",
      date: "Oct 22, 2022",
      invoice: "2013149692/2",
      project: "คุณเอ เขาค้อ ส่งสาขาลำปาง",
      type: "หน้าต่าง&ประตู",
      model: "Signature",
      status: "รอตรวจแบบ",
    },
    {
      id: 4,
      fab_name: "บจ.ไทยไวนิล",
      date: "Oct 22, 2022",
      invoice: "2013149693/2",
      project: "คุณเอ เขาค้อ ส่งสาขานครสวรรค์",
      type: "หน้าต่าง&ประตู",
      model: "Signature",
      status: "รอตรวจแบบ",
    },
    {
      id: 5,
      fab_name: "บจ.ไทยไวนิล",
      date: "Oct 22, 2022",
      invoice: "2013149694/2",
      project: "คุณชโยดม ฉันทวางค์ ส่งสาขาลำปาง",
      type: "หน้าต่าง&ประตู",
      model: "Signature",
      status: "รอตรวจแบบ",
    },
    {
      id: 6,
      fab_name: "บจ.ไทยไวนิล",
      date: "Oct 22, 2022",
      invoice: "2013149695/2",
      project: "นพ.ขชล รวมทรัพย์ ส่งนครสวรรค์",
      type: "หน้าต่าง&ประตู",
      model: "Signature",
      status: "รอตรวจแบบ",
    },
  ];

  const columns = [
    // {
    //   dataField: "id",
    //   text: "ID",
    //   sort: true
    // },
    // {
    //   dataField: "fab_name",
    //   text: "FAB name",
    //   //filter: textFilter(),
    //   sort: true
    // },
    {
      dataField: "date",
      text: "วันส่งคำสั่งซื้อ",
      //filter: textFilter(),
      sort: true
    },
    {
      dataField: "invoice",
      text: "เลขที่ใบเสนอราคา",
      //filter: textFilter(),
      sort: true
    },
    {
      dataField: "project",
      text: "ชื่อโครงการ/ลูกค้า",
      //filter: textFilter(),
      sort: true
    },
    {
      dataField: "type",
      text: "ประเภทสินค้า",
      //filter: textFilter(),
      sort: true
    },
    {
      dataField: "model",
      text: "รุ่นสินค้า",
      //filter: textFilter(),
      sort: true
    },
    {
      dataField: "status",
      text: "สถานะงาน",
      //filter: textFilter(),
      sort: true
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
        <div>
          <Link to={"/booking-status/view/"} className="btn btn-info">
          <i className="fas fa-file-alt"></i>
          </Link>
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
                <h1 className="m-0">{fabname}</h1>
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
                    <h5 className="m-0">เช็คสถานะงาน</h5>
                  </div>
                  <div className="card-body">
                    {/* <div className="float-right mb-2">
                      <Link to="/bookings/create" className="btn btn-primary">
                        <i class="fas fa-plus"></i> Booking
                      </Link>
                    </div> */}
                    <div className="row mb-4">
                      <div className="col-md-2">
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-md-2">
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-md-2">
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-md-2">
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-md-2">
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-md-2">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <BootstrapTable
                      keyField="id"
                      data={bookings}
                      columns={columns}
                      pagination={paginationFactory(options)}
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