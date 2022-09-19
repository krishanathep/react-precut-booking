import React from 'react'
import { Link } from 'react-router-dom'

export default function BookingView() {
  return (
    <>
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Booking view</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">View</li>
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
                  <h5 className="m-0">Booking view</h5>
                </div>
                <div className="card-body">
                  <table className="table table-bordered">
                    {/* <tr>
                      <td>ID</td>
                      <td>1</td>
                    </tr> */}
                    <tr>
                      <td>Name</td>
                      <td>Test bokking name</td>
                    </tr>
                    <tr>
                      <td>Type</td>
                      <td>Test bokking type</td>
                    </tr>
                    <tr>
                      <td>Detail</td>
                      <td>Test bokking detail</td>
                    </tr>
                    <tr>
                      <td>Status</td>
                      <td>Test bokking status</td>
                    </tr>
                    <tr>
                      <td>Start date</td>
                      <td>10-10-2022</td>
                    </tr>
                    <tr>
                      <td>Stop date</td>
                      <td>20-10-2022</td>
                    </tr>
                  </table>
                  <div className='float-right mt-2'>
                  <Link to='/bookings' className='btn btn-danger'>Cancel</Link>
                  </div>
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
