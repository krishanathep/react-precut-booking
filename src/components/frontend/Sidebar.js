import React, { useState, useEffect } from "react";
import { NavLink as Link } from "react-router-dom";

export default function Sidebar() {
  const token = localStorage.getItem("token");

  const role = JSON.parse(localStorage.getItem("role"));
  const form_url =
    "https://precutbooking.windsor.co.th/forms/orderform/post2form.php?Jmsi=checkonly&token=";
  const fabcode = JSON.parse(localStorage.getItem("code"));
  //const key = "checkonly"

  const [isadmin, setIsAdmin] = useState(false);
  const [isuser, setIsUser] = useState(false);
  const [isowner, setIsOwner] = useState(false);
  const [isestimate, setIsEstimate] = useState(false);
  const [issales, setIsSales] = useState(false)

  useEffect(() => {
    if (role === "admin") {
      setIsAdmin(true);
    } else if (role === "owner") {
      setIsOwner(true);
    } else if (role === "user") {
      setIsUser(true);
    } else if (role === "estimate") {
      setIsEstimate(true);
    } else if (role === "sales") {
      setIsSales(true)
    }
  }, []);

  if (!token) {
    window.location.href = "/";
  }

  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary sidebar-no-expand elevation-4">
        <Link to="/bookings" className="brand-link">
          <img
            src={process.env.PUBLIC_URL + "/assets/dist/img/AdminLTELogo.png"}
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
              {isadmin ? (
                <>
                  <li className="nav-header">MAIN MENU</li>
                  <li className="nav-item">
                    <Link to="/bookings" className="nav-link">
                      <i className="nav-icon fas fa-calendar"></i>
                      <p>ส่งตรวจแบบและสั่งผลิต</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/estimate" className="nav-link">
                      <i className="nav-icon fas fa-pencil-ruler"></i>
                      <p>ขอแบบและราคาสั่งผลิต</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      onClick={() => window.open(form_url + fabcode)}
                      className="nav-link"
                    >
                      <i className="nav-icon fas fa-clipboard-check"></i>
                      <p>ส่งตรวจแบบอย่างเดียว</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link to="/booking-status" className="nav-link">
                      <i className="nav-icon fas fa-tasks"></i>
                      <p>ตรวจสอบสถานะ</p>
                    </Link>
                  </li>
                  <li className="nav-header">ADMIN MENU</li>
                  <li className="nav-item">
                    <Link to="/backend/capacity" className="nav-link">
                      <i className="nav-icon fas fa-chart-pie"></i>
                      <p>จัดการปริมาณงาน</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/backend/estimate" className="nav-link">
                      <i className="nav-icon fas fa-chart-line"></i>
                      <p>สถานะแบบ/ราคาสั่งผลิต</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/backend/specail-design" className="nav-link">
                      <i className="nav-icon fas fa-drafting-compass"></i>
                      <p>จัดการแบบ/ราคาสั่งผลิต</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/backend/status" className="nav-link">
                      <i className="nav-icon fas fa-list-ul"></i>
                      <p>สถานะงานทั้งหมด</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/backend/users" className="nav-link">
                      <i className="nav-icon fas fa-users"></i>
                      <p>จัดการผู้ใช้ระบบ</p>
                    </Link>
                  </li>
                  <li class="nav-header">SALES MENU</li>
                  <li className="nav-item">
                    <Link to="/backend/discount" className="nav-link">
                    <i className="nav-icon fas fa-tags"></i>
                      <p>คูปองส่วนลดแบบพิเศษ</p>
                    </Link>
                  </li>
                </>
              ) : null}
              {isuser ? (
                <>
                  <li class="nav-header">MAIN MENU</li>
                  <li className="nav-item">
                    <Link to="/bookings" className="nav-link">
                      <i className="nav-icon fas fa-calendar"></i>
                      <p>ส่งตรวจแบบและสั่งผลิต</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/estimate" className="nav-link">
                      <i className="nav-icon fas fa-pencil-ruler"></i>
                      <p>ขอแบบและราคาสั่งผลิต</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#"
                      onClick={() => window.open(form_url + fabcode)}
                      className="nav-link"
                    >
                      <i className="nav-icon fas fa-clipboard-check"></i>
                      <p>ส่งตรวจแบบอย่างเดียว</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link to="/booking-status" className="nav-link">
                      <i className="nav-icon fas fa-tasks"></i>
                      <p>ตรวจสอบสถานะ</p>
                    </Link>
                  </li>
                </>
              ) : null}
              {isowner ? (
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
                      <p>สถานะงานทั้งหมด</p>
                    </Link>
                  </li>
                </>
              ) : null}
              {isestimate ? (
                <>
                  <li class="nav-header">MAIN MENU</li>
                  <li className="nav-item">
                    <Link to="/backend/specail-design" className="nav-link">
                      <i className="nav-icon fas fa-drafting-compass"></i>
                      <p>จัดการแบบ/ราคาสั่งผลิต</p>
                    </Link>
                  </li>
                </>
              ) : null}

                {issales ? (
                <>
                  <li class="nav-header">MAIN MENU</li>
                  <li className="nav-item">
                    <Link to="/backend/discount" className="nav-link">
                    <i className="nav-icon fas fa-tags"></i>
                      <p>คูปองส่วนลดแบบพิเศษ</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/backend/status" className="nav-link">
                    <i className="nav-icon fas fa-list-ul"></i>
                      <p>สถานะงานทั้งหมด</p>
                    </Link>
                  </li>
                </>
              ) : null}   
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
