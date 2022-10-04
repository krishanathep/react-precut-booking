import { Outlet } from "react-router-dom";
import Navbar from "../../components/frontend/Navbar";
import Sidebar from "../../components/frontend/Sidebar";
import Footer from "../../components/frontend/Footer";

export default function WithNavbar() {
  return (
    <div className="wrapper">
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </div>
  );
}
