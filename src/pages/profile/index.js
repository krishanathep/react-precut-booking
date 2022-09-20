import React from "react";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Profile</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Profile</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="card card-primary card-outline">
                  <div className="card-header">
                    <h5 className="m-0">Profile</h5>
                  </div>
                  <div className="card-body">
                    <div className="card-body box-profile">
                      <div className="text-center">
                        <img
                          className="profile-user-img img-fluid img-circle"
                          src={user.avatar}
                          alt="User profile picture"
                        />
                      </div>
                      <h3 className="profile-username text-center">
                        {user.fname}{' '}{user.lname}
                      </h3>
                      <p className="text-muted text-center">{user.email}</p>
                      <ul className="list-group list-group-unbordered mb-3">
                        <li className="list-group-item">
                          <b>Process</b> <a class="float-right">10</a>
                        </li>
                        <li className="list-group-item">
                          <b>Finish</b> <a class="float-right">8</a>
                        </li>
                        <li className="list-group-item">
                          <b>Cancel</b> <a class="float-right">2</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card card-primary card-outline">
                  <div className="card-header">
                    <h5 className="m-0">Company</h5>
                  </div>
                  <div className="card-body">
                    <strong>
                      <i className="fas fa-book mr-1"></i> Education
                    </strong>
                    <p className="text-muted">
                      B.S. in Computer Science from the University of Tennessee
                      at Knoxville
                    </p>
                    <hr />
                    <strong>
                      <i className="fas fa-map-marker-alt mr-1"></i> Location
                    </strong>
                    <p className="text-muted">Malibu, California</p>
                    <hr />
                    <strong>
                      <i className="fas fa-pencil-alt mr-1"></i> Skills
                    </strong>
                    <p className="text-muted">
                      <span className="tag tag-danger">UI Design</span>
                      <span className="tag tag-success">Coding</span>
                      <span className="tag tag-info">Javascript</span>
                      <span className="tag tag-warning">PHP</span>
                      <span className="tag tag-primary">Node.js</span>
                    </p>
                    <hr />
                    <strong>
                      <i className="far fa-file-alt mr-1"></i> Notes
                    </strong>
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Lorem ipsum dolor sit amet, consectetur.
                      Lorem ipsum dolor sit amet.
                    </p>
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
