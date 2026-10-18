import React, { Component } from "react";

export default class ConfirmarDialog extends Component {
  render() {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Confirmar eliminación</h2>
          <p className="mb-4">
            ¿Estás seguro de que quieres eliminar este coche?
          </p>
          <ul className="mb-4">
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
          <div className="flex justify-end gap-2">
            <button
              onClick={this.props.onClose}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancelar
            </button>
            <button
              onClick={this.props.onConfirm}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    );
  }
}
