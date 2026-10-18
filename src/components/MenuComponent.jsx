import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class MenuComponent extends Component {
  render() {
    return (
      <nav className="bg-gray-900 px-6 py-4 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <NavLink to="/" className="text-xl font-bold">
            Coches CRUD
          </NavLink>

          <div className="flex gap-6">
            <NavLink to="/" className="transition-colors hover:text-gray-300">
              Galeria de coches
            </NavLink>
            <NavLink to="/crear" className="transition-colors hover:text-gray-300">
              Crear coche
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}
