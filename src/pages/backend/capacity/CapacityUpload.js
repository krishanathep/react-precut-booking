import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CapactiyUpload() {
    const [username, setUserName] = useState(JSON.parse(localStorage.getItem("name")))
  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Capacity Upload</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Capacity-upload</li>
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
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <input
                        name="username"
                          type="text"
                          className="form-control"
                          value={username}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">Upload :</label>
                        <br />
                        <input
                          type="file"
                          className="form-control-file border"
                        />
                      </div>
                      <input
                        type="submit"
                        className="btn btn-primary"
                        value="Submit"
                      />{" "}
                      <Link to="/backend/capacity" className="btn btn-danger">
                        Cancel
                      </Link>
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
