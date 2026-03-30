import './App.css'

function ResumenCitas({ citas }) {
  const totalCitas = citas.length
  const fechasUnicas = [...new Set(citas.map(cita => cita.fecha))]
  const citasPorDia = fechasUnicas.map(fecha => ({
    fecha,
    cantidad: citas.filter(cita => cita.fecha === fecha).length
  }))
  const fechaMasOcupada = citasPorDia.length > 0 
    ? citasPorDia.reduce((max, actual) => actual.cantidad > max.cantidad ? actual : max)
    : null
  const mascotasUnicas = [...new Set(citas.map(cita => cita.mascota))]
  const proximaCita = citas.length > 0 
    ? citas.reduce((proxima, actual) => actual.fecha < proxima.fecha ? actual : proxima)
    : null

  return (
    <div className="resumen-container">
      <h2 className="resumen-titulo">Resumen de Citas</h2>
      
      <div className="resumen-grid">
        <div className="resumen-card total-citas">
          <div className="card-info">
            <h3 className="card-numero">{totalCitas}</h3>
            <p className="card-label">Total de Citas</p>
          </div>
        </div>
        <div className="resumen-card mascotas">
          <div className="card-info">
            <h3 className="card-numero">{mascotasUnicas.length}</h3>
            <p className="card-label">Mascotas Diferentes</p>
          </div>
        </div>
        <div className="resumen-card dias">
          <div className="card-info">
            <h3 className="card-numero">{fechasUnicas.length}</h3>
            <p className="card-label">Días con Citas</p>
          </div>
        </div>
        {proximaCita && (
          <div className="resumen-card proxima">
            <div className="card-info">
              <h3 className="card-proxima-fecha">{proximaCita.fecha}</h3>
              <p className="card-label">{proximaCita.mascota} - {proximaCita.hora}</p>
            </div>
          </div>
        )}
      </div>
      {citas.length > 0 && (
        <div className="resumen-detalles">
          {fechaMasOcupada && (
            <div className="detalle-item">
              <span className="detalle-texto">
                Día más ocupado: <strong>{fechaMasOcupada.fecha}</strong> con {fechaMasOcupada.cantidad} cita{fechaMasOcupada.cantidad !== 1 ? 's' : ''}
              </span>
            </div>
          )}
          
        </div>
      )}
      
      {citas.length === 0 && (
        <div className="resumen-vacio">
          <p>No hay citas registradas</p>
        </div>
      )}
    </div>
  )
}

export default ResumenCitas