import "./App.css";

function Cita({ mascota, dueno, fecha, hora, sintomas }) {
  return (
    <div class="cita-card">
      <div class="cita-header">
        <div class="mascota-nombre">{mascota}</div>
        <button class="boton-eliminar">
          ELIMINAR
        </button>
      </div>
      
      <div class="cita-detalles">
        <div class="detalle-item">
          <span class="detalle1">Dueño:</span>
          <span class="detalle2">{dueno}</span>
        </div>
        
        <div class="detalle-item">
          <span class="detalle1">Fecha:</span>
          <span class="detalle2">{fecha}</span>
        </div>
        
        <div class="detalle-item">
          <span class="detalle1">Hora:</span>
          <span class="detalle2">{hora}</span>
        </div>
        
        <div class="sintomas-texto">
          <span class="detalle1">Síntomas:</span>
          <span class="detalle2">{sintomas}</span>
        </div>
      </div>
    </div>
  );
}

export default Cita;