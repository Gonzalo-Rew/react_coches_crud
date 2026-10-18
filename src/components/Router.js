import React, { Component } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import GaleriaComponent from "./GaleriaComponent";
import MenuComponent from "./MenuComponent";
import CreateCoche from "./CreateCoche";
import UpdateCoche from "./UpdateCoche";

export default class Router extends Component {
  render() {
    function UpdateCocheElement() {
      const { id } = useParams();
      return <UpdateCoche id={id} />;
    }

    return (
      <BrowserRouter>
        <MenuComponent />
        <main>
          <Routes>
            <Route path="/" element={<GaleriaComponent />} />
            <Route path="/crear" element={<CreateCoche />} />
            <Route path="/modificar/:id" element={<UpdateCocheElement />} />
          </Routes>
        </main>
      </BrowserRouter>
    );
  }
}
