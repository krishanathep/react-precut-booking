import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios'

const Create = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [user_name] = useState(
    JSON.parse(localStorage.getItem("name"))
  );

  const navigate = useNavigate()

  const onSubmit = async (data) => {
    
    const formData = new FormData();

    formData.append("file", data.file[0]);
    formData.append("prefsuit_id", data.prefsuit_id);
    formData.append("project_name", data.project_name);
    formData.append("project_type", data.project_type);
    formData.append("design_name", data.design_name);
    formData.append("standard_type", data.standard_type);
    formData.append("revision", data.revision);
    formData.append("amount", data.amount);
    formData.append("series", data.series);
    formData.append("color", data.color);
    formData.append("sqm", data.sqm);
    formData.append("current_p_discount", data.current_p_discount);
    formData.append("new_p_discount", data.new_p_discount);
    formData.append("status", data.status);
    formData.append("remark", data.remark);
    formData.append("upload_by", data.upload_by);

   try {
    await axios.post('http://127.0.0.1:8000/api/discount-create?svt=SBCI)sm!jdS^UEK8v!', formData)
      .then((res)=>{
        console.log(res.data.discount)
        alert("เพิ่มข้อมูลเรียบร้อยแล้ว");
        navigate("/backend/discount");
      })
   } catch(error) {
    console.log(error)
   }
  }

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Special discount create</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Create</li>
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
                    <h5 className="m-0">Special discount create</h5>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Create by</label>
                          <input
                            type="text"
                            className="form-control"
                            value={user_name}
                            {...register("upload_by", { required: true })}
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
                            {...register("status", { required: true })}
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
                            {...register("prefsuit_id", { required: true })}
                          />
                          {errors.prefsuit_id && (<span className="text-danger">This field is required</span>)}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">ชื่อโครงการ</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Please input data"
                            {...register("project_name", { required: true })}
                          />
                          {errors.project_name && (<span className="text-danger">This field is required</span>)}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">ประเภทงาน</label>
                          <select
                            className="form-control"
                            aria-label="Default select example"
                            {...register("project_type", { required: true })}
                          >
                            <option selected value="">Please select data</option>
                            <option value="บ้านเดีี่ยว">บ้านเดี่ยว</option>
                            <option value="โครงการ">โครงการ</option>
                          </select>
                          {errors.project_type && (<span className="text-danger">This field is required</span>)}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">แบบบ้าน</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Please input data"
                            {...register("design_name", { required: true })}
                          />
                          {errors.design_name && (<span className="text-danger">This field is required</span>)}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">ประเภทมาตรฐาน</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Please input data"
                            {...register("standard_type", { required: true })}
                          />
                          {errors.standard_type && (<span className="text-danger">This field is required</span>)}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">Revision</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Please input data"
                            {...register("revision", { required: true })}
                          />
                          {errors.revision && (<span className="text-danger">This field is required</span>)}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">จำนวนสินค้า</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Please input data"
                            {...register("amount", { required: true })}
                          />
                          {errors.amount && (<span className="text-danger">This field is required</span>)}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">รุ่นสินค้า</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Please input data"
                            {...register("series", { required: true })}
                          />
                          {errors.series && (<span className="text-danger">This field is required</span>)}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">สีสินค้า</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Please input data"
                            {...register("color", { required: true })}
                          />
                          {errors.color && (<span className="text-danger">This field is required</span>)}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">ตารางเมตร</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Please input data"
                            {...register("sqm", { required: true })}
                          />
                          {errors.sqm && (<span className="text-danger">This field is required</span>)}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">ส่วนลดเดิม</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Please input data"
                            {...register("current_p_discount", { required: true })}
                          />
                          {errors.current_p_discount && (<span className="text-danger">This field is required</span>)}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">ส่วนลดใหม่</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Please input data"
                            {...register("new_p_discount", { required: true })}
                          />
                          {errors.new_p_discount && (<span className="text-danger">This field is required</span>)}
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
                            {...register("remark", { required: true })}
                          ></textarea>
                          {errors.remark && (<span className="text-danger">This field is required</span>)}
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="">PDF file</label>
                          <br />
                          <input type="file" {...register("file", { required: true })} /><br/>
                          {errors.file && (<span className="text-danger">This field is required</span>)}
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
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
