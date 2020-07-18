import React from "react";

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to={"/"} exact>
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/images">
              Images
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/blog">
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
