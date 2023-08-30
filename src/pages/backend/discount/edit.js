import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";

const Edit = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});

  const { id } = useParams();
  const navigate = useNavigate();

  const [user_name] = useState(JSON.parse(localStorage.getItem("name")));
  const [discount, setDiscount] = useState([]);

  const fetchData = async () => {
    try {
      await axios
        .get(process.env.REACT_APP_API+"/discount/" + id)
        .then((res) => {
          console.log(res.data.discount);
          setDiscount(res.data.discount);
          reset({
            prefsuit_id: res.data.discount.prefsuit_id,
            project_type: res.data.discount.project_type,
            design_name: res.data.discount.design_name,
            standard_type: res.data.discount.standard_type,
            revision: res.data.discount.revision,
            series: res.data.discount.series,
            color: res.data.discount.color,
            lock_system_type: res.data.discount.lock_system_type,
            amount: res.data.discount.amount,
            sqm: res.data.discount.sqm,
            new_p_discount: res.data.discount.new_p_discount,
            remark: res.data.discount.remark,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmit = async (data) => {

    const fd = new FormData();

    fd.append("_method", 'PUT');
    fd.append("file", data.file[0]);
    fd.append("prefsuit_id", data.prefsuit_id);
    fd.append("project_type", data.project_type);
    fd.append("design_name", data.design_name);
    fd.append("standard_type", data.standard_type);
    fd.append("revision", data.revision);
    fd.append("series", data.series);
    fd.append("color", data.color);
    fd.append("lock_system_type", data.lock_system_type);
    fd.append("amount", data.amount);
    fd.append("sqm", data.sqm);
    fd.append("new_p_discount", data.new_p_discount);
    fd.append("remark", data.remark);
    fd.append("upload_by", data.upload_by);
    fd.append("svt", "SBCI)sm!jdS^UEK8v!");
    
    try {
      await axios
        .post(process.env.REACT_APP_API+"/discount-update/" + id, fd)
        .then((res) => {
          console.log(res.data.discount);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'แก้ไขข้อมูลส่วนลดเรียบร้อยแล้ว',
            showConfirmButton: false,
            timer: 1500
          })
          navigate("/backend/discount");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">ระบบจัดการส่วนลดแบบพิเศษ (แก้ไขข้อมูล)</h1>
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
                    <h5 className="m-0">ระบบจัดการส่วนลดแบบพิเศษ (แก้ไขข้อมูล)</h5>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <input
                          type="text"
                          className="form-control"
                          value={user_name}
                          {...register("upload_by")}
                       hidden
                        />
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="">Prefsuite ID</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Please input data"
                              {...register("prefsuit_id", { required: true })}
                              readOnly
                            />
                            {errors.prefsuit_id && (
                              <span className="text-danger">
                                This field is required
                              </span>
                            )}
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
                            {errors.design_name && (
                              <span className="text-danger">
                                This field is required
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="">มาตรฐาน</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Please input data"
                              {...register("standard_type", { required: true })}
                            />
                            {errors.standard_type && (
                              <span className="text-danger">
                                This field is required
                              </span>
                            )}
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
                            {errors.revision && (
                              <span className="text-danger">
                                This field is required
                              </span>
                            )}
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
                              <option selected value="">
                                Please select data
                              </option>
                              <option value="บ้านเดี่ยว">บ้านเดี่ยว</option>
                              <option value="โครงการ">โครงการ</option>
                            </select>
                            {errors.project_type && (
                              <span className="text-danger">
                                This field is required
                              </span>
                            )}
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
                            {errors.series && (
                              <span className="text-danger">
                                This field is required
                              </span>
                            )}
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
                            {errors.color && (
                              <span className="text-danger">
                                This field is required
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="">ระบบล็อค</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Please input data"
                              {...register("lock_system_type", { required: true })}
                            />
                            {errors.lock_system_type && (
                              <span className="text-danger">
                                This field is required
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="">จำนวนชุด</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Please input data"
                              {...register("amount", { required: true })}
                            />
                            {errors.amount && (
                              <span className="text-danger">
                                This field is required
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="">ตารางเมตร</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Please input data"
                              {...register("sqm", { required: true })}
                            />
                            {errors.sqm && (
                              <span className="text-danger">
                                This field is required
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="">ส่วนลดพิเศษ</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Please input data"
                              {...register("new_p_discount", { required: true })}
                            />
                            {errors.new_p_discount && (
                              <span className="text-danger">
                                This field is required
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="">PDF file</label>
                            <br />
                            <input
                              type="file"
                              accept="application/pdf"
                              className="form-control-file border"
                              {...register("file")}
                            />
                            <span className="text-muted">*อัพโหลดได้เฉพาะไฟล์ PDF เท่านั้น</span>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="">หมายเหตุ</label>
                            <textarea
                              className="form-control"
                              cols="30"
                              rows="3"
                              placeholder="Please input data"
                              {...register("remark", { required: true })}
                            ></textarea>
                            {errors.remark && (
                              <span className="text-danger">
                                This field is required
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="float-right">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>{" "}
                        <Link
                          to={"/backend/discount"}
                          className="btn btn-danger"
                        >
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

export default Edit;
