import Cita from "./Cita";
import "./App.css";

function Listado({ citas }) {
  return (
    <div class="listado">
      <h2>ADMINISTRA TUS CITAS</h2>
      
      <div class="lista-contenedor">
        {citas.length === 0 ? (
          <div class="comprobar">
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