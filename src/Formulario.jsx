import "./App.css";

function Formulario() {
  return (
    <div className="formulario">
      <h2>CREAR MI CITA</h2>
      
      <div className="campo-form">
        <label>NOMBRE MASCOTA</label>
        <input 
          type="text" 
          placeholder="Nombre de la mascota"
          defaultValue=""
        />
      </div>
      
      <div className="campo-form">
        <label>NOMBRE DUEÑO</label>
        <input 
          type="text" 
          placeholder="Nombre del dueño de la mascota"
          defaultValue=""
        />
      </div>
      
      <div className="campo-form">
        <label>FECHA</label>
        <input 
          type="date" 
          defaultValue=""
        />
      </div>
      
      <div className="campo-form">
        <label>HORA</label>
        <input 
          type="time" 
          defaultValue=""
        />
      </div>
      
      <div className="campo-form">
        <label>SÍNTOMAS</label>
        <textarea 
          placeholder="Describa los síntomas de la mascota"
          defaultValue=""
        />
      </div>
      
      <button className="btn-agregar">
        AGREGAR CITA
      </button>
    </div>
  );
}

export default Formulario;