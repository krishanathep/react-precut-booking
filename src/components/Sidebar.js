import React from 'react'
import { NavLink as Link } from "react-router-dom";

export default function Sidebar() {

  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("accessToken");

  if (!token) {
    window.location.href = "/";
  }

  return (
    <>
    <aside className="main-sidebar sidebar-dark-primary sidebar-no-expand elevation-4">
      <Link to='/dashboard' className="brand-link">
        <img
          src="/assets/dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: ".8" }}
        />
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </Link>
      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src={user.avatar}
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <a href="#" className="d-block">
              {user.email}
            </a>
          </div>
        </div>
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt" />
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/bookings" className="nav-link">
              <i className="nav-icon fas fa-calendar"></i>
                <p>Bookings</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-link">
              <i className="nav-icon fas fa-user"></i>
                <p>Profile</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
    </>
  )
}
