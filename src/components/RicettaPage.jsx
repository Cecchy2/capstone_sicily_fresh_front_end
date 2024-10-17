import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteRicetta, getRicettaById } from "../redux/actions/ricetteActions";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Button, Col, Container, Form, Image, Modal, Row } from "react-bootstrap";
import { aggiungiCarrelloDettaglio, findCarrelliDettagliByCarrelloId } from "../redux/actions/carrelloDettaglioActions";

const RicettaPage = () => {
  const { ricettaId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [quantita, setQuantita] = useState(1);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const carrelloId = useSelector((state) => state.carrelli.carrelli[0].id);
  console.log(carrelloId);

  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const ricetta = useSelector((state) => state.ricette.ricettaDettaglio);

  const fornitoreId = user.utenteId;

  console.log(user);

  useEffect(() => {
    if (ricettaId) {
      dispatch(getRicettaById(ricettaId));
    }
  }, [dispatch, ricettaId]);

  const handleDelete = (ricettaId) => {
    const confirmDelete = window.confirm("Sei sicuro di voler eliminare questa ricetta?");
    if (confirmDelete) {
      dispatch(deleteRicetta(ricettaId));
      navigate(`/ricette/:${fornitoreId}`);
    }
  };

  const handleAggiungiAlCarrello = (carrelloDettaglioPayload) => {
    carrelloDettaglioPayload = {
      carrello: carrelloId,
      ricetta: ricettaId,
      quantita: quantita,
    };
    dispatch(aggiungiCarrelloDettaglio(carrelloDettaglioPayload));
    dispatch(findCarrelliDettagliByCarrelloId(carrelloId));
    alert("Hai aggiunto le ricette al 🛒");
    navigate(`/utenti/${user.utenteId}`);
    handleClose();
  };

  return (
    <>
      {ricetta && ricetta.immaginePiatto ? (
        <>
          <div>
            <Image
              src={ricetta.immaginePiatto}
              alt="Immagine del piatto"
              height={400}
              className="object-fit-cover w-100"
            />
          </div>
          <Container>
            <Row>
              <Col>
                <h1 className="display-4 my-5">•{ricetta.titolo}•</h1>
                <p>{ricetta.descrizione}</p>
                <>
                  <h4 className="mt-4">Ingredienti</h4>
                  <div className="my-4">
                    {ricetta.ricettaIngredienti.map((item) => (
                      <div key={item.id} className="d-flex align-items-center mb-3" style={{ gap: "1rem" }}>
                        •
                        <Image
                          src={item.ingrediente.immagine}
                          alt={item.ingrediente.nome}
                          roundedCircle
                          height={30}
                          width={30}
                          style={{ objectFit: "cover" }}
                        />
                        <div>
                          <span className="fw-bold">{item.ingrediente.nome}</span> -{" "}
                          <span className="text-muted">{item.quantita}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
                {ricetta.passaggi && ricetta.passaggi.length > 0 ? (
                  ricetta.passaggi.map((passaggio, index) => (
                    <div key={index} className="mt-5">
                      <Badge bg="warning" className="text-dark mb-2">
                        Passaggio {index + 1}:
                      </Badge>
                      <div className="d-flex">
                        <Image
                          src={passaggio.immaginePassaggio}
                          alt="immagine passaggio"
                          width={300}
                          className="object-fit-cover me-4"
                        />
                        <p className="fs-5">{passaggio.descrizione}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Nessun passaggio disponibile per questa ricetta.</p>
                )}
              </Col>
            </Row>
            {isAuthenticated && user.role == "FORNITORE" ? (
              <Button variant="danger" className="my-5" onClick={() => handleDelete(ricetta.id)}>
                Elimina ricetta
              </Button>
            ) : (
              <div>
                <Button variant="warning" className="my-5" onClick={handleShow}>
                  {" "}
                  Aggiungi al carrello
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Scegli la quantità</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>Ricordati che ogni ricetta è per 2 porzioni</p>
                    <Form.Select
                      aria-label="Seleziona la quantità"
                      value={quantita}
                      onChange={(e) => setQuantita(Number(e.target.value))}
                    >
                      {[...Array(10).keys()].map((val) => (
                        <option key={val + 1} value={val + 1}>
                          {val + 1}
                        </option>
                      ))}
                    </Form.Select>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleAggiungiAlCarrello}>
                      Aggiungi a Carrello
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            )}
          </Container>
        </>
      ) : (
        <p>Caricamento in corso o nessuna ricetta trovata...</p>
      )}
    </>
  );
};

export default RicettaPage;
