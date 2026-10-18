import React, { Component } from "react";
import CochesService from "../services/CochesService";
import { NavLink } from "react-router-dom";
import ConfirmarDialog from "./ConfirmarDialog";

export default class GaleriaComponent extends Component {
  service = new CochesService();

  state = {
    coches: [],
    isLodading: true,
    cocheSeleccionado: null,
  };

  loadCoches = async () => {
    const coches = await this.service.getCoches();
    this.setState({ coches, isLodading: false });
  };

  abrirDialogoEliminar = (coche) => {
    this.setState({ cocheSeleccionado: coche });
  };

  cerrarDialogoEliminar = () => {
    this.setState({ cocheSeleccionado: null });
  };

  deleteCoche = async () => {
    const { cocheSeleccionado } = this.state;

    await this.service.deleteCoche(cocheSeleccionado.idCoche);
    this.setState({ cocheSeleccionado: null });
    this.loadCoches();
  };

  componentDidMount() {
    this.loadCoches();
  }

  render() {
    return (
      <>
        <h1>Galeria de coches</h1>

        <NavLink to="/crear" className="bg-blue-500 text-white px-4 py-2 rounded">
          Crear un nuevo coche
        </NavLink>

        {this.state.isLodading ? (
          <div className="flex justify-center items-center p-8">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
            <span className="ml-3 text-gray-600">Cargando coches...</span>
          </div>
        ) : this.state.coches.length === 0 ? (
          <p>No hay coches disponibles</p>
        ) : (
          this.state.coches.map((coche, index) => (
            <div key={index}>
              <h2>
                {coche.marca} {coche.modelo}
              </h2>
              <p>{coche.conductor}</p>
              <img
                src={coche.imagen}
                alt={`${coche.marca} ${coche.modelo}`}
                style={{ height: "50px", objectFit: "cover" }}
              />
              <NavLink
                to={`/modificar/${coche.idCoche}`}
                className="bg-yellow-500 text-white px-4 py-2 rounded"
              >
                Modificar
              </NavLink>
              <button
                onClick={() => this.abrirDialogoEliminar(coche)}
                className="bg-red-500 text-white px-4 py-2 rounded ml-2"
              >
                Eliminar
              </button>
            </div>
          ))
        )}

        {this.state.cocheSeleccionado && (
          <ConfirmarDialog
            coche={this.state.cocheSeleccionado}
            onClose={this.cerrarDialogoEliminar}
            onConfirm={this.deleteCoche}
          />
        )}
      </>
    );
  }
}
