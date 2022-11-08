import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";

export default function Sidebar() {
  const token = localStorage.getItem("token");
  
  if (!token) {
    window.location.href = "/";
  }

  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary sidebar-no-expand elevation-4">
        <Link to="/dashboard" className="brand-link">
          <img
            src="/assets/dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">Admin-PBS</span>
        </Link>
        <div className="sidebar">
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item">
                <Link to="/backend/capacity" className="nav-link">
                  <i className="nav-icon fas fa-calendar"></i>
                  <p>Capacity</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
