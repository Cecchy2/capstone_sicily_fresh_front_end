import { useState } from "react";
import { Button, Card, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const FornitorePage = () => {
  const fornitoreId = useParams();
  const [show, setShow] = useState(false);
  const [formValues, setFormValues] = useState({
    titolo: "",
    descrizione: "",
    difficolta: "FACILE",
    tempo: "",
    valoriNutrizionali: "",
    fornitoreId: `${fornitoreId}`,
    passaggi: [{ descrizione: "" }],
    ingredienti: [{ nome: "", quantita: "" }],
  });
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col>
            <Card>
              <Card.Body>
                <h1>Ciao Fornitore, bentornato</h1>
                <div className="text-center">
                  <h2>Vuoi aggiungere una nuova ricetta?</h2>
                  <Button variant="warning" onClick={handleShow}>
                    Aggiungi ricetta
                  </Button>
                  <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                    <Modal.Header closeButton>
                      <Modal.Title>Aggiungi ricetta</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formGridTitolo">
                          <Form.Label>Titolo</Form.Label>
                          <Form.Control
                            name="titolo"
                            value={formValues.titolo}
                            onChange={handleChange}
                            placeholder="Dai un Titolo"
                            required
                          />
                        </Form.Group>

                        <Form.Group controlId="formGridDescrizione">
                          <Form.Label>Descrizione</Form.Label>
                          <Form.Control
                            name="descrizione"
                            value={formValues.descrizione}
                            onChange={handleChange}
                            placeholder="Descrizione"
                            required
                          />
                        </Form.Group>

                        <Form.Group controlId="formGridDifficolta">
                          <Form.Label>Difficoltà</Form.Label>
                          <Form.Select name="difficolta" value={formValues.difficolta} onChange={handleChange} required>
                            <option value="FACILE">Facile</option>
                            <option value="MEDIA">Media</option>
                            <option value="DIFFICILE">Difficile</option>
                          </Form.Select>
                        </Form.Group>

                        <Form.Group controlId="formGridTempo">
                          <Form.Label>Tempo di Preparazione</Form.Label>
                          <Form.Control
                            name="tempo"
                            value={formValues.tempo}
                            onChange={handleChange}
                            placeholder="Tempo"
                            required
                          />
                        </Form.Group>

                        <Form.Group controlId="formGridValoriNutrizionali">
                          <Form.Label>Valori Nutrizionali</Form.Label>
                          <Form.Control
                            name="valoriNutrizionali"
                            value={formValues.valoriNutrizionali}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>

                        <h5>Ingredienti</h5>
                        {formValues.ingredienti.map((ingrediente, index) => (
                          <Row key={index} className="mb-3">
                            <Col>
                              <Form.Control
                                name="nome"
                                placeholder="Nome Ingrediente"
                                value={ingrediente.nome}
                                onChange={(e) => handleIngredientChange(index, e)}
                                required
                              />
                            </Col>
                            <Col>
                              <Form.Control
                                name="quantita"
                                placeholder="Quantità"
                                value={ingrediente.quantita}
                                onChange={(e) => handleIngredientChange(index, e)}
                                required
                              />
                            </Col>
                          </Row>
                        ))}
                        <Button variant="secondary" onClick={handleAddIngredient}>
                          Aggiungi Ingrediente
                        </Button>

                        <h5 className="mt-4">Passaggi di Preparazione</h5>
                        {formValues.passaggi.map((passaggio, index) => (
                          <Form.Group key={index} className="mb-3">
                            <Form.Control
                              placeholder={`Passaggio ${index + 1}`}
                              value={passaggio.descrizione}
                              onChange={(e) => handleStepChange(index, e)}
                              required
                            />
                          </Form.Group>
                        ))}
                        <Button variant="secondary" onClick={handleAddStep}>
                          Aggiungi Passaggio
                        </Button>

                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Annulla
                          </Button>
                          <Button variant="primary" type="submit">
                            Salva Ricetta
                          </Button>
                        </Modal.Footer>
                      </Form>
                    </Modal.Body>
                  </Modal>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FornitorePage;
