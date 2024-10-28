import { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { register } from "../redux/actions/authActions";
import { useNavigate } from "react-router-dom";

const RegistrazionePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    nome: "",
    cognome: "",
    dataDiNascita: "",
    ruolo: "CLIENTE",
    indirizzo: "",
    citta: "",
  });

  const [avatar, setAvatar] = useState(null);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await dispatch(register(formValues, avatar));

    if (result.success) {
      alert("Registrazione avvenuta con successo");
      navigate(`/login`);
    } else {
      alert(`Registrazione fallita: ${result.message || "Errore sconosciuto"}`);
    }
    setLoading(false);
  };

  return (
    <div className="registrazionePage">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Card className="shadow-lg border-5 rounded-4 my-5 ">
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
                  <Form.Group controlId="formIndirizzo" className="mb-3">
                    <Form.Label>Indirizzo</Form.Label>
                    <Form.Control
                      type="text"
                      name="indirizzo"
                      value={formValues.indirizzo}
                      onChange={handleChange}
                      placeholder="Inserisci il tuo indirizzo"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formCitta" className="mb-3">
                    <Form.Label>Città</Form.Label>
                    <Form.Control
                      type="text"
                      name="citta"
                      value={formValues.citta}
                      onChange={handleChange}
                      placeholder="Inserisci la tua citta"
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formAvatar" className="mb-3">
                    <Form.Label>Immagine Profilo (Opzionale)</Form.Label>
                    <Form.Control type="file" name="avatar" onChange={handleAvatarChange} accept="image/*" />
                  </Form.Group>

                  <div className="d-flex justify-content-center">
                    <Button variant="primary" type="submit" className="px-5" disabled={loading}>
                      {loading ? (
                        <>
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                          Registrazione in corso...
                        </>
                      ) : (
                        "Registrati"
                      )}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegistrazionePage;
