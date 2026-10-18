import React, { Component } from "react";
import { BrowserRouter, Route, Routes, useLocation, useParams } from "react-router-dom";
import GaleriaComponent from "./GaleriaComponent";
import MenuComponent from "./MenuComponent";
import CreateCoche from "./CreateCoche";
import UpdateCoche from "./UpdateCoche";
import DetalleCoche from "./DetalleCoche";

export default class Router extends Component {
  render() {
    function UpdateCocheElement() {
      const { id } = useParams();
      const location = useLocation();
      return <UpdateCoche id={id} volverADetalle={location.state?.fromDetail === true} />;
    }
    function DetalleCocheElement() {
      const { id } = useParams();
      return <DetalleCoche id={id} />;
    }

    return (
      <BrowserRouter>
        <MenuComponent />
        <main>
          <Routes>
            <Route path="/" element={<GaleriaComponent />} />
            <Route path="/crear" element={<CreateCoche />} />
            <Route path="/detalle/:id" element={<DetalleCocheElement />} />
            <Route path="/modificar/:id" element={<UpdateCocheElement />} />
          </Routes>
        </main>
      </BrowserRouter>
    );
  }
}
