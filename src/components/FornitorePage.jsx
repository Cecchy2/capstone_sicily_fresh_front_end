import { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Container, Form, Image, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { creaRicetta } from "../redux/actions/ricetteActions";
import { getProfile } from "../redux/actions/utentiActions";

const FornitorePage = () => {
  const { fornitoreId } = useParams();
  const params = useParams();
  const utente = useSelector((state) => state.utente);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [formValues, setFormValues] = useState({
    titolo: "",
    descrizione: "",
    difficolta: "FACILE",
    tempo: "",
    valoriNutrizionali: "",
    fornitoreId: fornitoreId,
    passaggi: [{ descrizione: "", immaginePassaggio: "", ordinePassaggio: 1 }],
    Ricettaingredienti: [{ nome: "", descrizione: "", valoriNutrizionali: "", immagine: "", quantita: "" }],
  });

  useEffect(() => {
    if (fornitoreId) {
      dispatch(getProfile(fornitoreId));
    }
  }, [dispatch, fornitoreId]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleAddIngredient = () => {
    setFormValues({
      ...formValues,
      Ricettaingredienti: [
        ...formValues.Ricettaingredienti,
        { nome: "", descrizione: "", valoriNutrizionali: "", immagine: "", quantita: "" },
      ],
    });
  };

  const handleIngredientChange = (index, e) => {
    const { name, value } = e.target;
    const newIngredienti = [...formValues.Ricettaingredienti];
    newIngredienti[index][name] = value;
    setFormValues({
      ...formValues,
      Ricettaingredienti: newIngredienti,
    });
  };

  const handleAddStep = () => {
    setFormValues({
      ...formValues,
      passaggi: [
        ...formValues.passaggi,
        { descrizione: "", immaginePassaggio: "", ordinePassaggio: formValues.passaggi.length + 1 },
      ],
    });
  };

  const handleStepChange = (index, e) => {
    const { name, value } = e.target;
    const newPassaggi = [...formValues.passaggi];
    newPassaggi[index][name] = value;
    setFormValues({
      ...formValues,
      passaggi: newPassaggi,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(creaRicetta(formValues));
    setShowAlert(true);
    handleClose();
  };

  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col>
            <Card className="border border-5">
              <Card.Body>
                <h1 className="display-5 text-center">PAGINA FORNITORE</h1>{" "}
                <div className="d-flex">
                  <Image src="../../public/assets/limoni.svg" fluid />
                  <div className="ms-2 mt-5">
                    <h3>Nome: </h3>
                    <h3>Cognome:</h3>
                    <h3>Username:</h3>
                    <h3>Email:</h3>
                  </div>
                </div>
                {showAlert && (
                  <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                    Ricetta creata con successo!
                  </Alert>
                )}
                <div className="text-center mt-5">
                  <Row>
                    <Col md={12} lg={6} className="mb-4">
                      <Card>
                        <Card.Img
                          variant="top"
                          src="../../public/assets/piatti/ortigia-sicily-siracusa-IMG_5334-scaled.jpeg"
                          className="cardImageFornitori"
                        />
                        <Card.Body>
                          <Card.Title>Crea una ricetta</Card.Title>
                          <Button variant="warning" onClick={handleShow}>
                            Aggiungi ricetta
                          </Button>
                        </Card.Body>
                      </Card>
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
                              <Form.Select
                                name="difficolta"
                                value={formValues.difficolta}
                                onChange={handleChange}
                                required
                              >
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
                            {formValues.Ricettaingredienti?.map((ingrediente, index) => (
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
                                    name="descrizione"
                                    placeholder="Descrizione"
                                    value={ingrediente.descrizione}
                                    onChange={(e) => handleIngredientChange(index, e)}
                                    required
                                  />
                                </Col>
                                <Col>
                                  <Form.Control
                                    name="valoriNutrizionali"
                                    placeholder="Valori Nutrizionali"
                                    value={ingrediente.valoriNutrizionali}
                                    onChange={(e) => handleIngredientChange(index, e)}
                                    required
                                  />
                                </Col>
                                <Col>
                                  <Form.Control
                                    name="immagine"
                                    placeholder="Link Immagine"
                                    value={ingrediente.immagine}
                                    onChange={(e) => handleIngredientChange(index, e)}
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
                            {formValues.passaggi?.map((passaggio, index) => (
                              <Row key={index} className="mb-3">
                                <Col>
                                  <Form.Control
                                    name="descrizione"
                                    placeholder={`Descrizione Passaggio ${index + 1}`}
                                    value={passaggio.descrizione}
                                    onChange={(e) => handleStepChange(index, e)}
                                    required
                                  />
                                </Col>
                                <Col>
                                  <Form.Control
                                    name="immaginePassaggio"
                                    placeholder="Link Immagine Passaggio"
                                    value={passaggio.immaginePassaggio}
                                    onChange={(e) => handleStepChange(index, e)}
                                  />
                                </Col>
                                <Col>
                                  <Form.Control
                                    name="ordinePassaggio"
                                    type="number"
                                    placeholder="Ordine"
                                    value={passaggio.ordinePassaggio}
                                    onChange={(e) => handleStepChange(index, e)}
                                    required
                                    readOnly
                                  />
                                </Col>
                              </Row>
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
                    </Col>
                    <Col md={12} lg={6} className="mb-4">
                      <Card>
                        <Card.Img
                          variant="top"
                          src="../../public/assets/piatti/pexels-abdus-salam-1835604653-28587332.jpg"
                          className="cardImageFornitori"
                        />
                        <Card.Body>
                          <Card.Title>Modifica una ricetta</Card.Title>
                          <Button variant="warning">Modifica ricetta</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
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
