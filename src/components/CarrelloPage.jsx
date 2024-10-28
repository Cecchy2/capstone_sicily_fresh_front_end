import { Badge, Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStatoCarrelloDettaglio,
  deleteCarrelloDettaglio,
  findCarrelliDettagliByCarrelloId,
} from "../redux/actions/carrelloDettaglioActions";
import { useEffect } from "react";
import { GetAbbonamentiByClienteId } from "../redux/actions/abbonamentiActions";
import { useNavigate } from "react-router-dom";
import { creaCarrello, getCarrelloByClienteId } from "../redux/actions/carrelloAction";
import { getRicette } from "../redux/actions/ricetteActions";

const CarrelloPage = () => {
  const carrelloDettagli = useSelector((state) => state.carrelliDettagli);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const carrello = useSelector((state) => state.carrello);

  const abbonamenti = useSelector((state) => state.abbonamenti.abbonamenti || []);

  const handleDeleteCarrelloDettaglio = (dettaglioId) => {
    dispatch(deleteCarrelloDettaglio(dettaglioId)).then(() => dispatch(findCarrelliDettagliByCarrelloId(carrello.id)));
    navigate(`/utenti/${user.utenteId}`);
  };
  useEffect(() => {
    if (isAuthenticated && user && user.utenteId) {
      dispatch(getCarrelloByClienteId(user.utenteId)).then(() => {
        if (!carrello || !carrello.id) {
          dispatch(creaCarrello(user.utenteId));
        }
      });
    }
  }, [isAuthenticated, user, dispatch, carrello]);

  const handleChangeStato = (dettaglioId) => {
    const nuovoStatoOrdine = "ORDINATO";
    alert("Hai ordinato le ricette  🍽️");
    dispatch(changeStatoCarrelloDettaglio(dettaglioId, nuovoStatoOrdine)).then(() =>
      dispatch(findCarrelliDettagliByCarrelloId(carrello.id))
    );

    navigate(`/utenti/${user.utenteId}`);
  };

  useEffect(() => {
    if (user && user.utenteId) {
      dispatch(GetAbbonamentiByClienteId(user.utenteId));
    }
  }, [dispatch, user]);

  useEffect(() => {
    dispatch(getRicette());
  }, [dispatch]);

  const numeroRicetteRimanenti = abbonamenti
    .map((abbonamento) => abbonamento.numeroRicette)
    .reduce((total, ricette) => total + ricette, 0);

  return (
    <div className="paginaCarrello pb-5">
      <Container>
        <Row>
          <Col>
            <div>
              <h1 className="display-5 mt-5">IL TUO CARRELLO</h1>

              <h2 className=" ms-auto">
                Il tuo saldo ricette disponibili: <Badge bg="dark">{numeroRicetteRimanenti}</Badge>
              </h2>
            </div>
          </Col>
        </Row>

        {carrelloDettagli && carrelloDettagli.carrelliDettagli.length > 0 ? (
          (user.role === "CLIENTE"
            ? carrelloDettagli.carrelliDettagli.filter((dettaglio) => dettaglio.statoOrdine === "INCARRELLO")
            : carrelloDettagli.carrelliDettagli
          ).map((dettaglio) => (
            <Row key={dettaglio.id} className="mt-4">
              <Col>
                <Card className="carrelloCard shadow-lg ">
                  <div className="d-flex align-items-center">
                    {dettaglio.ricetta && dettaglio.ricetta.immaginePiatto ? (
                      <Image
                        src={dettaglio.ricetta.immaginePiatto}
                        fluid
                        width={250}
                        height={150}
                        className="object-fit-contain rounded me-4 ms-3"
                        alt="Immagine della ricetta"
                      />
                    ) : (
                      <Image
                        src="defaultImage.jpg"
                        fluid
                        width={250}
                        height={150}
                        className="object-fit-contain rounded me-5"
                        alt="Default immagine"
                      />
                    )}

                    <div className="d-flex flex-column flex-grow-1">
                      <Card.Body className="p-0">
                        <div className="d-flex">
                          <Card.Title className="text-center fw-bold ">
                            <h1>{dettaglio.ricetta ? dettaglio.ricetta.titolo : "Titolo non disponibile"}</h1>
                          </Card.Title>
                          <p className="ms-auto mt-3">
                            Portata:{" "}
                            <Badge bg="warning">{dettaglio.ricetta?.portata || "Portata non disponibile"}</Badge>
                          </p>
                        </div>
                        <Card.Text className="m-0 fs-4">
                          <p className="m-0 fs-4">
                            Quantità: <Badge bg="warning"> {dettaglio.quantita}</Badge>
                          </p>
                        </Card.Text>

                        <Card.Text className="d-flex m-0">
                          <p className="m-0 fs-4">
                            Fornitore:{" "}
                            {dettaglio.ricetta?.fornitore
                              ? `${dettaglio.ricetta.fornitore.nome} ${dettaglio.ricetta.fornitore.cognome}`
                              : "Fornitore non disponibile"}
                          </p>
                        </Card.Text>
                        <div className="d-flex">
                          <Card.Text className="text-muted">
                            <h5>
                              Stato:{" "}
                              {dettaglio.statoOrdine === "INCARRELLO"
                                ? "PRENOTATA"
                                : dettaglio.statoOrdine || "Stato non disponibile"}
                            </h5>
                          </Card.Text>
                          {dettaglio.statoOrdine === "INCARRELLO" && (
                            <div>
                              <Button
                                variant="outline-success"
                                className="align-self-start mx-0 mx-lg-5"
                                onClick={() => handleChangeStato(dettaglio.id)}
                              >
                                Ordina
                              </Button>
                              <Button
                                variant="outline-danger"
                                className="align-self-start"
                                onClick={() => handleDeleteCarrelloDettaglio(dettaglio.id)}
                              >
                                Rimuovi
                              </Button>
                            </div>
                          )}
                        </div>
                      </Card.Body>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          ))
        ) : (
          <p className="text-center">Il carrello è vuoto.</p>
        )}
      </Container>
    </div>
  );
};

export default CarrelloPage;
