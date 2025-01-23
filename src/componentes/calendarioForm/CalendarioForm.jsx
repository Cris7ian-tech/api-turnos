import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CalendarioForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const fechaSeleccionada = location.state?.fechaSeleccionada;

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    edad: "",
    obraSocial: "",
    direccion: "",
    telefono: "",
    motivoConsulta: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.apellido) {
      alert("Por favor, completa los campos requeridos.");
      return;
    }
    console.log("Datos enviados:", formData);
    // Aquí podrías redirigir al usuario o mostrar un mensaje de éxito.
    navigate("/");
  };

  if (!fechaSeleccionada) {
    return (
      <div>
        <h1>Debes seleccionar una fecha</h1>
        <button onClick={() => navigate("/")}>Volver al Calendario</button>
      </div>
    );
  }

  return (
    <>
      <h1>CalendarioForm</h1>

      <div className="container">
        <h2>Formulario de Consulta</h2>
        <p>Fecha seleccionada: {fechaSeleccionada?.toLocaleDateString()}</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre:</label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Apellido:</label>
            <input
              type="text"
              className="form-control"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">DNI:</label>
            <input
              type="number"
              className="form-control"
              name="dni"
              value={formData.dni}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Edad:</label>
            <input
              type="date"
              className="form-control"
              name="edad"
              value={formData.edad}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Obra social:</label>
            <input
              type="text"
              className="form-control"
              name="obraSocial"
              value={formData.obraSocial}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Dirección:</label>
            <input
              type="text"
              className="form-control"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Teléfono:</label>
            <input
              type="tel"
              className="form-control"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Motivo de consulta:</label>
            <input
              type="text"
              className="form-control"
              name="motivoConsulta"
              value={formData.motivoConsulta}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default CalendarioForm;
