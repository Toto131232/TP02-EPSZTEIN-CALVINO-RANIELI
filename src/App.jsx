import { useState } from "react";
import Formulario from "./Formulario";
import Listado from "./Listado";
import ResumenCitas from "./ResumenCitas";
import "./App.css";

function App() {
  const [citas] = useState([
    {
      id: 1,
      mascota: "Roco",
      dueno: "Santiago",
      fecha: "2023-12-05",
      hora: "08:45",
      sintomas: "Le duele la panza"
    },
    {
      id: 2,
      mascota: "Tobi",
      dueno: "Juan",
      fecha: "2025-06-12",
      hora: "10:25",
      sintomas: "Insmonio"
    },
    {
      id: 3,
      mascota: "Floki",
      dueno: "Ariel",
      fecha: "2023-08-05",
      hora: "18:35",
      sintomas: "No está comiendo"
    }
  ]);

  return (
    <div class="app">
      <h1>ADMINISTRADOR DE CITAS VETERINARIA</h1>

      <div class="contenedor">
        <Formulario />
        <Listado citas={citas} />
      </div>
      <ResumenCitas citas={citas} />
    </div>
    
  );
}

export default App;