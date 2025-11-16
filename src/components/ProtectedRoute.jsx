import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user")); // logged in user

  if (!user) {
    return <Navigate to="/" replace />; // redirect to landing page if not logged in
  }

  return children;
};

export default ProtectedRoute;
