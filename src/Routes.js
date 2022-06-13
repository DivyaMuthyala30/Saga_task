import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Auth_login/Login';
import  Dashboard  from './Components/Dashboard/Dashboard';
import Profile from './Components/Profile';
import Private_routes from './Components/Private/Private_routes';
import Public_routes from'./Components/Public/Public_routes';

function AppRoutes() {
  const token= localStorage.getItem('token')
  
  return (
    <Router>
    
      <Routes>
      <Route path="/" element={<Login/>} />
          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="/login" element={<Public_routes><Login/></Public_routes>} />
          <Route path="/dashboard" element={<Private_routes><Dashboard/></Private_routes>} />
          <Route path="/dashboard/:id" element={<Private_routes><Profile/></Private_routes>} />
      </Routes>

    </Router>
  )
}
export default AppRoutes;