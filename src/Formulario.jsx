import Campo from "./Campo";
import Boton from "./Boton";
import "./App.css";

function Formulario() {
  return (
    <div className="formulario">
      <h2>CREAR MI CITA</h2>

      <Campo label="NOMBRE DE LA MASCOTA" type="text" placeholder="Nombre de la mascota" />
      <Campo label="NOMBRE DEL DUEÑO" type="text" placeholder="Nombre del dueño" />
      <Campo label="FECHA" type="date" />
      <Campo label="HORA" type="time" />
      <Campo label="SÍNTOMAS" type="textarea" placeholder="Describa los síntomas" />

      <Boton texto="AGREGAR CITA" tipo="boton-agregar" />
    </div>
  );
}

export default Formulario;