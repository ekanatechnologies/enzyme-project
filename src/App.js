import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import "./assets/css/index.css";
import Login from "./dashboard/Login";
import Dashboard from "./dashboard/Dashboard";
import Activity from "./dashboard/Activity";
import Holdings from "./dashboard/Holdings";
import Methodology from "./dashboard/Methodology";
import Settings from "./dashboard/Settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/holdings" element={<Holdings />} />
        <Route path="/methodology" element={<Methodology />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
