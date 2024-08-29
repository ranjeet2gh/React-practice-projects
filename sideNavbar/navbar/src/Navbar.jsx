
import { Outlet, Link } from "react-router-dom";
import React from 'react'
import './Navbar.css'; 
import  logo from './auslogo.jpg'; 

const Navbar = () => {
  return (<>
      <nav>
    <div className="sidenav">
      <div className="navbar-brand">
     
        <a href="/">
          <img src={logo} alt="Logo" className="logo" />
        </a>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
         
        <Link to="/jobsetup" className="nav-link " >Job Setup</Link>
        </li>
        <li className="nav-item">
          <Link to="/mareview" className="nav-link">Master Schedule Review</Link>
        </li>
        <li className="nav-item">
          <Link to="/sareview" className="nav-link">Shift Assignment Review</Link>
        </li>
        <li className="nav-item">
          <Link to="/rfdo" className="nav-link">RFDO</Link>
        </li>
        <li className="nav-item">
          <Link to="/ojt" className="nav-link">OJT Admin</Link>
        </li>
        <li className="nav-item">
          <Link to="/pipeline" className="nav-link">Hiring Pipeline</Link>
        </li>
        <li className="nav-item">
          <Link to="/ddeposit" className="nav-link">Direct Deposit</Link>
        </li>
        <li className="nav-item">
          <Link to="/taxform" className="nav-link">Tax Form</Link>
        </li>
        <li className="nav-item">
          <Link to="/perkspot" className="nav-link">Perk Spot</Link>
        </li>
        
      </ul>
    </div>
    </nav>
    <Outlet />
    </>
  );
};

export default Navbar;
