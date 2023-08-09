import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import axios from 'axios'

const Discount = () => {
  const [discounts,setDiscounts] = useState([])

  const getData = async () => {
    await axios.get('http://127.0.0.1:8000/api/discounts')
      .then((res)=>{
        console.log(res.data)
        setDiscounts(res.data.discounts)
      })
  }

  useEffect(()=>{
    getData()
  },[])

  const columns = [
    {
      dataField: "prefsuit_id",
      text: "Prefsuite ID",
      sort: true,
      headerStyle: (colum, colIndex) => {
        return { width: "150px" };
      },
    },
    {
      dataField: "project_name",
      text: "แบบบ้าน",
      sort: true,
    },
    {
      dataField: "project_type",
      text: "ประเภทงาน",
      sort: true,
    },
    {
      dataField: "revision",
      text: "Revision",
      sort: true,
    },
    {
      dataField: "amount",
      text: "จำนวน",
      sort: true,
      headerStyle: (colum, colIndex) => {
        return { width: "100px" };
      },
    },
    {
      dataField: "created_at",
      text: "วันที่เพิ่มเอกสาร",
      sort: true,
      formatter: (cellContent, row) => {
        return <Moment format="DD-MMMM-YYYY">{row.created_at}</Moment>;
      },
    },
    // {
    //   dataField: "file_pdf",
    //   text: "ไฟล์ดาวน์โหลด",
    //   formatter: fileDownload,
    //   sort: true,
    // },
    // {
    //   dataField: "status",
    //   text: "สถานะ",
    //   sort: true,
    //   headerStyle: (colum, colIndex) => {
    //     return { width: "100px" };
    //   },
    // },
    {
      dataField: "actions",
      text: "Actions",
      align: "center",
      formatter: actionButton,
    },
  ];

  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      {" "}
      Showing {from} to {to} of {size} Results
    </span>
  );

  const options = {
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
  };

  function actionButton(cell, row, rowIndex, formatExtraData) {
    return (
      <>
        <Link to={'/backend/discount/view/'+ row.id} className="btn btn-info"><i className="fas fa-eye"></i></Link>{" "}
        <Link to={'/backend/discount/edit/'+ row.id} className="btn btn-primary"><i className="fas fa-edit"></i></Link>{" "}
        <button onClick={()=>deleteSubmit()} className="btn btn-danger"><i className="fas fa-trash"></i></button>
      </>
    );
  }

  function fileDownload(cell, row, rowIndex, formatExtraData) {
    return (
      <>
        <a href={'http://127.0.0.1:8000/uploads/memo/pdf/'+row.file_pdf} target="_blank">{row.file_pdf}</a>
      </>
    );
  }

  const deleteSubmit =()=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Special discount list</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">List</li>
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
                    <h5 className="m-0">Special discount list</h5>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="float-right mb-2">
                          <Link
                            className="btn btn-primary"
                            to={"/backend/discount/create"}
                          >
                            <i className="fas fa-plus"></i> ส่วนลดพิเศษ
                          </Link>{' '}
                          <Link
                            className="btn btn-success"
                            to={"/backend/discount/import"}
                          >
                            <i className="fas fa-file-excel"></i> นำเข้าไฟล์
                          </Link>
                        </div>
                      </div>
                    </div>
                    <BootstrapTable
                      keyField="id"
                      data={discounts}
                      columns={columns}
                      pagination={paginationFactory(options)}
                      noDataIndication="ไม่พบข้อมูล"
                    />
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

export default Discount;
