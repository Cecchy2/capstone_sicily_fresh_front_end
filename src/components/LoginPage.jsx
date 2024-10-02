import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="d-flex justify-content-center mainLoginPage lateral">
      <Container>
        <Row className="mt-5 border border -3 rounded bg-dark text-warning mx-2">
          <Col xs={12} sm={8} md={6} lg={4}>
            <Form>
              <Form.Group className="mb-3 " controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form>
          </Col>
          <div className="d-flex ">
            <p>Non sei ancora registrato?</p> <Link to="/registrazione">Registrati</Link>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
