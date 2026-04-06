import Cita from "./Cita";

function Listado() {
  const citas = [
    { id: 1, mascota: "Nina", dueno: "Martin", fecha: "2021-08-05", hora: "08:20", sintomas: "Le duele la pierna" },
    { id: 2, mascota: "Sifon", dueno: "Flecha", fecha: "2023-08-05", hora: "09:24", sintomas: "Duerme mucho" },
    { id: 3, mascota: "Floki", dueno: "Ari", fecha: "2023-08-05", hora: "16:15", sintomas: "No está comiendo" },
  ];

  return (
    <div className="one-half column">
      <h2>Administra tus citas</h2>
      {citas.map((cita) => (
        <Cita
          id={cita.id}
          mascota={cita.mascota}
          dueno={cita.dueno}
          fecha={cita.fecha}
          hora={cita.hora}
          sintomas={cita.sintomas}
        />
      ))}
    </div>
  );
}

export default Listado;
