import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const url = "http://localhost:4000";

  // Function to check if the user is logged in (corrected)
  const isLoggedIn = () => {
    return localStorage.getItem("isAdminLoggedIn") === "true";
  };

  return (
    <div>
      <ToastContainer />
      <Routes>
        {/* Login route */}
        <Route path="/login" element={<Login url={url} />} />

        {/* Protected Routes */}
        <Route
          path="/add"
          element={
            isLoggedIn() ? (
              <>
                <Navbar />
                <hr />
                <div className="app-content">
                  <Sidebar />
                  <Add url={url} />
                </div>
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/list"
          element={
            isLoggedIn() ? (
              <>
                <Navbar />
                <hr />
                <div className="app-content">
                  <Sidebar />
                  <List url={url} />
                </div>
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/orders"
          element={
            isLoggedIn() ? (
              <>
                <Navbar />
                <hr />
                <div className="app-content">
                  <Sidebar />
                  <Orders url={url} />
                </div>
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Redirect to login if no route matches */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
};

export default App;
