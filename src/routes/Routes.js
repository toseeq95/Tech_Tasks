import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";

function AppRoutes() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <Router>
      <Routes>
        <Route
          path="/home"
          element={isLoggedIn === "true" ? <Home /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
