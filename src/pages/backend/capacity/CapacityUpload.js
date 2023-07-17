import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function CapactiyUpload() {

  const navigate = useNavigate()

  const [selectedFile, setSelectedFile] = useState();
  //const [isSelected, setIsSelected] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    //setIsSelected(true);
  };

  const handleSubmission = () => {

    if(!selectedFile){
      Swal.fire({
        title: "Oops...",
        text: "Please Select File for Import",
        icon: "error",
        confirmButtonText: "OK",
        timer: 3000
      });
      return
    }

    if(selectedFile.type != "text/csv"){
      Swal.fire({
        title: "Oops...",
        text: "Please Select CSV File for Import",
        icon: "error",
        confirmButtonText: "OK",
        timer: 3000
      });
      return
    }

    const formData = new FormData();

		formData.append('file', selectedFile);

		fetch(
			'https://precutbooking.windsor.co.th/bookings/laravel_api_auth/public/api/upload-capacity',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				console.log('Success:', result);
        Swal.fire({
          title: "Successfully",
          text: "File imported to Successfully",
          icon: "success",
          confirmButtonText: "OK",
          timer: 3000
        });
			})
			.catch((errors) => {
        Swal.fire({
          title: "Oops...",
          text: "พบข้อผิดพลาดกรุณาตรวจสอบไฟล์ใหม่อีกครั้ง",
          icon: "error",
          confirmButtonText: "OK",
          //timer: 3000
        });
        return
			});

      navigate('/backend/capacity')
	};


  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Capacity Import</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Capacity import</li>
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
                    <h5 className="m-0">Capacity import</h5>
                  </div>
                  <div className="card-body">
                      {/* <div className="form-group">
                        <input
                        name="username"
                          type="text"
                          className="form-control"
                          value={username}
                        />
                      </div> */}
                      <div className="form-group">
                        <label htmlFor="">File import</label>
                        <br />
                        <input
                          name="file"
                          type="file" 
                          accept="text/csv"
                          className="form-control-file border"
                          onChange={changeHandler}
                        />
                        {/* {isSelected ? (
                          <div className="mt-2">
                            <p>Filename: {selectedFile.name}</p>
                            <p>Filetype: {selectedFile.type}</p>
                            <p>Size in bytes: {selectedFile.size}</p>
                            <p>
                              lastModifiedDate:{" "}
                              {selectedFile.lastModifiedDate.toLocaleDateString()}
                            </p>
                          </div>
                        ) : (
                          <div className="mt-2">
                            <p>Select a file to show details</p>
                          </div>
                        )} */}
                      </div>
                      <div className="float-right">
                      <button
                        onClick={handleSubmission}
                        className="btn btn-primary"
                      >
                        Submit
                      </button>{' '}
                      <Link to="/backend/capacity" className="btn btn-danger">
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
  );
}
