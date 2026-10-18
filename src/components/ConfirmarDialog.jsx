import React, { Component } from "react";

export default class ConfirmarDialog extends Component {
  render() {
    return (
      <div className="dialog-backdrop" role="presentation">
        <div className="dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
          <span className="dialog__icon">!</span>
          <h2 id="dialog-title">Confirmar eliminación</h2>
          <p>
            ¿Estás seguro de que quieres eliminar este coche?
          </p>
          <ul className="dialog__list">
            <li>
              <strong>Marca:</strong> {this.props.coche.marca}
            </li>
            <li>
              <strong>Modelo:</strong> {this.props.coche.modelo}
            </li>
            <li>
              <strong>Conductor:</strong> {this.props.coche.conductor}
            </li>
          </ul>
          <div className="dialog__actions">
            <button
              onClick={this.props.onClose}
              className="button button--ghost"
            >
              Cancelar
            </button>
            <button
              onClick={this.props.onConfirm}
              className="button button--danger"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    );
  }
}
