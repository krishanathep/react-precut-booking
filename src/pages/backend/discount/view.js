import React,{useState,useEffect} from 'react'
import axios from "axios";
import { Link, useParams } from 'react-router-dom'
import Moment from "react-moment";

const View = () => {

  const { id } = useParams();
  const [discount, setDiscount] = useState([]);

  const fetchData = async () => {
    try {
      await axios.get(process.env.REACT_APP_API+'/discount/'+id)
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
  },[])

  return (
    <>
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">ระบบจัดการส่วนลดแบบพิเศษ (รายละเอียด)</h1>
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
                  <h5 className="m-0">ระบบจัดการส่วนลดแบบพิเศษ (รายละเอียด)</h5>
                </div>
                <div className="card-body">
                  <div className="container">
                  <table className='table table-bordered mb-3'>
                    <tr>
                      <td width={"30%"}>Prefsuite ID</td>
                      <td>{ discount.prefsuit_id }</td>
                    </tr>
                    <tr>
                      <td>แบบบ้าน</td>
                      <td>{ discount.design_name }</td>
                    </tr>
                    <tr>
                      <td>มาตรฐาน</td>
                      <td>{ discount.standard_type }</td>
                    </tr>
                    <tr>
                      <td>Revision</td>
                      <td>{ discount.revision }</td>
                    </tr>
                    <tr>
                      <td>ประเภทงาน</td>
                      <td>{ discount.project_type }</td>
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
                      <td>ระบบล็อค</td>
                      <td>{ discount.lock_system_type }</td>
                    </tr>
                    <tr>
                      <td>จำนวนชุด</td>
                      <td>{ discount.amount }</td>
                    </tr>
                    <tr>
                      <td>ตารางเมตร</td>
                      <td>{ discount.sqm }</td>
                    </tr>
                    <tr>
                      <td>ส่วนลดพิเศษ (%)</td>
                      <td>{ discount.new_p_discount }</td>
                    </tr>
                    <tr>
                      <td>หมายเหตุ</td>
                      <td>{discount.remark==="" ? 'N/A' : discount.remark} </td>
                    </tr>
                    <tr>
                      <td>ไฟล์อัพโหลด</td>
                      <td>
                        <a 
                          className='btn btn-primary btn-sm' 
                          href={ 'https://precutbooking.windsor.co.th/bookings_dev/laravel_api_auth/public/uploads/memo/pdf/'+discount.file_pdf } 
                          target='_blank'>ดาวน์โหลดไฟล์
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>อัพโหลดโดย</td>
                      <td>{ discount.upload_by }</td>
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