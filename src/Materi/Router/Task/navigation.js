import React from "react";
import { NavLink } from "react-router-dom";


function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-warning">
        <div className="container">
          <NavLink className="navbar-brand" to="/home">
            <h2> Web Studio </h2>
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/company">
                  <h5> Company </h5>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/artist">
                <h5> Artist </h5>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/community">
                <h5> Community </h5>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;