import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavTabs.css"

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg border-bottom border-light">
            <h1><span className="navbar-brand mb-3 ml-3">Brandon's Professional Profile</span></h1>
            <div className="navbar-collapse" id="navbarSupportedContent">
    <ul className="nav navbar-nav nav-flex-icons ml-auto">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>About</Link>
      </li>
      <li className="nav-item">
        <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>Contact</Link>
      </li>
    </ul>
    </div>
    </nav>
  );
}

export default NavTabs;