import "./App.css";

function Cita({ mascota, dueno, fecha, hora, sintomas }) {
  return (
    <div class="cita-card">

      <div class="cita-contenido">
        <p><span>Mascota:</span>{mascota}</p>
        <p><span>Dueño:</span> {dueno}</p>
        <p><span>Fecha:</span> {fecha}</p>
        <p><span>Hora:</span> {hora}</p>
        <p><span>Síntomas:</span> {sintomas}</p>
      </div>

      <button className="boton-eliminar">ELIMINAR X</button>

    </div>
  );
}

export default Cita;