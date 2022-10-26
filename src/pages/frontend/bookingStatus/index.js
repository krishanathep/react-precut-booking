import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
//import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
//import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import { Link } from "react-router-dom";

export default function BookingStatus() {
  const bookings = [
    {
      id: 1,
      fab_name: "บจ.ไทยไวนิล",
      date: "Oct 22, 2022",
      invoice: "2013149609/2",
      project: "คุณกมเลศวร์ จุลบุตร ส่งสาขานครสวรรค์",
      type: "หน้าต่าง&ประตู",
      model: "Signature",
      file: "https://www.jotform.com/uploads/npics_ss01/222648731104451/5422371140521003727/203WPL-1%202013149609-2.pdf",
    },
    {
      id: 2,
      fab_name: "บจ.ไทยไวนิล",
      date: "Oct 22, 2022",
      invoice: "2013149691/2",
      project: "คุณกมเลศวร์ จุลบุตร ส่งสาขานครสวรรค์",
      type: "หน้าต่าง&ประตู",
      model: "Signature",
      file: "https://www.jotform.com/uploads/npics_ss01/222648731104451/5422371140521003727/203WPL-1%202013149609-2.pdf",
    },
    {
      id: 3,
      fab_name: "บจ.ไทยไวนิล",
      date: "Oct 22, 2022",
      invoice: "2013149692/2",
      project: "คุณเอ เขาค้อ ส่งสาขาลำปาง",
      type: "หน้าต่าง&ประตู",
      model: "Signature",
      file: "https://www.jotform.com/uploads/npics_ss01/222648731104451/5422371140521003727/203WPL-1%202013149609-2.pdf",
    },
    {
      id: 4,
      fab_name: "บจ.ไทยไวนิล",
      date: "Oct 22, 2022",
      invoice: "2013149693/2",
      project: "คุณเอ เขาค้อ ส่งสาขานครสวรรค์",
      type: "หน้าต่าง&ประตู",
      model: "Signature",
      file: "https://www.jotform.com/uploads/npics_ss01/222648731104451/5422371140521003727/203WPL-1%202013149609-2.pdf",
    },
    {
      id: 5,
      fab_name: "บจ.ไทยไวนิล",
      date: "Oct 22, 2022",
      invoice: "2013149694/2",
      project: "คุณชโยดม ฉันทวางค์ ส่งสาขาลำปาง",
      type: "หน้าต่าง&ประตู",
      model: "Signature",
      file: "https://www.jotform.com/uploads/npics_ss01/222648731104451/5422371140521003727/203WPL-1%202013149609-2.pdf",
    },
    {
      id: 6,
      fab_name: "บจ.ไทยไวนิล",
      date: "Oct 22, 2022",
      invoice: "2013149695/2",
      project: "นพ.ขชล รวมทรัพย์ ส่งนครสวรรค์",
      type: "หน้าต่าง&ประตู",
      model: "Signature",
      file: "https://www.jotform.com/uploads/npics_ss01/222648731104451/5422371140521003727/203WPL-1%202013149609-2.pdf",
    },
  ];

  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true
    },
    {
      dataField: "fab_name",
      text: "FAB name",
      filter: textFilter(),
      sort: true
    },
    {
      dataField: "date",
      text: "วันส่งคำสั่งซื้อ",
      filter: textFilter(),
      sort: true
    },
    {
      dataField: "invoice",
      text: "เลขที่ใบเสนอราคา",
      filter: textFilter(),
      sort: true
    },
    {
      dataField: "project",
      text: "ชื่อโครงการ/ลูกค้า",
      filter: textFilter(),
      sort: true
    },
    {
      dataField: "type",
      text: "ประเภทสินค้า",
      filter: textFilter(),
      sort: true
    },
    {
      dataField: "model",
      text: "รุ่นสินค้า",
      filter: textFilter(),
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
        <div className="btn-group">
          {/* <Link to={"/booking-status/view/" + row.id} className="btn btn-default"> */}
          <Link to={"/booking-status/view/"} className="btn btn-default">
          <i className="fas fa-list"></i>
          </Link>
          <a href={row.file} type="button" className="btn btn-default">
          <i className="fas fa-file-download"></i>
          </a>
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
                    <h5 className="m-0">Status</h5>
                  </div>
                  <div className="card-body">
                    {/* <div className="float-right mb-2">
                      <Link to="/bookings/create" className="btn btn-primary">
                        <i class="fas fa-plus"></i> Booking
                      </Link>
                    </div> */}
                    <BootstrapTable
                      keyField="id"
                      data={bookings}
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