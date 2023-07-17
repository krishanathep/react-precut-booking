import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function UsersEdit() {
  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Change Password</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Change password</li>
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
                    <h5 className="m-0">Change Password</h5>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <label htmlFor="old_password">Old Password</label>
                        <input type="password" className="form-control" placeholder="Old password" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="new_password">New Password</label>
                        <input type="password" className="form-control" placeholder="New password" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="c_password">Confirm Password</label>
                        <input type="password" className="form-control" placeholder="Confirm password" />
                      </div>
                      <div className="col-md-12 float-right">
                        <div className="float-right">
                          <button className="btn btn-primary">Submit</button>{" "}
                          <Link to="/backend/users" className="btn btn-danger">
                            Cancel
                          </Link>
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
