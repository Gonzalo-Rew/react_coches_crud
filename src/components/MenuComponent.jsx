import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class MenuComponent extends Component {
  render() {
    return (
      <nav className="topbar">
        <div className="topbar__inner">
          <NavLink to="/" className="brand">
            <span className="brand__mark">C</span>
            <span>Coches <em>Studio</em></span>
          </NavLink>
          <div className="topbar__links">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link nav-link--active" : "nav-link"}>
              Galería
            </NavLink>
            <NavLink to="/crear" className="nav-link">
              Añadir coche
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}
