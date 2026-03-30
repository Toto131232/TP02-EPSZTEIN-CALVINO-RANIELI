import Cita from "./Cita";
import "./App.css";

function Listado({ citas }) {
  return (
    <div className="listado">
      <h2>ADMINISTRA TUS CITAS</h2>
      
      <div className="lista-contenedor">
        {citas.length === 0 ? (
          <div className="empty-state">
            <p>🐾</p>
            <p>No hay citas registradas</p>
            <p>¡Agrega tu primera cita!</p>
          </div>
        ) : (
          citas.map((cita) => (
            <Cita 
              key={cita.id} 
              mascota={cita.mascota}
              dueno={cita.dueno}
              fecha={cita.fecha}
              hora={cita.hora}
              sintomas={cita.sintomas}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Listado;