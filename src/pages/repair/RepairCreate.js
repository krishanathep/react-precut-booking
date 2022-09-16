import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function RepairCreate() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Repair Create</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Repair Create</li>
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
                    <h5 className="m-0">Repair Create</h5>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="">Name :</label>
                            <input
                              type="name"
                              className="form-control"
                              placeholder="Please input data"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="">Type :</label>
                            <select className="form-control">
                              <option selected disabled>Please select data</option>
                              <option>Hardware</option>
                              <option>Software</option>
                              <option>Training</option>
                              <option>Maintanance</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="">Detail :</label>
                            <textarea
                              rows="5"
                              type="name"
                              className="form-control"
                              placeholder="Please input data"
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="">Date :</label>
                            <DatePicker
                              className="form-control"
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="name"
                              className="form-control"
                              placeholder="Repair name"
                              hidden
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="name"
                              className="form-control"
                              placeholder="Repair name"
                              hidden
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="float-right">
                            <input
                              type="submit"
                              className="btn btn-primary"
                              value="Submit"
                            />{" "}
                            <Link to="/repair" className="btn btn-danger">
                              Cancel
                            </Link>
                          </div>
                        </div>
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
