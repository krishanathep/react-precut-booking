import React from "react";
import { Link } from "react-router-dom";

const importExcel = () => {
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
                    <form>
                      <div className="form-group">
                        <label htmlFor="">PDF file</label>
                        <br />
                        <input className="form-control-file" type="file" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="">Excel file</label>
                        <br />
                        <input className="form-control-file" type="file" />
                      </div>
                      <div className="float-right">
                        <input className="btn btn-primary" value={'Submit'} type="submit" />{' '}
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

export default importExcel;
