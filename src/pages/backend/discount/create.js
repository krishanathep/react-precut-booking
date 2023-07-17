import React from 'react'
import { Link } from 'react-router-dom'

const Create = () => {
  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Create special discount</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Create</li>
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
                    <h5 className="m-0">Create special discount</h5>
                  </div>
                  <div className="card-body">
                      <form>
                        <div className="form-group">
                          <label htmlFor="">Prefsuite ID</label>
                          <input type="text" className='form-control' placeholder='Please input data' />
                        </div>
                        <div className="form-group">
                          <label htmlFor="">ชื่อลูกค้า</label>
                          <input type="text" className='form-control' placeholder='Please input data' />
                        </div>
                        <div className="form-group">
                          <label htmlFor="">ชื่อโครงการ</label>
                          <input type="text" className='form-control' placeholder='Please input data' />
                        </div>
                        <div className="form-group">
                          <label htmlFor="">วันที่เพิ่มเอกสาร</label>
                          <input type="text" className='form-control' placeholder='Please input data' />
                        </div>
                        <div className="form-group">
                          <label htmlFor="">สถานะ</label>
                          <input type="text" className='form-control' placeholder='Please input data' />
                        </div>
                        <div className="form-group">
                          <label htmlFor="">ไฟล์อัพโหลด</label><br/>
                          <input type="file" />
                        </div>
                      </form>
                    <div className="float-right">
                    <button type='submit' className='btn btn-primary'>Submit</button>{' '}
                    <Link to={'/backend/discount'} className='btn btn-danger'>Cancel</Link>
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

export default Create