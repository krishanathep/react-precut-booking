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

  const [qunmber, setQnumber] = useState(false);
  const [realcustomer, setRealCustomer] = useState(true);
  const [landNamber, SetLandNumber] = useState(false);
  const [homeDesign, SetHomeDesign] = useState(false);
  const [orderUnit, SetOrderUnit] = useState(false);
  const [orderSqm, SetOrderSqm] = useState(false);
  const [quotation, SetQuotation] = useState(false);
  const [orderPerson, SetOrderPerson] = useState(false);
  const [download, setDownload] = useState(false);
  const [type, setType] = useState(false);
  const [group, setGroup] = useState(false);
  const [color, setColor] = useState(false);
  const [series, setSeries] = useState(false);
  const [requestdate, setRequestDate] = useState(true);
  const [address, setAddress] = useState(false);
  const [prefsuitno, setPrefSuitNo] = useState(false);
  const [planningdate, setPlanningDate] = useState(false);
  const [expectdate, setExpectDate] = useState(false);
  const [completedate, setCompleteDate] = useState(false);
  const [amount, setAmount] = useState(true);

  // Timeline Show and Hide
  const [timeLine_1, setTimeLine_1] = useState(false);
  const [timeLine_2, setTimeLine_2] = useState(false);
  const [timeLine_3, setTimeLine_3] = useState(false);
  const [timeLine_4, setTimeLine_4] = useState(false);
  const [timeLine_5, setTimeLine_5] = useState(false);

  const [fab_name, setFabName] = useState(
    JSON.parse(localStorage.getItem("fab"))
  );

  function getData() {
    try {
      fetch(
        "https://precutbooking.windsor.co.th/bookings/laravel_api_auth/public/api/precut/" +
          id
      )
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
    precut.download,
    precut.prefsuiteNo,
    precut.order_planning_date,
    precut.order_expect_date,
    precut.order_complete_date,
    precut.requestdate,
    precut.amount,
    precut.order_status,
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
    if (precut.qt_number) {
      setQnumber(true);
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
    if (precut.prefsuiteNo) {
      setPrefSuitNo(true);
    }
    if (precut.order_planning_date) {
      setPlanningDate(true);
    }
    if (precut.order_expect_date) {
      setExpectDate(true);
    }
    if (precut.order_complete_date) {
      setCompleteDate(true);
    }
    if (precut.order_type === "ตรวจแบบอย่างเดียว") {
      setRequestDate(false);
    }
    if (precut.amount === 0) {
      setAmount(false);
    }
    if (precut.order_status === "รับข้อมูลเข้าระบบ") {
      setTimeLine_1(true);
    } else if (precut.order_status === "รอตรวจแบบ") {
      setTimeLine_2(true);
    } else if (precut.order_status === "ไม่ได้รับการอนุมัติ") {
      setTimeLine_3(true);
    } else if (precut.order_status === "อนุมัติเตรียมแผนการผลิต") {
      setTimeLine_4(true);
    } else if (precut.order_status === "อนุมัติการตรวจแบบแล้ว") {
      setTimeLine_5(true);
    }
    return;
  }

  //Cancel Order date range.
  const CANCEL_ORDER_DATE = moment(precut.created_at).add(3, "days").toDate();

  const EXPIRED_DATE = moment(precut.created_at).add(30, "days").toDate();
  const CURRENT_DATE = moment().toDate();

  function hideDate() {
    if (precut.order_type == "โครงการ ผลิตตามแบบ") {
      setRequestDate(false);
      setRealCustomer(false);
    }
    if (CURRENT_DATE < EXPIRED_DATE && precut.download != null) {
      setDownload(true);
    }
    return;
  }

  const canelOrder = () => {
    alert("ต้องการยกเลิกออเดอร์ : "+precut.file_name)
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
                      {/* Start Timeline   */}
                      {timeLine_1 ? (
                        <>
                          <div class="card card-timeline px-2 border-none">
                            {" "}
                            <ul class="bs4-order-tracking">
                              {" "}
                              <li class="step active">
                                {" "}
                                <div>
                                  <i class="far fa-calendar"></i>
                                </div>{" "}
                                รับคำสั่งซื้อ{" "}
                              </li>{" "}
                              <li class="step">
                                {" "}
                                <div>
                                  <i class="fas fa-clipboard-check"></i>
                                </div>{" "}
                                รอตรวจแบบ{" "}
                              </li>{" "}
                              <li class="step">
                                {" "}
                                <div>
                                  <i class="fas fa-user-check"></i>
                                </div>{" "}
                                อนุมัติ/ไม่อนุมัติแบบ{" "}
                              </li>{" "}
                              <li class="step">
                                {" "}
                                <div>
                                  <i class="fas fa-truck"></i>
                                </div>{" "}
                                ลงแผนการผลิต{" "}
                              </li>{" "}
                            </ul>{" "}
                            <h5 class="text-center">
                              <b>สถานะงานล่าสุด</b> รับข้อมูลเข้าระบบ
                            </h5>
                          </div>
                        </>
                      ) : (
                        ""
                      )}

                      {timeLine_2 ? (
                        <>
                          <div class="card card-timeline px-2 border-none">
                            {" "}
                            <ul class="bs4-order-tracking">
                              {" "}
                              <li class="step active">
                                {" "}
                                <div>
                                  <i class="far fa-calendar"></i>
                                </div>{" "}
                                รับคำสั่งซื้อ{" "}
                              </li>{" "}
                              <li class="step active">
                                {" "}
                                <div>
                                  <i class="fas fa-clipboard-check"></i>
                                </div>{" "}
                                รอตรวจแบบ{" "}
                              </li>{" "}
                              <li class="step">
                                {" "}
                                <div>
                                  <i class="fas fa-user-check"></i>
                                </div>{" "}
                                อนุมัติ/ไม่อนุมัติแบบ{" "}
                              </li>{" "}
                              <li class="step">
                                {" "}
                                <div>
                                  <i class="fas fa-truck"></i>
                                </div>{" "}
                                ลงแผนการผลิต{" "}
                              </li>{" "}
                            </ul>{" "}
                            <h5 class="text-center">
                              <b>สถานะงานล่าสุด</b> รอตรวจแบบ
                            </h5>
                          </div>
                        </>
                      ) : (
                        ""
                      )}

                      <div>
                        { timeLine_3 ? (
                        <div className="card card-timeline px-2 border-none">
                          <ul className="bs4-order-tracking">
                            <li className="step active1">
                              <div>
                                <i className="far fa-calendar" />
                              </div>
                              รับคำสั่งซื้อ
                            </li>
                            <li className="step active1">
                              <div>
                                <i className="fas fa-clipboard-check" />
                              </div>
                              รอตรวจแบบ
                            </li>
                            <li className="step active1">
                              <div>
                                <i className="fas fa-user-check" />
                              </div>
                              ไม่อนุมัติแบบ
                            </li>
                            <li className="step active2">
                              <div>
                                <i className="fas fa-truck" />
                              </div>
                              ลงแผนการผลิต
                            </li>
                          </ul>
                          <h5 className="text-center">
                            <b>สถานะงานล่าสุด</b> ไม่ได้รับการอนุมัติ
                          </h5>
                        </div>
                        ) : ( "" )}
                      </div>

                      {timeLine_4 ? (
                        <>
                          <div class="card card-timeline px-2 border-none">
                            {" "}
                            <ul class="bs4-order-tracking">
                              {" "}
                              <li class="step active">
                                {" "}
                                <div>
                                  <i class="far fa-calendar"></i>
                                </div>{" "}
                                รับคำสั่งซื้อ{" "}
                              </li>{" "}
                              <li class="step active">
                                {" "}
                                <div>
                                  <i class="fas fa-clipboard-check"></i>
                                </div>{" "}
                                รอตรวจแบบ{" "}
                              </li>{" "}
                              <li class="step active">
                                {" "}
                                <div>
                                  <i class="fas fa-user-check"></i>
                                </div>{" "}
                                อนุมัติแบบ{" "}
                              </li>{" "}
                              <li class="step active">
                                {" "}
                                <div>
                                  <i class="fas fa-truck"></i>
                                </div>{" "}
                                ลงแผนการผลิต{" "}
                              </li>{" "}
                            </ul>{" "}
                            <h5 class="text-center">
                              <b>สถานะงานล่าสุด</b> อนุมัติเตรียมลงแผนการผลิต
                            </h5>
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                      {timeLine_5 ? (
                        <>
                          <div class="card card-timeline px-2 border-none">
                            {" "}
                            <ul class="bs4-order-tracking">
                              {" "}
                              <li class="step active">
                                {" "}
                                <div>
                                  <i class="far fa-calendar"></i>
                                </div>{" "}
                                รับคำสั่งซื้อ{" "}
                              </li>{" "}
                              <li class="step active">
                                {" "}
                                <div>
                                  <i class="fas fa-clipboard-check"></i>
                                </div>{" "}
                                รอตรวจแบบ{" "}
                              </li>{" "}
                              <li class="step active">
                                {" "}
                                <div>
                                  <i class="fas fa-user-check"></i>
                                </div>{" "}
                                อนุมัติแบบ{" "}
                              </li>{" "}
                              <li class="step">
                                {" "}
                                <div>
                                  <i class="fas fa-truck"></i>
                                </div>{" "}
                                ลงแผนการผลิต{" "}
                              </li>{" "}
                            </ul>{" "}
                            <h5 class="text-center">
                              <b>สถานะงานล่าสุด</b> อนุมัติเตรียมลงแผนการผลิต
                            </h5>
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                       
                      {/* End Timeline */}
                      <table className="table table-bordered mt-4">
                        <tr>
                          <td width={"50%"}>FAB Name</td>
                          <td>{precut.fabricator_name}</td>
                        </tr>
                        <tr>
                          <td>วันส่งคำสั่งซื้อ</td>
                          <td>
                            {precut.order_receive_date
                              ? moment(
                                  new Date(precut.order_receive_date)
                                ).format("DD-MM-YYYY")
                              : ""}
                          </td>
                        </tr>
                        <tr>
                          <td>ประเภทงาน</td>
                          <td>{precut.order_type}</td>
                        </tr>
                        {realcustomer ? (
                          <tr>
                            <td>ชื่อโครงการ/ลูกค้า</td>
                            <td>{precut.real_customer_name}</td>
                          </tr>
                        ) : (
                          ""
                        )}
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

                        {amount ? (
                          <>
                            <tr>
                              <td>จำนวนชุดทั้งหมด</td>
                              <td>{precut.amount}</td>
                            </tr>
                          </>
                        ) : (
                          ""
                        )}

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
                        {qunmber ? (
                          <tr>
                            <td>เลขที่ใบเสนอราคา</td>
                            <td>{precut.qt_number}</td>
                          </tr>
                        ) : (
                          ""
                        )}
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
                            <td>ประเภทการผลิต</td>
                            <td>{precut.product_type}</td>
                          </tr>
                        ) : (
                          ""
                        )}
                        {group ? (
                          <tr>
                            <td>ประเภทสินค้า</td>
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
                            <td>
                              {precut.request_date
                                ? moment(new Date(precut.request_date)).format(
                                    "DD-MM-YYYY"
                                  )
                                : ""}
                            </td>
                          </tr>
                        ) : (
                          ""
                        )}
                        {address ? (
                          <tr>
                            <td>สถานที่จัดส่ง</td>
                            <td>{precut.recieve_address}</td>
                          </tr>
                        ) : (
                          ""
                        )}
                        {download ? (
                          <tr>
                            <td>ดาวน์โหลดไฟล์</td>
                            <td>
                              <a
                                className="btn btn-primary btn-sm"
                                href={precut.download}
                              >
                                ดาวน์โหลดไฟล์
                              </a>
                            </td>
                          </tr>
                        ) : (
                          ""
                        )}
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
                              <td>สาเหตุที่ไม่อนุมัติ</td>
                              <td>{precut.reject_comment}</td>
                            </tr>
                          </>
                        ) : (
                          ""
                        )}
                        {reason ? (
                          <>
                            <tr>
                              <td>สาเหตุการยกเลิกใบเสนอราคา</td>
                              <td>{precut.reason_npi_cancel}</td>
                            </tr>
                          </>
                        ) : (
                          ""
                        )}
                        {request ? (
                          <>
                            <tr>
                              <td>คำร้องขอยกเลิกใบเสนอราคา</td>
                              <td>{precut.text_request_cancel}</td>
                            </tr>
                          </>
                        ) : (
                          ""
                        )}
                        {prefsuitno ? (
                          <tr>
                            <td>หมายเลข Prefsuite</td>
                            <td>{precut.prefsuiteNo}</td>
                          </tr>
                        ) : (
                          ""
                        )}
                        {planningdate ? (
                          <tr>
                            <td>วันกำหนดผลิตเสร็จ</td>
                            <td>{precut.order_planning_date}</td>
                          </tr>
                        ) : (
                          ""
                        )}
                        {expectdate ? (
                          <tr>
                            <td>วันที่คาดว่าจะผลิตเสร็จ</td>
                            <td>{precut.order_expect_date}</td>
                          </tr>
                        ) : (
                          ""
                        )}
                        {completedate ? (
                          <tr>
                            <td>วันที่จริงที่ผลิตเสร็จ</td>
                            <td>{precut.order_complete_date}</td>
                          </tr>
                        ) : (
                          ""
                        )}
                        <tr>
                            <td>ยกเลิกคำสั่งซื้อ <span className="text-danger">(ยกเลิกได้หลังจากส่งคำสั่งซื้อได้ไม่เกิน 3 วัน)</span></td>
                            <td>
                              <button 
                                onClick={canelOrder} 
                                className="btn btn-danger btn-sm"
                                //Hide button then order not 3 day
                                disabled={
                                  !(
                                    CURRENT_DATE < CANCEL_ORDER_DATE
                                  )}
                              >
                                ยกเลิกคำสั่งซื้อ
                              </button>
                            </td>
                          </tr>
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
