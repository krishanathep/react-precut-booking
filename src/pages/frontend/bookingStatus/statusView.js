import React from "react";
import { Link } from "react-router-dom";

export default function BookingView() {
  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Status view</h1>
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
                    <h5 className="m-0">Status view</h5>
                  </div>
                  <div className="card-body">
                    <table className="table table-bordered mt-2">
                      {/* <tr>
                      <td>ID</td>
                      <td>1</td>
                    </tr> */}
                      <tr>
                        <td width={"25%"}>FAB name</td>
                        <td>บจ.ไทยไวนิล</td>
                      </tr>
                      <tr>
                        <td>วันส่งคำสั่งซื้อ</td>
                        <td>Oct 22, 2022</td>
                      </tr>
                      <tr>
                        <td>เลขที่ใบเสนอราคา</td>
                        <td>2013149609/2</td>
                      </tr>
                      <tr>
                        <td>ชื่อโครงการ/ลูกค้า</td>
                        <td>คุณกมเลศวร์ จุลบุตร ส่งสาขานครสวรรค์</td>
                      </tr>
                      <tr>
                        <td>ประเภทสินค้า</td>
                        <td>หน้าต่าง&ประตู</td>
                      </tr>
                      <tr>
                        <td>รุ่นสินค้า</td>
                        <td>Signature</td>
                      </tr>
                      <tr>
                        <td>ไฟล์ดาวน์โหลด</td>
                        <td>
                          <a
                            href="https://www.jotform.com/uploads/npics_ss01/222648731104451/5422371140521003727/203WPL-1%202013149609-2.pdf"
                           
                          >
                            ดาวน์โหลด
                            {/* <i className="fas fa-file-pdf"></i> */}
                          </a>
                        </td>
                      </tr>
                    </table>
                    <div className="float-right mt-2">
                      <Link to="/booking-status" className="btn btn-danger">
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
    </>
  );
}
