import React,{useState,useEffect} from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import Moment from "react-moment";
import axios from 'axios'

const DiscountLogs = () => {

  const [discounts, setDiscounts] = useState([])

  const fetchData = async () => {
    axios.get('http://127.0.0.1:8000/api/log/discounts')
      .then((res)=>{
        console.log(res.data.discount_logs)
        setDiscounts(res.data.discount_logs)
      })
  }

useEffect(()=>{
  fetchData()
},[])

  const columns = [
    {
        dataField: "prefsuit_id",
        text: "Prefsuide ID",
    },
    {
        dataField: "event_type",
        text: "Event type",
            headerStyle: () => {
          return { width: "150px"};
        },
    },
    {
        dataField: "log_detail",
        text: "Logs detail",
    },
    {
      dataField: "user_name",
      text: "User name",
    },
    {
      dataField: "path",
      text: "File name",
    },
    {
      dataField: "created_at",
      text: "Created At",
      formatter: (row) => {
        return <Moment format="DD-MMMM-YYYY">{row.created_at}</Moment>;
      },
    },
  ];

  return (
    <>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Special discount logs</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">logs</li>
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
                    <h5 className="m-0">Special discount logs</h5>
                  </div>
                  <div className="card-body">
                    <BootstrapTable
                      keyField="id"
                      data={discounts}
                      columns={columns}
                      pagination={paginationFactory()}
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

export default DiscountLogs;
