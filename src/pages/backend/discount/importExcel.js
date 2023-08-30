import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";

const ImportFile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [user_name] = useState(JSON.parse(localStorage.getItem("name")));

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append("file_pdf", data.file_pdf[0]);
    formData.append("file_csv", data.file_csv[0]);
    formData.append("upload_by", data.upload_by);
    formData.append("svt", "SBCI)sm!jdS^UEK8v!");

    try {
      await axios
        .post(process.env.REACT_APP_API+"/import-discount", formData)
        .then((res) => {
          console.log(res.data.discount);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'เพิ่มข้อมูลส่วนลดเรียบร้อยแล้ว',
            showConfirmButton: false,
            timer: 1500
          })
          navigate("/backend/discount");
        });
    } catch (error) {
      console.log(error.response.data.error);
      Swal.fire({
        icon: 'error',
        title: 'ข้อมูลไม่ถูกต้อง',
        text: error.response.data.error,
      })
    }
  };

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">ระบบจัดการส่วนลดแบบพิเศษ (นำเข้าไฟล์)</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Import file</li>
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
                    <h5 className="m-0">ระบบจัดการส่วนลดแบบพิเศษ (นำเข้าไฟล์)</h5>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input
                        type="text"
                        className="form-control"
                        value={user_name}
                        {...register("upload_by")}
                        hidden
                      />
                      <div className="form-group">
                        <label htmlFor="">PDF file</label>
                        <br />
                        <input
                          className="form-control-file border"
                          type="file"
                          accept="application/pdf"
                          {...register("file_pdf", { required: true })}
                        />
                        <span className="text-muted">*อัพโหลดได้เฉพาะไฟล์ PDF เท่านั้น</span><br/>
                        {errors.file_pdf && (
                          <span className="text-danger">
                            This field is required
                          </span>
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="">CSV file</label>
                        <br />
                        <input
                          className="form-control-file border"
                          type="file"
                          accept="text/csv"
                          {...register("file_csv", { required: true })}
                        />
                        <span 
                          className="text-muted">*อัพโหลดได้เฉพาะไฟล์ CSV เท่านั้น <a href="https://precutbooking.windsor.co.th/bookings_dev/laravel_api_auth/public/download/Template_special_discount.xlsx">ดาวน์โหลดเท็มเพลต CSV</a></span><br/>
                        {errors.file_csv && (
                          <span className="text-danger">
                            This field is required
                          </span>
                        )}
                      </div>
                      <div className="float-right">
                        <input
                          className="btn btn-primary"
                          value={"Submit"}
                          type="submit"
                        />{" "}
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

export default ImportFile;
