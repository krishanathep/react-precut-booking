import React from "react";
//import { Bar, Doughnut } from "react-chartjs-2";
//import Chart from "chart.js/auto";

export default function Dashboard() {
  // const dataDoughnut = {
  //   labels: ["Finish", "Waiting","Cancel"],
  //   datasets: [
  //     {
  //       data: [1000, 800, 200],
  //       backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
  //       hoverBackgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
  //     },
  //   ],
  // };

  // const dataBar = {
  //   labels: [
  //     "January",
  //     "Fabruary",
  //     "March",
  //     "April",
  //     "May",
  //     "June",
  //     "July",
  //     "August",
  //     "September",
  //     "October",
  //     "November",
  //     "December",
  //   ],

  //   datasets: [
  //     {
  //       label: "# of Bookings",
  //       data: [12, 19, 5, 9, 8, 6, 12, 19, 7, 5, 10, 19],
  //       backgroundColor: [
  //         "rgba(54, 162, 235, 1)",
  //         // "rgba(54, 162, 235, 0.2)",
  //         // "rgba(255, 206, 86, 0.2)",
  //         // "rgba(75, 192, 192, 0.2)",
  //         // "rgba(153, 102, 255, 0.2)",
  //         // "rgba(255, 159, 64, 0.2)",
  //         // "rgba(255, 99, 132, 0.2)",
  //         // "rgba(54, 162, 235, 0.2)",
  //         // "rgba(255, 206, 86, 0.2)",
  //         // "rgba(75, 192, 192, 0.2)",
  //         // "rgba(153, 102, 255, 0.2)",
  //         // "rgba(255, 159, 64, 0.2)",
  //       ],
  //       // borderColor: [
  //       //   // "rgba(255, 99, 132, 1)",
  //       //   "rgba(54, 162, 235, 1)",
  //       //   // "rgba(255, 206, 86, 1)",
  //       //   // "rgba(75, 192, 192, 1)",
  //       //   // "rgba(153, 102, 255, 1)",
  //       //   // "rgba(255, 159, 64, 1)",
  //       //   // "rgba(255, 99, 132, 1)",
  //       //   // "rgba(54, 162, 235, 1)",
  //       //   // "rgba(255, 206, 86, 1)",
  //       //   // "rgba(75, 192, 192, 1)",
  //       //   // "rgba(153, 102, 255, 1)",
  //       //   // "rgba(255, 159, 64, 1)",
  //       // ],
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  return (
    <>
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Dashboard</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                {/* <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li> */}
                <li className="breadcrumb-item active">Home</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="row">
          <div className="col-md-3">
            <div className="info-box">
              <span className="info-box-icon bg-primary elevation-1">
                <i className="fas fa-calendar-alt"></i>
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Booking</span>
                <span className="info-box-number">20</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="info-box">
              <span className="info-box-icon bg-primary elevation-1">
                <i className="fas fa-clipboard-check"></i>
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Finish</span>
                <span className="info-box-number">10</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="info-box">
              <span className="info-box-icon text-white bg-primary elevation-1">
              <i className="fas fa-users-cog"></i>
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Process</span>
                <span className="info-box-number">8</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="info-box">
              <span className="info-box-icon bg-primary elevation-1">
              <i className="fas fa-power-off"></i>
              </span>
              <div className="info-box-content">
                <span className="info-box-text">Cancel</span>
                <span className="info-box-number">2</span>
              </div>
            </div>
          </div>
          {/* <div className="col-md-6">
            <div className="card card-primary card-outline">
              <h5 className="card-header">Bookings bar chart</h5>
              <div className="card-body">
                <Bar
                  data={dataBar}
                  width={400}
                  height={200}
                  options={{
                    maintainAspectRatio: false,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card card-primary card-outline">
              <h5 className="card-header">Bookings doughnut chart</h5>
              <div className="card-body">
                <Doughnut data={dataDoughnut} width={400} height={200} options={{
                    maintainAspectRatio: false,
                  }} />
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  </>
  );
}
