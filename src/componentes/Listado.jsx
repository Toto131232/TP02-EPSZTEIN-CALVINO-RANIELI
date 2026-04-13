import Cita from "./Cita";
import "./Listado.css";

function Listado({ citas, setCitas }) {
  const eliminarCita = (id) => {
    const confirmar = window.confirm("¿Seguro que querés eliminar esta cita?");
    if (!confirmar) return;
    setCitas((prev) => prev.filter((cita) => cita.id !== id));
  };

  return (
    <div className="one-half column listado">
      <h2 className="listado-titulo">Administra tus citas</h2>
      {citas.length === 0 && <p className="listado-vacio">No hay citas, agrega una.</p>}
      {citas.map((cita) => (
        <Cita
          key={cita.id}
          id={cita.id}
          mascota={cita.mascota}
          dueno={cita.dueno}
          fecha={cita.fecha}
          hora={cita.hora}
          sintomas={cita.sintomas}
          onEliminar={eliminarCita}
        />
      ))}
    </div>
  );
}

export default Listado;
