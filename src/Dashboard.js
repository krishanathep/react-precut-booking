import React from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

export default function Dashboard() {
  const dataDoughnut = {
    labels: ["Repair", "Finish", "Waiting"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const dataBar = {
    labels: [
      "January",
      "Fabruary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],

    datasets: [
      {
        label: "# of Repair",
        data: [12, 19, 5, 9, 8, 6, 12, 19, 7, 5, 10, 19],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

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
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="row">
          <div className="col-md-3">
            <div class="info-box">
              <span class="info-box-icon bg-primary elevation-1">
                <i class="fas fa-users-cog"></i>
              </span>
              <div class="info-box-content">
                <span class="info-box-text">Repair</span>
                <span class="info-box-number">20</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="info-box">
              <span class="info-box-icon bg-primary elevation-1">
                <i class="fas fa-clipboard-check"></i>
              </span>
              <div class="info-box-content">
                <span class="info-box-text">Finish</span>
                <span class="info-box-number">10</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="info-box">
              <span class="info-box-icon bg-primary elevation-1">
                <i class="far fa-clock"></i>
              </span>
              <div class="info-box-content">
                <span class="info-box-text">Waiting</span>
                <span class="info-box-number">10</span>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="info-box">
              <span class="info-box-icon bg-primary elevation-1">
                <i class="fas fa-users"></i>
              </span>
              <div class="info-box-content">
                <span class="info-box-text">Users</span>
                <span class="info-box-number">200</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <h5 className="card-header">Reair bar chart</h5>
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
            <div className="card">
              <h5 className="card-header">Repair doughnut chart</h5>
              <div className="card-body">
                <Doughnut data={dataDoughnut} width={400} height={200} options={{
                    maintainAspectRatio: false,
                  }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
  );
}
