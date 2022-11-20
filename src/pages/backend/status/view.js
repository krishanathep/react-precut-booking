import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function StatusView() {
  const { id } = useParams();

  const [precut, setPrecut] = useState([]);

  const [error, setError] = useState("");

  const [reject, setReject] = useState(false);
  const [reason, setReason] = useState(false);
  const [request, setRequest] = useState(false);

  const [fab_name, setFabName] = useState(
    JSON.parse(localStorage.getItem("fab"))
  );

   function getData() {
    try {
       fetch("http://localhost:8000/api/precut/" + id)
        .then((res) => res.json())
        .then((res) => setPrecut(res.precut));     
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    getData();
    hideReason()
    hideReject()
    hideRequest()
  }, [precut.reject_comment, precut.reason_npi_cancel, precut.text_request_cancel]);

 
  function hideReject() {
    if(precut.reject_comment){
      setReject(true);
    }
  }

  function hideReason() {
    if(precut.reason_npi_cancel){
      setReason(true);
    }
  }

  function hideRequest() {
    if(precut.text_request_cancel){
      setRequest(true);
    }
  }

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
                  <li className="breadcrumb-item active">View</li>
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
                    <h5 className="m-0">รายละเอียดสถานะงาน</h5>
                  </div>
                  <div className="card-body">
                    <div className="container">
                    <table className="table table-bordered mt-5">
                      <tr>
                        <td>FAB Name</td>
                        <td>{precut.fabricator_name}</td>
                      </tr>
                      <tr>
                        <td>วันส่งคำสั่งซื้อ</td>
                        <td>{precut.order_receive_date}</td>
                      </tr>
                      <tr>
                        <td>เลขที่ใบเสนอราคา</td>
                        <td>{precut.qt_number}</td>
                      </tr>
                      <tr>
                        <td>ชื่อโครงการ/ลูกค้า</td>
                        <td>{precut.real_customer_name}</td>
                      </tr>
                      <tr>
                        <td>ประเภทสินค้า</td>
                        <td>{precut.product_type}</td>
                      </tr>
                      <tr>
                        <td>กลุ่มสินค้า</td>
                        <td>{precut.product_group}</td>
                      </tr>
                      <tr>
                        <td>สีของสินค้า</td>
                        <td>{precut.product_color}</td>
                      </tr>
                      <tr>
                        <td>รุ่นสินค้า</td>
                        <td>{precut.product_series}</td>
                      </tr>
                      <tr>
                        <td>วันที่ต้องการสินค้า</td>
                        <td>{precut.request_date}</td>
                      </tr>
                      <tr>
                        <td>สถานที่ส่งของ</td>
                        <td>{precut.recieve_address}</td>
                      </tr>
                      <tr>
                        <td>สถานะงาน</td>
                        <td>{precut.order_status}</td>
                      </tr>
                      { reject ? 
                      <>
                      <tr>
                        <td>Reject comment</td>
                        <td>{precut.reject_comment}</td>
                      </tr>
                      </> : ""}
                      { reason ? 
                      <>
                      <tr>
                        <td>Reason cancel</td>
                        <td>{precut.reason_npi_cancel}</td>
                      </tr>
                      </> : ""}
                      { request ? 
                      <>
                      <tr>
                        <td>Request cancel</td>
                        <td>{precut.text_request_cancel}</td>
                      </tr>
                      </> : ""}
                    </table>
                    <div className="float-right mt-2">
                      <Link to="/backend/status" className="btn btn-danger">
                        Cancel
                      </Link>
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
