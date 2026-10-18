import React, { Component } from "react";
import CochesService from "../services/CochesService";
import { Navigate } from "react-router-dom";

export default class CreateCoche extends Component {
  service = new CochesService();
  inputIdCoche = React.createRef();
  inputMarca = React.createRef();
  inputModelo = React.createRef();
  inputConductor = React.createRef();
  inputImagen = React.createRef();

  state = {
    cocheCreado: false,
  };

  crearCoche = async () => {
    const nuevoCoche = {
      id: parseInt(this.inputIdCoche.current.value),
      marca: this.inputMarca.current.value,
      modelo: this.inputModelo.current.value,
      conductor: this.inputConductor.current.value,
      imagen: this.inputImagen.current.value,
    };

    await this.service.postCoche(nuevoCoche);
    this.setState({ cocheCreado: true });
  };

  render() {
    if (this.state.cocheCreado) {
      return <Navigate to="/" />;
    }
    return (
      <section className="form-page">
        <div className="form-heading">
          <span className="eyebrow">Nueva incorporación</span>
          <h1>Crear coche</h1>
          <p>Añade un vehículo a tu colección.</p>
        </div>
        <div className="form-card">
        <div className="field">
          <label htmlFor="idCoche">ID Coche:</label>
          <input type="text" id="idCoche" ref={this.inputIdCoche} />
        </div>
        <div className="field">
          <label htmlFor="marca">Marca:</label>
          <input type="text" id="marca" ref={this.inputMarca} />
        </div>
        <div className="field">
          <label htmlFor="modelo">Modelo:</label>
          <input type="text" id="modelo" ref={this.inputModelo} />
        </div>
        <div className="field">
          <label htmlFor="conductor">Conductor:</label>
          <input type="text" id="conductor" ref={this.inputConductor} />
        </div>
        <div className="field">
          <label htmlFor="imagen">Imagen:</label>
          <input type="text" id="imagen" ref={this.inputImagen} />
        </div>
        <button className="button button--primary button--full" onClick={this.crearCoche}>Crear coche</button>
        </div>
      </section>
    );
  }
}
