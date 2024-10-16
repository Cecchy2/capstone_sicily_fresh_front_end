import { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Container, Form, Image, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { creaRicetta, getRicetteByFornitoreId } from "../redux/actions/ricetteActions";
import { getProfile } from "../redux/actions/utentiActions";
import { getCarrelloDettaglioByRicetta } from "../redux/actions/carrelloDettaglioActions";

const FornitorePage = () => {
  const { fornitoreId } = useParams();
  const utente = useSelector((state) => state.utente);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [formValues, setFormValues] = useState({
    titolo: "",
    descrizione: "",
    difficolta: "FACILE",
    tempo: "",
    valoriNutrizionali: "",
    fornitoreId: fornitoreId,
    portata: "ANTIPASTO",
    tipo: "CARNE",
    passaggi: [{ descrizione: "", immaginePassaggio: "", ordinePassaggio: 1 }],
    ricetteIngredienti: [{ nome: "", descrizione: "", valoriNutrizionali: "", immagine: "", quantita: "" }],
  });

  const [immaginePiatto, setImmaginePiatto] = useState(null);
  const [immaginiIngredienti, setImmaginiIngredienti] = useState([]);
  const [immaginiPassaggi, setImmaginiPassaggi] = useState([]);

  const ricette = useSelector((state) => state.ricette);
  useEffect(() => {
    if (fornitoreId) {
      dispatch(getRicetteByFornitoreId(fornitoreId));
    }
  }, [dispatch, fornitoreId]);

  useEffect(() => {
    if (ricette.ricette.length > 0) {
      ricette.ricette.forEach((ricetta) => {
        dispatch(getCarrelloDettaglioByRicetta(ricetta.id));
      });
    }
  }, [dispatch, ricette]);

  useEffect(() => {
    if (fornitoreId) {
      dispatch(getProfile(fornitoreId));
    }
  }, [dispatch, fornitoreId]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleImmaginePiattoChange = (e) => {
    setImmaginePiatto(e.target.files[0]);
  };

  const handleIngredientImageChange = (index, e) => {
    const files = [...immaginiIngredienti];
    files[index] = e.target.files[0];
    setImmaginiIngredienti(files);
  };

  const handlePassaggioImageChange = (index, e) => {
    const files = [...immaginiPassaggi];
    files[index] = e.target.files[0];
    setImmaginiPassaggi(files);
  };

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
      ricetteIngredienti: [
        ...formValues.ricetteIngredienti,
        { nome: "", descrizione: "", valoriNutrizionali: "", immagine: "", quantita: "" },
      ],
    });
  };

  const handleIngredientChange = (index, e) => {
    const { name, value } = e.target;
    const newIngredienti = [...formValues.ricetteIngredienti];
    newIngredienti[index][name] = value;
    setFormValues({
      ...formValues,
      ricetteIngredienti: newIngredienti,
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
    console.log(e);
    dispatch(creaRicetta(formValues, immaginePiatto, immaginiPassaggi));
    setShowAlert(true);
    handleClose();
  };

  const handleNavigateRicetteByFornitore = (e) => {
    e.preventDefault();
    navigate(`/ricette/${fornitoreId}`);
  };

  return (
    <div className="fornitoreBG">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-lg border-0 rounded-4 my-5">
              <Card.Body className="p-5">
                <h1 className="display-5 text-center mb-4">Ciao, {utente.utente.nome}!</h1>
                <div className="d-flex flex-column align-items-center">
                  <Image
                    src={utente.utente.avatar}
                    height={300}
                    width={300}
                    object-fit
                    className="rounded-circle border border-3 border-warning shadow object-fit-cover"
                  />
                  <div className="mt-4 text-center">
                    <h3>
                      {utente.utente.nome} {utente.utente.cognome}
                    </h3>
                    <h5 className="text-muted">{utente.utente.email}</h5>
                    <h6 className="badge bg-success p-2 mt-2">{utente.utente.ruolo}</h6>
                  </div>
                </div>
                {showAlert && (
                  <Alert variant="success" onClose={() => setShowAlert(false)} dismissible className="mt-4 text-center">
                    Ricetta creata con successo!
                  </Alert>
                )}
                <div className="text-center mt-5">
                  <Row>
                    <Col md={12} lg={6} className="mb-4">
                      <Card className="h-100 shadow-sm border-0 rounded-4 hover-card ">
                        <Card.Img
                          variant="top"
                          src="../../public/assets/piatti/ortigia-sicily-siracusa-IMG_5334-scaled.jpeg"
                          className="cardImageFornitori"
                        />
                        <Card.Body>
                          <Card.Title className="fw-bold">Crea una ricetta</Card.Title>
                          <Button variant="warning" onClick={handleShow} className="mt-3">
                            Aggiungi Ricetta
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={12} lg={6} className="mb-4">
                      <Card className="h-100 shadow-sm border-0 rounded-4 hover-card">
                        <Card.Img
                          variant="top"
                          src="../../public/assets/piatti/pexels-abdus-salam-1835604653-28587332.jpg"
                          className="cardImageFornitori"
                        />
                        <Card.Body>
                          <Card.Title className="fw-bold">Vai alle tue ricette</Card.Title>
                          <Button variant="warning" className="mt-3" onClick={handleNavigateRicetteByFornitore}>
                            Vai a Ricette
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Aggiungi Ricetta</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formGridTitolo" className="mb-3">
                <Form.Label>Titolo</Form.Label>
                <Form.Control
                  name="titolo"
                  value={formValues.titolo}
                  onChange={handleChange}
                  placeholder="Dai un Titolo"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formGridDescrizione" className="mb-3">
                <Form.Label>Descrizione</Form.Label>
                <Form.Control
                  name="descrizione"
                  value={formValues.descrizione}
                  onChange={handleChange}
                  placeholder="Descrizione"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formGridDifficolta" className="mb-3">
                <Form.Label>Difficoltà</Form.Label>
                <Form.Select name="difficolta" value={formValues.difficolta} onChange={handleChange} required>
                  <option value="FACILE">Facile</option>
                  <option value="MEDIA">Media</option>
                  <option value="DIFFICILE">Difficile</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="formGridTempo" className="mb-3">
                <Form.Label>Tempo di Preparazione</Form.Label>
                <Form.Control
                  name="tempo"
                  value={formValues.tempo}
                  onChange={handleChange}
                  placeholder="Tempo"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formGridValoriNutrizionali" className="mb-3">
                <Form.Label>Valori Nutrizionali</Form.Label>
                <Form.Control
                  name="valoriNutrizionali"
                  value={formValues.valoriNutrizionali}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formGridPortata" className="mb-3">
                <Form.Label>Portata</Form.Label>
                <Form.Select name="portata" value={formValues.portata} onChange={handleChange} required>
                  <option value="ANTIPASTO">Antipasto</option>
                  <option value="PRIMO">Primo</option>
                  <option value="SECONDO">Secondo</option>
                  <option value="DOLCE">Dolce</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="formGridTipo" className="mb-3">
                <Form.Label>Tipo</Form.Label>
                <Form.Select name="tipo" value={formValues.tipo} onChange={handleChange} required>
                  <option value="CARNE">Carne</option>
                  <option value="PESCE">Pesce</option>
                  <option value="VEGETALI">Vegetali</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="formImmaginePiatto" className="mb-3">
                <Form.Label>Immagine piatto (Opzionale)</Form.Label>
                <Form.Control
                  type="file"
                  name="immaginePiatto"
                  onChange={handleImmaginePiattoChange}
                  accept="image/*"
                />
              </Form.Group>

              <h5>Ingredienti</h5>

              {formValues.ricetteIngredienti?.map((ingrediente, index) => (
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
                      type="file"
                      name="immagineIngrediente"
                      onChange={(e) => handleIngredientImageChange(index, e)}
                      accept="image/*"
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
              <Button variant="secondary" onClick={handleAddIngredient} className="mt-2">
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
                      type="file"
                      name="immaginePassaggio"
                      onChange={(e) => handlePassaggioImageChange(index, e)}
                      accept="image/*"
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
              <Button variant="secondary" onClick={handleAddStep} className="mt-2">
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
      </Container>
    </div>
  );
};

export default FornitorePage;
