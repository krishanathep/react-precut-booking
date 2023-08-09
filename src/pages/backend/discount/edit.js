import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Edit = () => {
  const [user_name] = useState(
    JSON.parse(localStorage.getItem("name"))
  );
  return (
    <>
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Special discount edit</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Edit</li>
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
                  <h5 className="m-0">Special discount edit</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                  <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Create by</label>
                          <input
                            value={user_name}
                            type="text"
                            className="form-control"
                            placeholder="Please input data"
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">สถานะ</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Please input data"
                            value={'รับข้อมูลเข้าระบบ'}
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Prefsuite ID</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Please input data"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">ชื่อโครงการ</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Please input data"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">ประเภทงาน</label>
                          <select
                            className="form-control"
                            aria-label="Default select example"
                          >
                            <option selected>Please select</option>
                            <option value="บ้านเดีี่ยว">บ้านเดี่ยว</option>
                            <option value="โครงการ">โครงการ</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">แบบบบ้าน</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Please input data"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">ประเภทมาตรฐาน</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Please input data"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Revision</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Please input data"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">จำนวนสินค้า</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Please input data"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">รุ่นสินค้า</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Please input data"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">สีสินค้า</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Please input data"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">ตารางเมตร</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Please input data"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">ส่วนลดเดิม</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Please input data"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">ส่วนลดใหม่</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Please input data"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">หมายเหตุ</label>
                          <textarea
                            className="form-control"
                            name=""
                            id=""
                            cols="30"
                            rows="3"
                            placeholder="Please input data"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">PDF file</label>
                          <br />
                          <input type="file" />
                        </div>
                      </div>
                    </div>
                    <div className="float-right">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>{" "}
                      <Link to={"/backend/discount"} className="btn btn-danger">
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
  )
}

export default Edit