import "./App.css";

function Campo({ label, type, placeholder }) {
  return (
    <div className="ingresar-form">
      <label>{label}</label>
      {type === "textarea" ? (
        <textarea placeholder={placeholder}></textarea>
      ) : (
        <input type={type} placeholder={placeholder} />
      )}
    </div>
  );
}

export default Campo;