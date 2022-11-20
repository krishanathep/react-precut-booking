import React, { useState, useEffect } from "react";
import { NavLink as Link } from "react-router-dom";

export default function Sidebar() {
  const token = localStorage.getItem("token");

  const role = JSON.parse(localStorage.getItem("role"));

  const [isadmin, setIsAdmin] = useState(false);
  const [isuser, setIsUser] = useState(false);
  const [isowner, setIsOwner] = useState(false);

  useEffect(() => {
    if (role === "admin") {
      setIsAdmin(true);
    } else if(role === "owner") {
      setIsOwner(true)
    } else if(role === "user") {
      setIsUser(true)
    }
  },[]);

  if (!token) {
    window.location.href = "/";
  }

  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary sidebar-no-expand elevation-4">
        <Link to="/bookings" className="brand-link">
          <img
            src={process.env.PUBLIC_URL+"/assets/dist/img/AdminLTELogo.png"}
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">Precut Booking</span>
        </Link>
        <div className="sidebar">
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
               {isadmin ? 
              <>
              <li class="nav-header">MAIN MENU</li>
              <li className="nav-item">
                <Link to="/bookings" className="nav-link">
                  <i className="nav-icon fas fa-calendar"></i>
                  <p>จองวันผลิตสินค้า</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/booking-status" className="nav-link">
                <i className="nav-icon fas fa-tasks"></i>
                  <p>ตรวจสอบสถานะ</p>
                </Link>
              </li>
              <li class="nav-header">ADMIN MENU</li>
              <li className="nav-item">
              <Link to="/backend/capacity" className="nav-link">
              <i className="nav-icon fas fa-chart-pie"></i>
                <p>จัดการปริมาณงาน</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/backend/status" className="nav-link">
              <i className="nav-icon fas fa-clipboard-check"></i>
                <p>จัดการสถานะงาน</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/backend/users" className="nav-link">
                <i className="nav-icon fas fa-users"></i>
                <p>จัดการผู้ใช้ระบบ</p>
              </Link>
            </li>
            </>
              : null} 
              {isuser ? 
              <>
              <li class="nav-header">MAIN MENU</li>
              <li className="nav-item">
                <Link to="/bookings" className="nav-link">
                  <i className="nav-icon fas fa-calendar"></i>
                  <p>จองวันผลิตสินค้า</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/booking-status" className="nav-link">
                <i className="nav-icon fas fa-tasks"></i>
                  <p>ตรวจสอบสถานะ</p>
                </Link>
              </li>
              </>
              : null}
              {isowner ? 
              <>
             <li class="nav-header">MAIN MENU</li>
             <li className="nav-item">
              <Link to="/backend/capacity" className="nav-link">
              <i className="nav-icon fas fa-chart-pie"></i>
                <p>จัดการปริมาณงาน</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/backend/status" className="nav-link">
              <i className="nav-icon fas fa-clipboard-check"></i>
                <p>จัดการสถานะงาน</p>
              </Link>
            </li>
              </>
              : null}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
