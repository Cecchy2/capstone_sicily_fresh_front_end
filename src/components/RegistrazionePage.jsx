import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const RegistrazionePage = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    nome: "",
    cognome: "",
    dataDiNascita: "",
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Values:", formValues);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-lg border-0 rounded-4">
            <Card.Body className="p-4">
              <h1 className="text-center mb-4">Registrazione</h1>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formNome" className="mb-3">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="text"
                    name="nome"
                    value={formValues.nome}
                    onChange={handleChange}
                    placeholder="Inserisci il tuo nome"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formCognome" className="mb-3">
                  <Form.Label>Cognome</Form.Label>
                  <Form.Control
                    type="text"
                    name="cognome"
                    value={formValues.cognome}
                    onChange={handleChange}
                    placeholder="Inserisci il tuo cognome"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formUsername" className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={formValues.username}
                    onChange={handleChange}
                    placeholder="Inserisci il tuo username"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    placeholder="Inserisci la tua email"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                    placeholder="Inserisci la tua password"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formDataDiNascita" className="mb-3">
                  <Form.Label>Data di Nascita</Form.Label>
                  <Form.Control
                    type="date"
                    name="dataDiNascita"
                    value={formValues.dataDiNascita}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <div className="d-flex justify-content-center">
                  <Button variant="primary" type="submit" className="px-5">
                    Registrati
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrazionePage;
