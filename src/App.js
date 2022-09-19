import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import WithNavbar from "./layouts/WithNavbar";
import WithOutNavbar from './layouts/WithOutNavbar'
import Login from './pages/auth/login'
import './App.css';
import Dashboard from "./Dashboard";
import Repair from "./pages/repair";
import RepairCreate from "./pages/repair/RepairCreate";
import Users from './pages/users'
import Profile from "./pages/profile";
import Bookings from "./pages/bookings";
import BookingCreate from './pages/bookings/BookingCreate'
import BookingEdit from './pages/bookings/BookingEdit'
import BookingView from './pages/bookings/BookingView'


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<WithOutNavbar/>}>
          <Route path="/" element={<Login/>}/>
        </Route>
        <Route element={<WithNavbar/>}>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/repair" element={<Repair/>}/>
          <Route path="/repair/create" element={<RepairCreate/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/bookings" element={<Bookings/>}/>
          <Route path="/bookings/create" element={<BookingCreate/>}/>
          <Route path="/bookings/edit/:id" element={<BookingEdit/>}/>
          <Route path="/bookings/view/:id" element={<BookingView/>}/>
          <Route path="/profile" element={<Profile/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
