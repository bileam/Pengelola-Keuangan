import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import Sidebar from "./Pages/Sidebar";
import Login from "./Pages/Login";
import ProtectedRoute from "./Routes/ProtectRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Sidebar />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
