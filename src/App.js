import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login";
import "./App.css";

//Front-end
import WithNavbar from "./layouts/frontend/WithNavbar";
import WithOutNavbar from "./layouts/frontend/WithOutNavbar";
//import Dashboard from "./pages/frontend/dashboard";
import Bookings from "./pages/frontend/bookings";
import BookingCreate from "./pages/frontend/bookings/BookingCreate";
import BookingEdit from "./pages/frontend/bookings/BookingEdit";
import BookingView from "./pages/frontend/bookings/BookingView";
import BookingStatus from "./pages/frontend/bookingStatus";

//Black-end
import AdminNavbar from "./layouts/backend/WithNavbar";
import AdminDashboard from "./pages/backend/dashboard";
import AdminBookings from './pages/backend/bookings'
import AdminUsers from "./pages/backend/users"
import AdminUsersCreate from "./pages/backend/users/usersCreate"
import AdminUsersEdit from "./pages/backend/users/usersEdit"
import AdminCapacity from './pages/backend/capacity'
import AdminCapacityUpload from './pages/backend/capacity/CapacityUpload'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<WithOutNavbar />}>
          <Route path="/" element={<Login />} />
        </Route>
        <Route element={<WithNavbar />}>
          {/* <Route path="/dashboard" element={<Dashboard />} />          */}
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/bookings/create/:id" element={<BookingCreate />} />
          <Route path="/bookings/edit/:id" element={<BookingEdit />} />
          <Route path="/bookings/view/:id" element={<BookingView />} />
          <Route path="/booking-status" element={<BookingStatus />} />
        </Route>
        <Route element={<AdminNavbar />}>
          <Route path="/backend/dashboard" element={<AdminDashboard />} />
          <Route path="/backend/bookings" element={<AdminBookings />} />
          <Route path="/backend/users" element={<AdminUsers />} />
          <Route path="/backend/users/create" element={<AdminUsersCreate />} />
          <Route path="/backend/users/edit/:id" element={<AdminUsersEdit />} />

          <Route path="/backend/capacity" element={<AdminCapacity/>} />
          <Route path="/backend/capacity/upload" element={<AdminCapacityUpload/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
