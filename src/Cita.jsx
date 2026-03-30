import "./App.css";

function Cita({ mascota, dueno, fecha, hora, sintomas }) {
  return (
    <div className="cita-card">
      <div className="cita-header">
        <div className="mascota-nombre">{mascota}</div>
        <button className="btn-eliminar">
          ELIMINAR
        </button>
      </div>
      
      <div className="cita-detalles">
        <div className="detalle-item">
          <span className="detalle-label">Dueño:</span>
          <span className="detalle-valor">{dueno}</span>
        </div>
        
        <div className="detalle-item">
          <span className="detalle-label">Fecha:</span>
          <span className="detalle-valor">{fecha}</span>
        </div>
        
        <div className="detalle-item">
          <span className="detalle-label">Hora:</span>
          <span className="detalle-valor">{hora}</span>
        </div>
        
        <div className="sintomas-texto">
          <span className="detalle-label">Síntomas:</span>
          <span className="detalle-valor">{sintomas}</span>
        </div>
      </div>
    </div>
  );
}

export default Cita;