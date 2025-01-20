import React from "react";
import "../../styles/UserRegister.css"; // Archivo CSS para estilos personalizados


function RegisterForm() {
  return (
    <form className="register-form" style={{ maxWidth: "400px"}}>
      <p>
        ¿Ya tienes una cuenta?{" "}
        <a href="/login" style={{ color: "#007bff", textDecoration: "none" }}>
          ¡Inicia sesión!
        </a>
      </p>
      <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          placeholder="Ingresa tu nombre"
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastname">Apellidos</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          className="form-control"
          placeholder="Ingresa tus apellidos"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Dirección de correo electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          placeholder="Ingresa tu correo"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            placeholder="Ingresa tu contraseña"
          />
          <button
            type="button"
            style={{
              marginLeft: "8px",
              background: "#ccc",
              border: "none",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            MOSTRAR
          </button>
        </div>
      </div>
      <div className="form-group">
        <input type="checkbox" id="newsletter" name="newsletter" />
        <label htmlFor="newsletter" style={{ marginLeft: "8px" }}>
          Suscribirse a nuestro boletín de noticias
        </label>
        <p style={{ fontSize: "12px", color: "#6c757d", marginTop: "5px" }}>
          Puedes darte de baja en cualquier momento. Para ello, consulta nuestra
          información de contacto en el aviso legal.
        </p>
      </div>
      <button
        type="submit"
        style={{
          background: "#007bff",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          cursor: "pointer",
          width: "100%",
        }}
      >
        GUARDAR
      </button>
    </form>
  );
}

export default RegisterForm;
