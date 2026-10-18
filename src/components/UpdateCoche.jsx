import React, { Component } from "react";
import CochesService from "../services/CochesService";
import { Navigate } from "react-router-dom";

export default class UpdateCoche extends Component {
  service = new CochesService();
  inputIdCoche = React.createRef();
  inputMarca = React.createRef();
  inputModelo = React.createRef();
  inputConductor = React.createRef();
  inputImagen = React.createRef();

  state = {
    coche: null,
    cocheActualizado: false,
  };

  loadCoche = async () => {
    const { id } = this.props;
    const coche = await this.service.getCochesById(id);
    this.setState({ coche: coche });
  };

  updateCoche = async () => {
    const updatedCoche = {
      idCoche: parseInt(this.inputIdCoche.current.value),
      marca: this.inputMarca.current.value,
      modelo: this.inputModelo.current.value,
      conductor: this.inputConductor.current.value,
      imagen: this.inputImagen.current.value,
    };
    await this.service.putCoche(updatedCoche);
    this.setState({ cocheActualizado: true });
  };

  componentDidMount() {
    this.loadCoche();
  }

  render() {
    if (this.state.cocheActualizado) {
      return <Navigate to={this.props.volverADetalle ? `/detalle/${this.props.id}` : "/"} />;
    }
    return (
      <section className="form-page">
        <div className="form-heading">
          <span className="eyebrow">Editar vehículo</span>
          <h1>Modificar coche</h1>
          <p>Actualiza la información del vehículo seleccionado.</p>
        </div>
        <div className="form-card">
        <div className="field">
          <label htmlFor="idCoche">ID Coche:</label>
          <input
            type="text"
            id="idCoche"
            disabled
            ref={this.inputIdCoche}
            defaultValue={this.state.coche?.idCoche}
          />
        </div>
        <div className="field">
          <label htmlFor="marca">Marca:</label>
          <input
            type="text"
            id="marca"
            ref={this.inputMarca}
            defaultValue={this.state.coche?.marca}
          />
        </div>
        <div className="field">
          <label htmlFor="modelo">Modelo:</label>
          <input
            type="text"
            id="modelo"
            ref={this.inputModelo}
            defaultValue={this.state.coche?.modelo}
          />
        </div>
        <div className="field">
          <label htmlFor="conductor">Conductor:</label>
          <input
            type="text"
            id="conductor"
            ref={this.inputConductor}
            defaultValue={this.state.coche?.conductor}
          />
        </div>
        <div className="field">
          <label htmlFor="imagen">Imagen:</label>
          <input
            type="text"
            id="imagen"
            ref={this.inputImagen}
            defaultValue={this.state.coche?.imagen}
          />
        </div>
        <button className="button button--primary button--full" onClick={this.updateCoche}>Guardar cambios</button>
        </div>
      </section>
    );
  }
}
