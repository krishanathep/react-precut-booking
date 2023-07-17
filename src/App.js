import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
import BookingStatusView from "./pages/frontend/bookingStatus/statusView";
import Estimate from './pages/frontend/estimate'
import CreateEstimate from './pages/frontend/estimate/creatre'
import ViewEstimate from './pages/frontend/estimate/view'

//Black-end
import AdminNavbar from "./layouts/backend/WithNavbar";
import AdminDashboard from "./pages/backend/dashboard";
import AdminBookings from "./pages/backend/bookings";
import AdminUsers from "./pages/backend/users";
import AdminUsersCreate from "./pages/backend/users/usersCreate";
import AdminUsersEdit from "./pages/backend/users/usersEdit";
import AdminUsersPassword from "./pages/backend/users/userPassword";
import AdminCapacity from "./pages/backend/capacity";
import AdminCapacityUpload from "./pages/backend/capacity/CapacityUpload";
import AdminStatus from './pages/backend/status'
import AdminStatusView from './pages/backend/status/view'
import AdminEstimate from './pages/backend/estimate'
import AdminEstimateView from './pages/backend/estimate/view'
import AdminEstimateEdit from './pages/backend/estimate/edit'
import AdminSpecialDesign from './pages/backend/specialdesign'
import AdminSpecialDesignView from './pages/backend/specialdesign/view'

import SpecialDiscount from './pages/backend/discount'
import CreateSpecialDiscount from './pages/backend/discount/create'
import ViewSpecialDiscount from './pages/backend/discount/view'
import EditSpecialDiscount from './pages/backend/discount/edit'

// google analytics
import React, {useEffect} from 'react'
import ReactGA from 'react-ga';
const TRACKING_ID = "UA-251853401-1"; // OUR_TRACKING_ID

ReactGA.initialize(TRACKING_ID);

function App(props) {
  // google analytics
  useEffect(()=>{
    ReactGA.pageview(window.location.pathname + window.location.search)
  },[])

  return (
    <Router basename={'/th'}>
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
          <Route path="/booking-status/view/:id" element={<BookingStatusView />} />

          <Route path="/estimate" element={<Estimate/>} />
          <Route path="/estimate/create" element={<CreateEstimate/>} />
          <Route path="/estimate/view/:id" element={<ViewEstimate/>} />

          <Route path="/backend/estimate" element={<AdminEstimate/>} />
          <Route path="/backend/estimate/view/:id" element={<AdminEstimateView/>} />
          <Route path="/backend/estimate/edit/:id" element={<AdminEstimateEdit/>} />

          <Route path="/backend/specail-design" element={<AdminSpecialDesign/>} />
          <Route path="/backend/specail-design/view/:id" element={<AdminSpecialDesignView/>} />

          <Route path="/backend/dashboard" element={<AdminDashboard />} />
          <Route path="/backend/bookings" element={<AdminBookings />} />
          <Route path="/backend/users" element={<AdminUsers />} />
          <Route path="/backend/users/create" element={<AdminUsersCreate />} />
          <Route path="/backend/users/edit/:id" element={<AdminUsersEdit />} />
          <Route path="/backend/users/password" element={<AdminUsersPassword />} />

          <Route path="/backend/status" element={<AdminStatus />} />
          <Route path="/backend/status/view/:id" element={<AdminStatusView />} />

          <Route path="/backend/capacity" element={<AdminCapacity />} />
          <Route
            path="/backend/capacity/upload"
            element={<AdminCapacityUpload />}
          />

          <Route path="/backend/discount" element={<SpecialDiscount />} />
          <Route path="/backend/discount/create" element={<CreateSpecialDiscount />} />
          <Route path="/backend/discount/view/:id" element={<ViewSpecialDiscount />} />
          <Route path="/backend/discount/edit/:id" element={<EditSpecialDiscount />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
