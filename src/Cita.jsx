import "./App.css";

function Cita({ mascota, dueno, fecha, hora, sintomas }) {
  return (
    <div class="cita-card">
      <div className="cita-header">
        <div className="mascota-nombre">{mascota}</div>
        <button class="boton-eliminar">
          ELIMINAR
        </button>
      </div>
      
      <div class="cita-detalles">
        <div class="detalle-item">
          <span class="detalle-label">Dueño:</span>
          <span class="detalle-valor">{dueno}</span>
        </div>
        
        <div class="detalle-item">
          <span class="detalle-label">Fecha:</span>
          <span class="detalle-valor">{fecha}</span>
        </div>
        
        <div class="detalle-item">
          <span class="detalle-label">Hora:</span>
          <span class="detalle-valor">{hora}</span>
        </div>
        
        <div class="sintomas-texto">
          <span class="detalle-label">Síntomas:</span>
          <span class="detalle-valor">{sintomas}</span>
        </div>
      </div>
    </div>
  );
}

export default Cita;