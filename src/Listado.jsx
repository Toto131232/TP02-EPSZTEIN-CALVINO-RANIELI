import Cita from "./Cita";

function Listado() {
  return (
    <div className="listado">
      <h2>Listado</h2>

      <Cita texto="Cita 1" />
      <Cita texto="Cita 2" />
      <Cita texto="Cita 3" />

    </div>
  );
}

export default Listado;