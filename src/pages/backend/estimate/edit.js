import React,{useState,useEffect} from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";


function EditEstimateManagement() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const { id } = useParams()
  const navigate = useNavigate();

  const [estimate, setEstimate] = useState([]);
  const [uploadBy, setUploadBy] = useState('Krishanathep.J')

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

  useEffect(() => {
    getData();
  }, []);

  const onSubmit = async (data) => {  

    alert(JSON.stringify(data));
    
    const formData = new FormData()

    formData.append("file_upload", data.file[0])
    formData.append("design_upload_by", data.design_upload_by)
    formData.append("design_upload_url", data.design_upload_url)

    console.log(data)

    try {
      await axios
          .put(`${process.env.REACT_APP_API}/estimate-update/`+ id , formData)
          .then((res) => {
            alert("อัพเดทข้อมูลเรียบร้อยแล้ว");
            navigate("/backend/estimate");
          });
      } catch (error) {
        console.log(error);
      }
  
  }

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Design upload</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Design-upload</li>
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
                    <h5 className="m-0">อัพโหลดแบบ</h5>
                  </div>
                  <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-group">
                        <label htmlFor="">Upload by</label>
                        <input className='form-control' type="text" value={uploadBy} {...register("design_upload_by")}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="">Upload url</label>
                        <input className='form-control' type="text" {...register("design_upload_url")}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="">ไฟล์อัพโหลด</label>
                        <input className="form-control-file" type="file" {...register("file_upload")} />
                      </div>
                    <div className="float-right">
                        <input type="submit" className='btn btn-primary mr-1'/>
                        <Link to={"/backend/estimate"} className="btn btn-danger">
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
  )
}

export default EditEstimateManagement