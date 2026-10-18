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
      <>
        <h1>Crear coche</h1>
        <div>
          <label htmlFor="idCoche">ID Coche:</label>
          <input type="text" id="idCoche" ref={this.inputIdCoche} />
        </div>
        <div>
          <label htmlFor="marca">Marca:</label>
          <input type="text" id="marca" ref={this.inputMarca} />
        </div>
        <div>
          <label htmlFor="modelo">Modelo:</label>
          <input type="text" id="modelo" ref={this.inputModelo} />
        </div>
        <div>
          <label htmlFor="conductor">Conductor:</label>
          <input type="text" id="conductor" ref={this.inputConductor} />
        </div>
        <div>
          <label htmlFor="imagen">Imagen:</label>
          <input type="text" id="imagen" ref={this.inputImagen} />
        </div>
        <button onClick={this.crearCoche}>Crear Coche</button>
      </>
    );
  }
}
