import "./App.css";

function Formulario() {
  return (
    <div class="formulario">
      <h2>CREAR MI CITA</h2>
      
      <div class="ingresar-form">
        <label>NOMBRE  DE LA MASCOTA</label>
        <input type="text" placeholder="Nombre de la mascota"/>
      </div>
      
      <div class="ingresar-form">
        <label>NOMBRE  DEL DUEÑO</label>
        <input type="text" placeholder="Nombre del dueño de la mascota"/>
      </div>
      
      <div class="ingresar-form">
        <label>FECHA</label>
        <input type="date"/>
      </div>
      
      <div class="ingresar-form">
        <label>HORA</label>
        <input 
          type="time" 
          defaultValue=""
        />
      </div>
      
      <div class="ingresar-form">
        <label>SÍNTOMAS</label>
        <textarea placeholder="Describa los síntomas de la mascota"/>
      </div>
      
      <button class="boton-agregar">
        AGREGAR CITA
      </button>
    </div>
  );
}

export default Formulario;