import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/actions/authActions";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(login(email, password));
  };

  if (isAuthenticated) {
    if (user.role === "ADMIN") {
      navigate("/admin");
    } else if (user.role === "CLIENTE") {
      navigate(`/utenti/${user.utenteId}`);
    } else if (user.role === "FORNITORE") {
      navigate(`/fornitori/${user.utenteId}`);
    }
  }

  return (
    <div className="lateral">
      <Container className="d-flex justify-content-center align-items-center h-100">
        <Row
          className="border border-warning rounded-4 bg-dark text-warning shadow-lg p-5 mx-2"
          style={{ maxWidth: "500px" }}
        >
          <Col xs={12}>
            <h2 className="text-center mb-4 fw-bold">Accedi</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-4" controlId="formGroupEmail">
                <Form.Label className="fw-bold">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Inserisci l'email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-light border-0 rounded-3"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formGroupPassword">
                <Form.Label className="fw-bold">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Inserisci la password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-light border-0 rounded-3"
                  required
                />
              </Form.Group>
              <div className="d-flex justify-content-center">
                <Button
                  type="submit"
                  variant="warning"
                  size="lg"
                  className="my-3 px-5 fw-bold"
                  style={{ boxShadow: "0 5px 15px rgba(255, 193, 7, 0.5)" }}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      Login in corso...
                    </>
                  ) : (
                    "Accedi"
                  )}
                </Button>
              </div>
            </Form>
          </Col>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <p className="me-2 mb-0">Non sei ancora registrato? •</p>
            <Link to="/registrazione" className="text-decoration-none fw-bold text-warning">
              Registrati
            </Link>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
