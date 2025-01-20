import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../styles/UserLogin.css"; // Archivo CSS para estilos personalizados
import { Link } from "react-router-dom";

function UserLogin() {
  return (
    <div className="login-container">
      <Form className="login-form">
        <h2>Acceder a mi cuenta</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="formLabel">Correo Electrónico</Form.Label>
          <Form.Control type="email" placeholder="" />
          <Form.Text className="text-muted">
            Nunca compartiremos su correo con nadie más.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="formLabel">Contraseña</Form.Label>
          <Form.Control type="password" placeholder="" />
        </Form.Group>
        <Form.Group
          className="checkbox-inline"
          controlId="formBasicCheckbox"
        >
          <div className="d-flex align-items-center">
            <Form.Check type="checkbox" label="Recuérdame" />
          </div>
          <Link className="forgot-password"
            to="/forgot-password"
            style={{ textDecoration: "none"}}
          >
            <span>¿Olvidaste tu contraseña?</span>
          </Link>
        </Form.Group>
        <Button className="custom-button" type="submit">
          Iniciar Sesión
        </Button>
        <hr />
        <div className="createAcount">
          <Link className="spanLabel" to="/register" style={{ textDecoration: "none" }}>
            <span>¿No tienes una cuenta? ¡Crea una Aquí!</span>
          </Link>
        </div>
      </Form>
    </div>
  );
}

export default UserLogin;
