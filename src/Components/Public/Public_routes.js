import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function Public_routes(props) {
    const hasToken = localStorage.getItem("token");
   
  
    if (hasToken) {
      return <Navigate to="/dashboard"  replace />;
    }
  
    return props.children;
}

export default Public_routes;