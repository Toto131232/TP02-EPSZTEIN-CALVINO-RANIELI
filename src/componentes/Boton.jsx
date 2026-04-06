import "./App.css";

function Boton({ texto, tipo }) {
  return <button className={tipo}>{texto}</button>;
}

export default Boton;
