import React,{useState} from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BookingEdit() {
  const [startDate, setStartDate] = useState(new Date());
  const [stopDate, setStopDate] = useState(new Date());
  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Booking edit</h1>
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
                  <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="name">Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Please input data"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="">Type :</label>
                          <select className="form-control">
                            <option selected disabled>
                              Please select type
                            </option>
                            <option>Hardware</option>
                            <option>Software</option>
                            <option>Training</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="">Detail :</label>
                          <textarea
                            rows="3"
                            type="name"
                            className="form-control"
                            placeholder="Please input data"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="start_date">Start date</label>
                          <DatePicker
                            className="form-control"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="stop_date">Stop date</label>
                          <DatePicker
                            className="form-control"
                            selected={stopDate}
                            onChange={(date) => setStopDate(date)}
                          />
                        </div>
                      </div>
                      <div className="col-md-12 float-right">
                        <div className="float-right">
                          <button className="btn btn-primary">Submit</button>{" "}
                          <Link to="/bookings" className="btn btn-danger">
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
