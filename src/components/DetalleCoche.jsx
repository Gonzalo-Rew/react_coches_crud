import React, { Component } from "react";
import { NavLink, Navigate } from "react-router-dom";
import CochesService from "../services/CochesService";
import ConfirmarDialog from "./ConfirmarDialog";

export default class DetalleCoche extends Component {
  service = new CochesService();

  state = {
    coche: null,
    isLoading: true,
    error: false,
    mostrarDialogo: false,
    eliminado: false,
  };

  async componentDidMount() {
    try {
      const coche = await this.service.getCochesById(this.props.id);
      this.setState({ coche, isLoading: false });
    } catch (error) {
      this.setState({ isLoading: false, error: true });
    }
  }

  deleteCoche = async () => {
    try {
      await this.service.deleteCoche(this.state.coche.idCoche);
      this.setState({ eliminado: true, mostrarDialogo: false });
    } catch (error) {
      this.setState({ error: true, mostrarDialogo: false });
    }
  };

  render() {
    const { coche, isLoading, error, mostrarDialogo, eliminado } = this.state;

    if (eliminado) return <Navigate to="/" />;
    if (isLoading) return <div className="state-card"><span className="spinner" />Cargando detalles...</div>;
    if (error || !coche) {
      return <div className="state-card state-card--error">No se ha podido cargar este coche. <NavLink to="/">Volver a la galería</NavLink></div>;
    }

    return (
      <section className="detail-page">
        <NavLink to="/" className="back-link">← Volver a la galería</NavLink>
        <div className="detail-card">
          <div className="detail-image-wrap">
            <img className="detail-image" src={coche.imagen} alt={`${coche.marca} ${coche.modelo}`} />
          </div>
          <div className="detail-content">
            <span className="eyebrow">Ficha del vehículo · #{coche.idCoche}</span>
            <h1>{coche.marca} <strong>{coche.modelo}</strong></h1>
            <p className="detail-description">Toda la información de este vehículo en un solo lugar.</p>
            <dl className="detail-specs">
              <div><dt>Marca</dt><dd>{coche.marca}</dd></div>
              <div><dt>Modelo</dt><dd>{coche.modelo}</dd></div>
              <div><dt>Conductor</dt><dd>{coche.conductor}</dd></div>
              <div><dt>Identificador</dt><dd>#{coche.idCoche}</dd></div>
            </dl>
            <div className="action-row">
              <NavLink to={`/modificar/${coche.idCoche}`} state={{ fromDetail: true }} className="button button--primary">Modificar coche</NavLink>
              <button className="button button--danger-outline" onClick={() => this.setState({ mostrarDialogo: true })}>Eliminar</button>
            </div>
          </div>
        </div>
        {mostrarDialogo && (
          <ConfirmarDialog
            coche={coche}
            onClose={() => this.setState({ mostrarDialogo: false })}
            onConfirm={this.deleteCoche}
          />
        )}
      </section>
    );
  }
}
