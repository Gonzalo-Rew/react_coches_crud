import React, { Component } from "react";
import CochesService from "../services/CochesService";
import { NavLink } from "react-router-dom";
import ConfirmarDialog from "./ConfirmarDialog";

export default class GaleriaComponent extends Component {
  service = new CochesService();
  state = { coches: [], isLoading: true, cocheSeleccionado: null };

  loadCoches = async () => {
    const coches = await this.service.getCoches();
    this.setState({ coches, isLoading: false });
  };
  abrirDialogoEliminar = (coche) => this.setState({ cocheSeleccionado: coche });
  cerrarDialogoEliminar = () => this.setState({ cocheSeleccionado: null });
  deleteCoche = async () => {
    await this.service.deleteCoche(this.state.cocheSeleccionado.idCoche);
    this.setState({ cocheSeleccionado: null });
    this.loadCoches();
  };
  componentDidMount() {
    this.loadCoches();
  }

  render() {
    const { coches, isLoading, cocheSeleccionado } = this.state;
    return (
      <section className="gallery-page">
        <div className="page-header">
          <div>
            <span className="eyebrow">Tu colección</span>
            <h1>Galería de coches</h1>
            <p>Explora y gestiona todos tus vehículos.</p>
          </div>
          <NavLink to="/crear" className="button button--primary">
            + Añadir coche
          </NavLink>
        </div>
        {isLoading ? (
          <div className="state-card">
            <span className="spinner" />
            Cargando coches...
          </div>
        ) : coches.length === 0 ? (
          <div className="state-card">
            <h2>Tu galería está vacía</h2>
            <p>Añade tu primer coche para empezar.</p>
          </div>
        ) : (
          <div className="car-grid">
            {coches.map((coche) => (
              <article className="car-card" key={coche.idCoche}>
                <NavLink
                  to={`/detalle/${coche.idCoche}`}
                  className="car-card__image-link"
                >
                  <img
                    src={coche.imagen}
                    alt={`${coche.marca} ${coche.modelo}`}
                    className="car-card__image"
                  />
                </NavLink>
                <div className="car-card__body">
                  <span className="car-card__id">#{coche.idCoche}</span>
                  <h2>
                    {coche.marca} <strong>{coche.modelo}</strong>
                  </h2>
                  <p>Conductor: {coche.conductor}</p>
                  <div className="card-actions">
                    <NavLink
                      to={`/detalle/${coche.idCoche}`}
                      className="text-link"
                    >
                      Ver detalles →
                    </NavLink>
                    <button
                      className="icon-button"
                      aria-label={`Eliminar ${coche.marca} ${coche.modelo}`}
                      onClick={() => this.abrirDialogoEliminar(coche)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
        {cocheSeleccionado && (
          <ConfirmarDialog
            coche={cocheSeleccionado}
            onClose={this.cerrarDialogoEliminar}
            onConfirm={this.deleteCoche}
          />
        )}
      </section>
    );
  }
}
