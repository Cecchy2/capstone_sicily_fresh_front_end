import { useDispatch, useSelector } from "react-redux";
import {
  changeStatoCarrelloDettaglio,
  getCarrelloDettagliFornitore,
  getCarrelloDettaglioByRicetta,
} from "../redux/actions/carrelloDettaglioActions";
import { useEffect } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getRicetteByFornitoreId } from "../redux/actions/ricetteActions";

const CarrelloFornitorePage = () => {
  const dispatch = useDispatch();

  const { fornitoreId } = useParams();

  /* const ricette = useSelector((state) => state.ricette); */
  /* const carrelliDettaglio = useSelector((state) => state.carrelliDettagli); */
  const carrelliDettaglioFornitore = useSelector((state) => state.carrelliDettagli.carrelloDettagliFornitore);

  /* const carrelliDettaglioFornitoreDaSpedire = carrelliDettaglio.carrelliDettagli.filter(
    (carrelloDettaglio) => carrelloDettaglio.statoOrdine !== "INCARRELLO"
  ); */

  const handleChangeStato = (dettaglioId) => {
    const nuovoStatoOrdine = "SPEDITO";
    dispatch(changeStatoCarrelloDettaglio(dettaglioId, nuovoStatoOrdine));
    dispatch(getRicetteByFornitoreId(fornitoreId));
  };

  /* useEffect(() => {
    if (fornitoreId) {
      dispatch(getRicetteByFornitoreId(fornitoreId));
    }
  }, [dispatch, fornitoreId]); */

  /* useEffect(() => {
    if (ricette.ricette.length > 0) {
      ricette.ricette.forEach((ricetta) => {
        dispatch(getCarrelloDettaglioByRicetta(ricetta.id));
      });
    }
  }, [dispatch, ricette]); */

  useEffect(() => {
    if (fornitoreId) {
      dispatch(getCarrelloDettagliFornitore(fornitoreId));
    }
  }, [dispatch, fornitoreId]);

  console.log(carrelliDettaglioFornitore);

  return (
    <div className="paginaCarrello">
      <Container>
        <Row>
          <Col>
            <div>
              <h1 className="display-6 mt-5">ORDINI</h1>
            </div>
          </Col>
        </Row>

        {carrelliDettaglioFornitore && carrelliDettaglioFornitore.length > 0 ? (
          carrelliDettaglioFornitore.map((dettaglio) => (
            <Row key={dettaglio.id} className="mb-4">
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
                      <Card.Body>
                        <div className="d-flex">
                          <Card.Title className="text-center fw-bold ">
                            <h1 className="display-6">
                              {dettaglio.ricetta ? dettaglio.ricetta.titolo : "Titolo non disponibile"}
                            </h1>
                          </Card.Title>
                          <p className="ms-auto">Portata: {dettaglio.ricetta?.portata || "Portata non disponibile"}</p>
                        </div>
                        <Card.Text>
                          <h3 className="m-0">Quantità: {dettaglio.quantita}</h3>
                        </Card.Text>

                        <Card.Text className="d-flex m-0 ">
                          <p>
                            Cliente:{" "}
                            {dettaglio.carrello.cliente
                              ? `${dettaglio.carrello.cliente.nome} ${dettaglio.carrello.cliente.cognome}`
                              : "cliente non disponibile"}
                          </p>

                          <p className="ms-5">
                            Email:
                            {dettaglio.carrello.cliente
                              ? `${dettaglio.carrello.cliente.email} `
                              : "email non disponibile"}
                          </p>
                        </Card.Text>
                        <div className="d-flex">
                          <Card.Text className="text-muted">
                            <h5>
                              Stato:{" "}
                              {dettaglio.statoOrdine === "INCARRELLO"
                                ? "IN CARRELLO"
                                : dettaglio.statoOrdine || "Stato non disponibile"}
                            </h5>
                          </Card.Text>
                          {dettaglio.statoOrdine === "ORDINATO" ? (
                            <Button
                              variant="outline-success"
                              className="align-self-start mx-0 mx-lg-5"
                              onClick={() => handleChangeStato(dettaglio.id)}
                            >
                              Spedisci
                            </Button>
                          ) : (
                            ""
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

export default CarrelloFornitorePage;
