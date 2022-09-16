import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import WithNavbar from "./layouts/WithNavbar";
import WithOutNavbar from './layouts/WithOutNavbar'
import Login from './pages/auth/login'
import Dashboard from "./Dashboard";
import Repair from "./pages/repair";
import RepairCreate from "./pages/repair/RepairCreate";
import Users from './pages/users'
import './App.css';

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
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
