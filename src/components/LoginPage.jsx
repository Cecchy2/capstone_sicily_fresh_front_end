import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/actions/authActions";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, user, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <Container className="d-flex justify-content-center align-items-center h-100 mt-5">
        <Row className="mt-5 border border-warning rounded bg-dark text-warning mx-2" style={{ maxWidth: "500px" }}>
          <Col xs={12}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <div className="d-flex justify-content-center">
                <Button type="submit" variant="outline-warning" size="sm" className="my-2">
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
          <div className="d-flex mt-3">
            <p>Non sei ancora registrato? •</p>
            <Link to="/registrazione"> Registrati</Link>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
