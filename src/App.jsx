import { useState } from "react";
import "./App.css";
import Formulario from "./componentes/Formulario";
import Listado from "./componentes/Listado";

function App() {
  const [citas, setCitas] = useState([]);

  return (
    <>
      <h1 className="app-title">ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <Formulario setCitas={setCitas} />
          <Listado citas={citas} setCitas={setCitas} />
        </div>
      </div>
    </>
  );
}

export default App;