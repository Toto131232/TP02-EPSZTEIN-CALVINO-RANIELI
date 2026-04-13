import { useState } from "react";
import "./Formulario.css";

function Formulario({ setCitas }) {
  const [formData, setFormData] = useState({
    mascota: "",
    dueno: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const onChangeCampo = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const hayCampoVacio = Object.values(formData).some((valor) => valor.trim() === "");
    if (hayCampoVacio) {
      return;
    }

    const nuevaCita = {
      id: crypto.randomUUID(),
      ...formData,
    };

    setCitas((prev) => [...prev, nuevaCita]);
    setFormData({
      mascota: "",
      dueno: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <div className="one-half column formulario">
      <h2 className="formulario-titulo">Crear mi Cita</h2>
      <form onSubmit={onSubmit}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          value={formData.mascota}
          onChange={onChangeCampo}
        />
        <label>Nombre Dueño</label>
        <input
          type="text"
          name="dueno"
          className="u-full-width"
          placeholder="Nombre dueño de la mascota"
          value={formData.dueno}
          onChange={onChangeCampo}
        />
        <label>Fecha</label>
        <input type="date" name="fecha" className="u-full-width" value={formData.fecha} onChange={onChangeCampo} />
        <label>hora</label>
        <input type="time" name="hora" className="u-full-width" value={formData.hora} onChange={onChangeCampo} />
        <label>Sintomas</label>
        <textarea name="sintomas" className="u-full-width" value={formData.sintomas} onChange={onChangeCampo}></textarea>
        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </div>
  );
}

export default Formulario;
