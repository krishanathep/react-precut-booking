import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import "moment-timezone";

export default function StatusView() {
  const { id } = useParams();

  const [precut, setPrecut] = useState([]);

  const [error, setError] = useState("");

  const [reject, setReject] = useState(false);
  const [reason, setReason] = useState(false);
  const [request, setRequest] = useState(false);

  const [qunmber, setQnumber] = useState(false)
  const [realcustomer, setRealCustomer] = useState(false)
  const [landNamber, SetLandNumber] = useState(false);
  const [homeDesign, SetHomeDesign] = useState(false);
  const [orderUnit, SetOrderUnit] = useState(false);
  const [orderSqm, SetOrderSqm] = useState(false);
  const [quotation, SetQuotation] = useState(false);
  const [orderPerson, SetOrderPerson] = useState(false);
  const [download, setDownload] = useState(false)
  const [type, setType] = useState(false);
  const [group, setGroup] = useState(false);
  const [color, setColor] = useState(false);
  const [series, setSeries] = useState(false);
  const [requestdate, setRequestDate] = useState(true);
  const [address, setAddress] = useState(false);

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
    hideDate();
    getData();
    hideItems();
  }, [
    precut.reject_comment,
    precut.reason_npi_cancel,
    precut.text_request_cancel,
    precut.land_Number,
    precut.homeDesign_Name,
    precut.order_type,
    precut.order_Unit,
    precut.order_Sqm,
    precut.keep_Quotation,
    precut.order_Person,
    precut.product_type,
    precut.product_group,
    precut.product_color,
    precut.product_series,
    precut.request_date,
    precut.recieve_address,
    precut.real_customer_name,
  ]);

  function hideItems() {
    if (precut.land_Number) {
      SetLandNumber(true);
    }
    if (precut.homeDesign_Name) {
      SetHomeDesign(true);
    }
    if (precut.order_Unit) {
      SetOrderUnit(true);
    }
    if (precut.order_Sqm) {
      SetOrderSqm(true);
    }
    if (precut.keep_Quotation) {
      SetQuotation(true);
    }
    if (precut.order_Person) {
      SetOrderPerson(true);
    }
    if (precut.product_type) {
      setType(true);
    }
    if (precut.product_group) {
      setGroup(true);
    }
    if (precut.product_color) {
      setColor(true);
    }
    if (precut.product_series) {
      setSeries(true);
    }
    if (precut.recieve_address) {
      setAddress(true);
    }
    if (precut.qt_number){
      setQnumber(true)
    }
    if (precut.reason_npi_cancel) {
      setReason(true);
    }
    if (precut.reject_comment) {
      setReject(true);
    }
    if (precut.text_request_cancel) {
      setRequest(true);
    }
    if (precut.download) {
      setDownload(true)
    }
    return
  }

  function hideDate() {
    if (precut.order_type == "โครงการ ผลิตตามแบบ") {
      setRequestDate(false);
      setRealCustomer(false)
    }
    return;
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
                          <td width={"50%"}>FAB Name</td>
                          <td>{precut.fabricator_name}</td>
                        </tr>
                        <tr>
                          <td>วันส่งคำสั่งซื้อ</td>
                          <td>{precut.order_receive_date ? moment(new Date(precut.order_receive_date)).format("DD-MM-YYYY"): ''}</td>
                        </tr>
                        <tr>
                          <td>ประเภทงาน</td>
                          <td>{precut.order_type}</td>
                        </tr>
                        { realcustomer ? (
                        <tr>
                          <td>ชื่อโครงการ/ลูกค้า</td>
                          <td>{precut.real_customer_name}</td>
                        </tr>
                        )
                        :("")}
                        {landNamber ? (
                          <>
                            <tr>
                              <td>หมายเลขแปลง</td>
                              <td>{precut.land_Number}</td>
                            </tr>
                          </>
                        ) : (
                          ""
                        )}
                        {homeDesign ? (
                          <>
                            <tr>
                              <td>แบบบ้าน</td>
                              <td>{precut.homeDesign_Name}</td>
                            </tr>
                          </>
                        ) : (
                          ""
                        )}
                        {orderUnit ? (
                          <>
                            <tr>
                              <td>จำนวนหลัง</td>
                              <td>{precut.order_Unit}</td>
                            </tr>
                          </>
                        ) : (
                          ""
                        )}
                        <tr>
                          <td>จำนวนชุดทั้งหมด</td>
                          <td>{precut.amount}</td>
                        </tr>
                        {orderSqm ? (
                          <>
                            <tr>
                              <td>จำนวนตารางเมตร</td>
                              <td>{precut.order_Sqm}</td>
                            </tr>
                          </>
                        ) : (
                          ""
                        )}
                        { qunmber ? (
                        <tr>
                          <td>เลขที่ใบเสนอราคา</td>
                          <td>{precut.qt_number}</td>
                        </tr>
                        ) : ("")}
                        {quotation ? (
                          <>
                            <tr>
                              <td>ต้องการให้ NPI เก็บแบบสำหรับใช้ซ้ำในอนาคต</td>
                              <td>{precut.keep_Quotation}</td>
                            </tr>
                          </>
                        ) : (
                          ""
                        )}
                        {type ? (
                          <tr>
                            <td>ประเภทสินค้า</td>
                            <td>{precut.product_type}</td>
                          </tr>
                        ) : (
                          ""
                        )}
                        {group ? (
                          <tr>
                            <td>กลุ่มสินค้า</td>
                            <td>{precut.product_group}</td>
                          </tr>
                        ) : (
                          ""
                        )}
                        {color ? (
                          <tr>
                            <td>สีของสินค้า</td>
                            <td>{precut.product_color}</td>
                          </tr>
                        ) : (
                          ""
                        )}
                        {series ? (
                          <tr>
                            <td>รุ่นสินค้า</td>
                            <td>{precut.product_series}</td>
                          </tr>
                        ) : (
                          ""
                        )}
                        {requestdate ? (
                          <tr>
                            <td>วันที่ต้องการสินค้า</td>
                            <td>{precut.request_date ? moment(new Date(precut.request_date)).format("DD-MM-YYYY"): ''}</td>
                          </tr>
                        ) : (
                          ""
                        )}
                        {address ? (
                          <tr>
                            <td>สถานที่ส่งของ</td>
                            <td>{precut.recieve_address}</td>
                          </tr>
                        ) : (
                          ""
                        )}
                        {download ? (
                          <tr>
                            <td>ดาวน์โหลดไฟล์</td>
                            <td><a className="btn btn-primary btn-sm" href={precut.download}>Download</a></td>
                          </tr>
                        ):("")}
                        <tr>
                          <td>สถานะงาน</td>
                          <td>{precut.order_status}</td>
                        </tr>
                        {orderPerson ? (
                          <>
                            <tr>
                              <td>ชื่อผู้สั่งซื้อสินค้า</td>
                              <td>{precut.order_Person}</td>
                            </tr>
                          </>
                        ) : (
                          ""
                        )}
                        {reject ? (
                          <>
                            <tr>
                              <td>Reject comment</td>
                              <td>{precut.reject_comment}</td>
                            </tr>
                          </>
                        ) : (
                          ""
                        )}
                        {reason ? (
                          <>
                            <tr>
                              <td>Reason cancel</td>
                              <td>{precut.reason_npi_cancel}</td>
                            </tr>
                          </>
                        ) : (
                          ""
                        )}
                        {request ? (
                          <>
                            <tr>
                              <td>Request cancel</td>
                              <td>{precut.text_request_cancel}</td>
                            </tr>
                          </>
                        ) : (
                          ""
                        )}
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
