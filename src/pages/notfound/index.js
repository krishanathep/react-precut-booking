import React from "react";
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">404 Error Page</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">404 Error Page</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div class="error-page mt-5">

                  <h4 class="headline text-warning"> 404 </h4>

                  <div class="error-content">
                    <h3>
                      <i class="fas fa-exclamation-triangle text-warning"></i>{" "}
                      Oops! Page not found.
                    </h3>
                    <p>
                      We could not find the page you were looking for.
                      Meanwhile, you may{" "}
                      <Link to='/bookings'>return to bookings</Link>
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
