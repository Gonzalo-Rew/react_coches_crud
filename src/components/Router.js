import { BrowserRouter, Route, Routes } from "react-router-dom";
import GaleriaComponent from "./GaleriaComponent";
import MenuComponent from "./MenuComponent";

function Router() {
  return (
    <BrowserRouter>
      <MenuComponent />
      <main>
        <Routes>
          <Route path="/" element={<GaleriaComponent />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default Router;
