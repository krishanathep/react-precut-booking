import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
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
        .get("http://127.0.0.1:8000/api/discount/" + id)
        .then((res) => {
          console.log(res.data.discount);
          setDiscount(res.data.discount);
          reset({
            prefsuit_id: res.data.discount.prefsuit_id,
            project_type: res.data.discount.project_type,
            design_name: res.data.discount.design_name,
            standard_type: res.data.discount.standard_type,
            revision: res.data.discount.revision,
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
    fd.append("remark", data.remark);
    fd.append("upload_by", data.upload_by);
    
    try {
      await axios
        .post("http://127.0.0.1:8000/api/discount-update/" + id, fd)
        .then((res) => {
          console.log(res.data.discount);
          alert("แก้ไขข้อมูลเรียบร้อยแล้ว");
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <input
                          type="text"
                          className="form-control"
                          value={user_name}
                          {...register("upload_by")}
                       hidden
                        />
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="">Prefsuite ID</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Please input data"
                              {...register("prefsuit_id", { required: true })}
                            />
                            {errors.prefsuit_id && (
                              <span className="text-danger">
                                This field is required
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="col-md-12">
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
                              <option value="บ้านเดีี่ยว">บ้านเดี่ยว</option>
                              <option value="โครงการ">โครงการ</option>
                            </select>
                            {errors.project_type && (
                              <span className="text-danger">
                                This field is required
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="col-md-12">
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
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="">ประเภทมาตรฐาน</label>
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
                        <div className="col-md-12">
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
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="">PDF file</label>
                            <br />
                            <input
                              type="file"
                              {...register("file")}
                            />
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
