import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function EstimateCreate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const [fab_request_no, setFabNo] = useState("ES99999");
  const [status, setStatus] = useState("รอตรวจแบบ");
  const [fab_name, setFabName] = useState("Nawaplastic");

  const [color, setColor] = useState(false);
  const [mirror, setMirror] = useState(false);
  const [mirrorType, setMirrorType] = useState(false);
  const [mirrorSize, setMirrorSize] = useState(false);
  const [mullionType, setMullionType] = useState(false);
  const [mullionSize, setMullionSize] = useState(false);

  const [priduct_name, setProductName] = useState('')
  const [product_model, setProductModel] = useState('')

  const onSubmit = async (data) => {

    const formData = new FormData();

    formData.append("file", data.file[0]);
    formData.append("fab_request_no", data.fab_request_no);
    formData.append("status", data.status);
    formData.append("fab_name", data.fab_name);
    formData.append("product_name", data.product_name);
    formData.append("product_model", data.product_model);
    formData.append("product_color", data.product_color[0]);
    formData.append("mullion_type", data.mullion_type);
    formData.append("muliion_size", data.muliion_size);
    formData.append("have_mirror", data.have_mirror);
    formData.append("mirror_type_and_size", data.mirror_type_and_size);
    formData.append("mirror_edge_size", data.mirror_edge_size);
    formData.append("product_more_detail", data.product_more_detail);

    alert(JSON.stringify(data));

    try {
      await axios
        .post(`${process.env.REACT_APP_API}/estimate-create`, formData)
        .then((res) => {
          alert("เพิ่มข้อมูลเรียบร้อยแล้ว");
          navigate("/estimate");
        });

      // await axios
      //   .post(
      //     "https://prod-26.southeastasia.logic.azure.com/workflows/d1b281f91daf49b8aa4d2ff30b59c2b1/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=WSFHLZiMokCF5pS234ZNpTpKFB3zqDwwp81tt8YZt_I",
      //     formData
      //   )
      //   .then((res) => {
      //     console.log(res.status);
      //   });
    } catch (error) {
      console.log(error);
    }
  };

  // const showData = () => {
  //   if (register('product_name') === "ประเภท Set (เต็มบาน)"){
  //     alert('hello world')
  //   }
  // }

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Estimate Create</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Estimate-create</li>
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
                    <h5 className="m-0">ขอแบบและราคาสั่งผลิต</h5>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <input
                        hidden
                        type="text"
                        name="title"
                        className="form-control"
                        value={fab_request_no}
                        {...register("fab_request_no", { required: true })}
                      />
                      <input
                        hidden
                        type="text"
                        name="title"
                        value={status}
                        className="form-control"
                        {...register("status", { required: true })}
                      />
                      <input
                        hidden
                        type="text"
                        name="title"
                        value={fab_name}
                        className="form-control"
                        {...register("fab_name", { required: true })}
                      />
                      <div className="form-group">
                        <label htmlFor="">รายการสินค้า</label>
                        <select
                          className="form-control"
                          {...register("product_name")}
                        >
                          <option value={""}>Please Select</option>
                          <option value="ประเภท Set (เต็มบาน)">
                            ประเภท Set (เต็มบาน)
                          </option>
                          <option value="Profiles เส้นวงกบดัดโค้ง">
                            Profiles เส้นวงกบดัดโค้ง
                          </option>
                          <option value="Profiles เส้นลูกฟักดัดโค้ง">
                            Profiles เส้นลูกฟักดัดโค้ง
                          </option>
                          <option value="ซี่ลูกกรง 32X32">
                            ซี่ลูกกรง 32X32
                          </option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="">รุ่นของสินค้า</label>
                        <select
                          className="form-control"
                          {...register("product_model")}
                        >
                          <option value={""}>Please Select</option>
                          <option value="Signature">Signature</option>
                          <option value="Winsor Rightle">Winsor Right</option>
                          <option value="Mark II">Mark II</option>
                        </select>
                      </div>
                      {color ? (
                        <div className="form-group">
                          <label htmlFor="">สีของสินค้า</label>
                          <br />
                          <span>
                            <input
                              type="checkbox"
                              {...register("product_color", { required: true })}
                              value="สีขาว"
                            />{" "}
                            สีขาว
                          </span>{" "}
                          <span>
                            <input
                              type="checkbox"
                              {...register("product_color", { required: true })}
                              value="สีดำลามิเนต"
                            />{" "}
                            สีดำลามิเนต
                          </span>{" "}
                          <span>
                            <input
                              type="checkbox"
                              {...register("product_color", { required: true })}
                              value="สีวอลนัท"
                            />{" "}
                            สีวอลนัท
                          </span>{" "}
                          <span>
                            <input
                              type="checkbox"
                              {...register("product_color", { required: true })}
                              value="สีทีค"
                            />{" "}
                            สีทีค
                          </span>{" "}
                          <span>
                            <input
                              type="checkbox"
                              {...register("product_color", { required: true })}
                              value="สีเทา"
                            />{" "}
                            สีเทา
                          </span>{" "}
                          <span>
                            <input
                              type="checkbox"
                              {...register("product_color", { required: true })}
                              value="Other"
                            />{" "}
                            Other
                          </span>{" "}
                        </div>
                      ) : (
                        ""
                      )}

                      { mirror ? (
                        <div className="form-group">
                        <label htmlFor="">รูปแบบกระจก</label>
                        <br />
                        <span>
                          <input
                            type="radio"
                            {...register("have_mirror", { required: true })}
                            value="ใส่กระจก"
                          />{" "}
                          ใส่กระจก
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            {...register("have_mirror", { required: true })}
                            value="ไม่ใส่กระจก"
                          />{" "}
                          ไม่ใส่กระจก
                        </span>
                      </div>  
                      ):("")}
                      
                      { mirrorType ? (
                       <div className="form-group">
                       <label htmlFor="">ชนิดกระจกและความหนา(มม.)</label>
                       <input
                         type="text"
                         name="title"
                         className="form-control"
                         {...register("mirror_type_and_size", {
                           required: true,
                         })}
                       />
                      </div> 
                      ):("")}
                      
                      { mirrorSize ? (
                        <div className="form-group">
                        <label htmlFor="">ความหนาของกระจก(มม.)</label>
                        <input
                          type="text"
                          name="title"
                          className="form-control"
                          {...register("mirror_edge_size", { required: true })}
                        />
                      </div>
                      ):('')}

                      { mullionSize ? (
                        <div className="form-group">
                        <label htmlFor="">ขนาดของลูกฟัก</label>
                        <br />
                        <span>
                          <input
                            type="radio"
                            {...register("muliion_size", { required: true })}
                            value="20 มม"
                          />{" "}
                          20 มม.
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            {...register("muliion_size", { required: true })}
                            value="40 มม."
                          />{" "}
                          40 มม.
                        </span>
                      </div>
                      ):('')}

                      { mullionType ? (
                        <div className="form-group">
                        <label htmlFor="">ชนิดของลูกฟัก</label>
                        <br />
                        <span>
                          <input
                            type="radio"
                            {...register("mullion_type", { required: true })}
                            value="A"
                          />{" "}
                          A
                        </span>{" "}
                        <span>
                          <input
                            type="radio"
                            {...register("mullion_type", { required: true })}
                            value="B"
                          />{" "}
                          B
                        </span>
                      </div>
                      ):('')}

                      <div className="form-group">
                        <label htmlFor="">รายละเอียด/หมายเหตุ</label>
                        <textarea
                          className="form-control"
                          {...register("product_more_detail", {
                            required: true,
                          })}
                          cols="30"
                          rows="3"
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <label htmlFor="">ไฟล์อัพโหลด</label>
                        <input
                          className="form-control-file"
                          type="file"
                          {...register("file")}
                        />
                      </div>
                      <div className="float-right">
                        <input type="submit" className="btn btn-primary mr-1" />
                        <Link to={"/estimate"} className="btn btn-danger">
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
}

export default EstimateCreate;
