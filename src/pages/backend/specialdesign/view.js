import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function ViewSpecialDesign() {
  const { id } = useParams();

  const [estimate, setEstimate] = useState([]);

   //hide timeline
   const [timeline1, setTimeLine1] = useState(false);
   const [timeline2, setTimeLine2] = useState(false);
   const [timeline3, setTimeLine3] = useState(false);
   const [timeline4, setTimeLine4] = useState(false);
   
   //hide field
   const [muliion_size, setmuliion_size] = useState(false)
   const [mullion_type, setmullion_type] = useState(false)
   const [mirror_type_and_size, setmirror_type_and_size] = useState(false)
   const [mirror_edge_size, setmirror_edge_size] = useState(false)
   const [fab_upload_url, setfab_upload_url] = useState(false)
   const [design_upload_url, setdesign_upload_url] = useState(false)
   const [design_upload_by, setdesign_upload_by] = useState(false)
   const [quatation_upload_url, setquatation_upload_url] = useState(false)
   const [quatation_upload_by, setquatation_upload_by] = useState(false)
   const [quatation_no, setquatation_no] = useState(false)
   const [reject_comment, setreject_comment] = useState(false)
   const [reject_by, setreject_by] = useState(false)
   const [cancel_comment, setcancel_comment] = useState(false)
   const [cancel_by, setcancel_by] = useState(false)
   const [have_mirror, sethave_mirror] = useState(false)
   const [approve_comment, setapprove_comment] = useState(false)
   const [approve_by, setapprove_by] = useState(false)

  const getData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/estimate/` + id
      );
      setEstimate(res.data.estimate);
    } catch (error) {
      console.log(error);
    }
  };

  const hideFeild = () => {
    if (estimate.muliion_size) {
      setmuliion_size(true);
    }
    if (estimate.mullion_type) {
      setmullion_type(true);
    }
    if (estimate.mirror_type_and_size) {
      setmirror_type_and_size(true);
    }
    if (estimate.mirror_edge_size) {
      setmirror_edge_size(true);
    }
    if (estimate.fab_upload_url) {
      setfab_upload_url(true);
    }
    if (estimate.design_upload_url) {
      setdesign_upload_url(true);
    }
    if (estimate.design_upload_url ==="-") {
      setdesign_upload_url(false);
    }
    if (estimate.design_upload_by) {
      setdesign_upload_by(true);
    }
    if (estimate.design_upload_by ==="-") {
      setdesign_upload_by(false);
    }
    if (estimate.quatation_upload_url) {
      setquatation_upload_url(true);
    }
    if (estimate.quatation_upload_url ==="-") {
      setquatation_upload_url(false);
    }
    if (estimate.quatation_upload_by) {
      setquatation_upload_by(true);
    }
    if (estimate.quatation_upload_by ==="-") {
      setquatation_upload_by(false);
    }
    if (estimate.quatation_no) {
      setquatation_no(true);
    }
    if (estimate.reject_comment) {
      setreject_comment(true);
    }
    if (estimate.reject_by) {
      setreject_by(true);
    }
    if (estimate.cancel_comment) {
      setcancel_comment(true);
    }
    if (estimate.cancel_by) {
      setcancel_by(true);
    }
    if(estimate.have_mirror){
      sethave_mirror(true)
    }
    if(estimate.approve_comment)(
      setapprove_comment(true)
    )
   

    if (estimate.status === "ตรวจสอบข้อมูล") {
      setTimeLine1(true);
    } else if (estimate.status === "อยู่ระหว่างจัดทำแบบ") {
      setTimeLine2(true);
    } else if (estimate.status === "อยู่ระหว่างประเมินราคา") {
      setTimeLine3(true);
    } else if (estimate.status === "ออกใบเสนอราคาเสร็จ") {
      setTimeLine4(true);
    }
    return;
  };

  useEffect(() => {
    getData();
    hideFeild();
  }, [estimate.status]);

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">รายละเอียดจัดการแบบและราคาสั่งผลิต</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Estimate-view</li>
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
                    <h5 className="m-0">รายละเอียดจัดการแบบและราคาสั่งผลิต</h5>
                  </div>
                  <div className="card-body">
                    <div className="container">
                    {timeline1 ? (
                        <div className="card card-timeline px-2 border-none">
                          {" "}
                          <ul className="bs4-order-tracking">
                            {" "}
                            <li className="step active">
                              {" "}
                              <div>
                                <i className="far fa-calendar"></i>
                              </div>{" "}
                              ตรวจสอบข้อมูล{" "}
                            </li>{" "}
                            <li className="step">
                              {" "}
                              <div>
                                <i className="fas fa-pen"></i>
                              </div>{" "}
                              อยู่ระหว่างจัดทำแบบ{" "}
                            </li>{" "}
                            <li className="step">
                              {" "}
                              <div>
                                <i className="fas fa-dollar-sign"></i>
                              </div>{" "}
                              อยู่ระหว่างประเมินราคา{" "}
                            </li>{" "}
                            <li className="step">
                              {" "}
                              <div>
                                <i className="fas fa-shopping-cart"></i>
                              </div>{" "}
                              ออกใบเสนอราคาเสร็จ{" "}
                            </li>{" "}
                          </ul>{" "}
                          <h5 className="text-center">
                            <b>สถานะงานล่าสุด</b> {estimate.status}
                          </h5>
                        </div>
                      ) : (
                        ""
                      )}
                      {timeline2 ? (
                        <div className="card card-timeline px-2 border-none">
                          {" "}
                          <ul className="bs4-order-tracking">
                            {" "}
                            <li className="step active">
                              {" "}
                              <div>
                                <i className="far fa-calendar"></i>
                              </div>{" "}
                              ตรวจสอบข้อมูล{" "}
                            </li>{" "}
                            <li className="step active">
                              {" "}
                              <div>
                                <i className="fas fa-pen"></i>
                              </div>{" "}
                              อยู่ระหว่างจัดทำแบบ{" "}
                            </li>{" "}
                            <li className="step">
                              {" "}
                              <div>
                                <i className="fas fa-dollar-sign"></i>
                              </div>{" "}
                              อยู่ระหว่างประเมินราคา{" "}
                            </li>{" "}
                            <li className="step">
                              {" "}
                              <div>
                                <i className="fas fa-shopping-cart"></i>
                              </div>{" "}
                              ออกใบเสนอราคาเสร็จ{" "}
                            </li>{" "}
                          </ul>{" "}
                          <h5 className="text-center">
                            <b>สถานะงานล่าสุด</b> {estimate.status}
                          </h5>
                        </div>
                      ) : (
                        ""
                      )}
                      {timeline3 ? (
                        <div className="card card-timeline px-2 border-none">
                          {" "}
                          <ul className="bs4-order-tracking">
                            {" "}
                            <li className="step active">
                              {" "}
                              <div>
                                <i className="far fa-calendar"></i>
                              </div>{" "}
                              ตรวจสอบข้อมูล{" "}
                            </li>{" "}
                            <li className="step active">
                              {" "}
                              <div>
                                <i className="fas fa-pen"></i>
                              </div>{" "}
                              อยู่ระหว่างจัดทำแบบ{" "}
                            </li>{" "}
                            <li className="step active">
                              {" "}
                              <div>
                                <i className="fas fa-dollar-sign"></i>
                              </div>{" "}
                              อยู่ระหว่างประเมินราคา{" "}
                            </li>{" "}
                            <li className="step">
                              {" "}
                              <div>
                                <i className="fas fa-shopping-cart"></i>
                              </div>{" "}
                              ออกใบเสนอราคาเสร็จ{" "}
                            </li>{" "}
                          </ul>{" "}
                          <h5 className="text-center">
                            <b>สถานะงานล่าสุด</b> {estimate.status}
                          </h5>
                        </div>
                      ) : (
                        ""
                      )}
                      {timeline4 ? (
                        <div className="card card-timeline px-2 border-none">
                          {" "}
                          <ul className="bs4-order-tracking">
                            {" "}
                            <li className="step active">
                              {" "}
                              <div>
                                <i className="far fa-calendar"></i>
                              </div>{" "}
                              ตรวจสอบข้อมูล{" "}
                            </li>{" "}
                            <li className="step active">
                              {" "}
                              <div>
                                <i className="fas fa-pen"></i>
                              </div>{" "}
                              อยู่ระหว่างจัดทำแบบ{" "}
                            </li>{" "}
                            <li className="step active">
                              {" "}
                              <div>
                                <i className="fas fa-dollar-sign"></i>
                              </div>{" "}
                              อยู่ระหว่างประเมินราคา{" "}
                            </li>{" "}
                            <li className="step active">
                              {" "}
                              <div>
                                <i className="fas fa-shopping-cart"></i>
                              </div>{" "}
                              ออกใบเสนอราคาเสร็จ{" "}
                            </li>{" "}
                          </ul>{" "}
                          <h5 className="text-center">
                            <b>สถานะงานล่าสุด</b> {estimate.status}
                          </h5>
                        </div>
                      ) : (
                        ""
                      )}
                      <table className="table table-bordered">
                        <tbody>
                          <tr>
                            <td width={"50%"}>หมายเลขคำร้อง</td>
                            <td>{estimate.fab_request_no}</td>
                          </tr>
                          <tr>
                            <td>ชื่อลูกค้า</td>
                            <td>{estimate.fab_name}</td>
                          </tr>
                          <tr>
                            <td>ประเภทสินค้า</td>
                            <td>{estimate.product_name}</td>
                          </tr>
                          <tr>
                            <td>รุ่นสินค้า</td>
                            <td>{estimate.product_model}</td>
                          </tr>
                          <tr>
                            <td>สีของสินค้า</td>
                            <td>{estimate.product_color}</td>
                          </tr>
                          { have_mirror ? (
                            <tr>
                            <td>รูปแบบกระจก</td>
                            <td>{estimate.have_mirror}</td>
                            </tr>    
                          ):("")}
                          { mirror_type_and_size ? (
                             <tr>
                             <td>ชนิดกระจกและความหา(มม.)</td>
                             <td>{estimate.mirror_type_and_size}</td>
                           </tr>
                          ):("")}
                          { mirror_edge_size ? (
                             <tr>
                             <td>ความหนาของกระจก(มม.)</td>
                             <td>{estimate.mirror_edge_size}</td>
                           </tr>
                          ):("")}
                          { muliion_size ? (
                             <tr>
                             <td>ขนาดของลูกฟัก</td>
                             <td>{estimate.muliion_size}</td>
                           </tr>
                          ):("")}
                          { mullion_type ? (
                            <tr>
                            <td>ชนิดของลูกฟัก</td>
                            <td>{estimate.mullion_type}</td>
                          </tr>
                          ):("")}

                          <tr>
                            <td>รายละเอียด/หมายเหตุ</td>
                            <td>{estimate.product_more_detail}</td>
                          </tr>
                          <tr>
                            <td>วันที่ขอแบบ</td>
                            <td>{estimate.request_date}</td>
                          </tr>
                          <tr>
                            <td>สถานะ</td>
                            <td>{estimate.status}</td>
                          </tr>

                          { approve_comment ? (
                            <tr>
                            <td>เหตุผลในการอนุมัติ</td>
                            <td>{estimate.approve_comment}</td>
                          </tr>
                          ):("")}

                          { fab_upload_url ? (
                            <tr>
                            <td>ไฟล์ที่ลูกค้าอัพโหลด</td>
                            <td><a href={estimate.fab_upload_url} className="btn btn-primary" target="_blank">ดาวน์โหลดไฟล์</a></td>
                          </tr>
                          ):("")}
                           { design_upload_url ? (
                            <tr>
                            <td>ไฟล์แบบสินค้า</td>
                            <td><a href={estimate.design_upload_url} target="_blank" className="btn btn-primary">ดาวน์โหลดไฟล์</a></td>
                          </tr>
                          ):("")}
                           {/* { design_upload_by ? (
                            <tr>
                            <td>อัพโหลดโดย</td>
                            <td>{estimate.design_upload_by}</td>
                          </tr>
                          ):("")} */}
                           { quatation_upload_url ? (
                            <tr>
                            <td>ไฟล์ใบเสนอราคาสินค้า</td>
                            <td><a className="btn btn-primary" href={estimate.quatation_upload_url} target="_blank">ดาวน์โหลดไฟล์</a></td>
                          </tr>
                          ):("")}
                           {/* { quatation_upload_by ? (
                            <tr>
                            <td>อัพโหลดโดย</td>
                            <td>{estimate.quatation_upload_by}</td>
                          </tr>
                          ):("")} */}
                           { quatation_no ? (
                            <tr>
                            <td>หมายเลขใบเสนอราคา</td>
                            <td>{estimate.quatation_no}</td>
                          </tr>
                          ):("")}
                           { reject_comment ? (
                            <tr>
                            <td>เหตุผลในการปฎิเสธ</td>
                            <td>{estimate.reject_comment}</td>
                          </tr>
                          ):("")}
                           { reject_by ? (
                            <tr>
                            <td>ปฎิเสธโดย</td>
                            <td>{estimate.reject_by}</td>
                          </tr>
                          ):("")}
                           { cancel_comment ? (
                            <tr>
                            <td>เหตุผลในการยกเลิก</td>
                            <td>{estimate.cancel_comment}</td>
                          </tr>
                          ):("")}
                           { cancel_by ? (
                            <tr>
                            <td>ยกเลิกโดย</td>
                            <td>{estimate.cancel_by}</td>
                          </tr>
                          ):("")}
                        </tbody>
                      </table>
                      <div className="float-right">
                      <Link to={"/backend/specail-design"} className="btn btn-danger">
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

export default ViewSpecialDesign;
