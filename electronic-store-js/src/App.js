import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import HomeRoute from "./routes/homeRoute";
import AdminDashboard from "./routes/adminRoute";
import NotFoundRoute from "./routes/notFoundRoute";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/admin" element={<AdminDashboard/>} />
        <Route path="*" element={<NotFoundRoute />} />
        {/* <Route path="*" element={<NotFoundRoute />} /> */}
      </Routes>
    </Router>
  );
}

export default App;