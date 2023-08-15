import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
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

    try {
      await axios
        .post("http://127.0.0.1:8000/api/import-discount", formData)
        .then((res) => {
          console.log(res.data.discount);
          alert("เพิ่มข้อมูลเรียบร้อยแล้ว");
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
                <h1 className="m-0">Special discount import file</h1>
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
                    <h5 className="m-0">Special discount import file</h5>
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
                          className="form-control-file"
                          type="file"
                          {...register("file_pdf", { required: true })}
                        />
                        {errors.file_pdf && (
                          <span className="text-danger">
                            This field is required
                          </span>
                        )}
                      </div>
                      <div className="form-group">
                        <label htmlFor="">Excel file</label>
                        <br />
                        <input
                          className="form-control-file"
                          type="file"
                          {...register("file_csv", { required: true })}
                        />
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
