import { Outlet } from "react-router-dom";
import Navbar from "../../components/backend/Navbar";
import Sidebar from "../../components/backend/Sidebar";
import Footer from "../../components/backend/Footer";

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
