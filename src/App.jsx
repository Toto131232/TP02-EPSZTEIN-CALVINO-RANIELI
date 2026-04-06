import Formulario from "./componentes/Formulario";
import Listado from "./componentes/Listado";

function App() {
  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <Formulario />
          <Listado />
        </div>
      </div>
    </>
  );
}

export default App;