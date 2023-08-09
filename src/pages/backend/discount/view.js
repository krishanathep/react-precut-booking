import React,{useState,useEffect} from 'react'
import axios from "axios";
import { Link, useParams } from 'react-router-dom'
import Moment from "react-moment";

const View = () => {

  const { id } = useParams();
  const [discount, setDiscount] = useState([]);

  const fetchData = async () => {
    try {
      await axios.get('http://127.0.0.1:8000/api/discount/'+id)
        .then((res)=>{
          console.log(res.data)
          setDiscount(res.data.discount)
        })
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    fetchData()
  })

  return (
    <>
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Special discount view</h1>
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
                  <h5 className="m-0">Special discount view</h5>
                </div>
                <div className="card-body">
                  <div className="container">
                  <table className='table table-bordered mb-3'>
                    <tr>
                      <td width={"30%"}>Prefsuite ID</td>
                      <td>{ discount.prefsuit_id }</td>
                    </tr>
                    <tr>
                      <td>ชื่อโครงการ</td>
                      <td>{ discount.project_name }</td>
                    </tr>
                    <tr>
                      <td>ประเภทงาน</td>
                      <td>{ discount.project_type }</td>
                    </tr>
                    <tr>
                      <td>ประเภทมาตรฐาน</td>
                      <td>{ discount.standard_type }</td>
                    </tr>
                    <tr>
                      <td>แบบบ้าน</td>
                      <td>{ discount.design_name }</td>
                    </tr>
                    <tr>
                      <td>Revision</td>
                      <td>{ discount.revision }</td>
                    </tr>
                    <tr>
                      <td>ไฟล์อัพโหลด</td>
                      <td><a href={ 'http://127.0.0.1:8000/uploads/memo/pdf/'+discount.file_pdf } target='_blank'>{ discount.file_pdf }</a></td>
                    </tr>
                    <tr>
                      <td>จำนวนสินค้า</td>
                      <td>{ discount.amount }</td>
                    </tr>
                    <tr>
                      <td>รุ่นสินค้า</td>
                      <td>{ discount.series }</td>
                    </tr>
                    <tr>
                      <td>สีสินค้า</td>
                      <td>{ discount.color }</td>
                    </tr>
                    <tr>
                      <td>ตรางเมตร</td>
                      <td>{ discount.sqm }</td>
                    </tr>
                    <tr>
                      <td>ส่วนลดเดิม</td>
                      <td>{ discount.current_p_discount }%</td>
                    </tr>
                    <tr>
                      <td>ส่วนสดใหม่</td>
                      <td>{ discount.new_p_discount }%</td>
                    </tr>
                    <tr>
                      <td>สถานะสินค้า</td>
                      <td><span class="badge bg-success">{discount.status }</span></td>
                    </tr>
                    <tr>
                      <td>หมายเหตุ</td>
                      <td>{ discount.remark }</td>
                    </tr>
                    <tr>
                      <td>วันที่สร้างเอกสาร</td>
                      <td><Moment format="DD-MMMM-YYYY">{discount.created_at}</Moment></td>
                    </tr>
                    <tr>
                      <td>วันที่แก้ไขเอกสาร</td>
                      <td><Moment format="DD-MMMM-YYYY">{discount.updated_at}</Moment></td>
                    </tr>
                  </table>
                  <div className="float-right">
                  <Link to={'/backend/discount'} className='btn btn-danger'>Cancel</Link>
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
  )
}

export default View