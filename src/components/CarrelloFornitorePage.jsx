import { useDispatch, useSelector } from "react-redux";
import { changeStatoCarrelloDettaglio, getCarrelloDettagliFornitore } from "../redux/actions/carrelloDettaglioActions";
import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getRicetteByFornitoreId } from "../redux/actions/ricetteActions";
import Form from "react-bootstrap/Form";

const CarrelloFornitorePage = () => {
  const { fornitoreId } = useParams();
  const [statoFiltro, setStatoFiltro] = useState("Tutti");

  const dispatch = useDispatch();

  const carrelliDettaglioFornitore = useSelector((state) => state.carrelliDettagli.carrelloDettagliFornitore);

  const handleChangeStato = (dettaglioId) => {
    const nuovoStatoOrdine = "SPEDITO";
    dispatch(changeStatoCarrelloDettaglio(dettaglioId, nuovoStatoOrdine));
    dispatch(getRicetteByFornitoreId(fornitoreId));
    dispatch(getCarrelloDettagliFornitore(fornitoreId));
  };

  const handleFilterChange = (e) => {
    setStatoFiltro(e.target.value); // Aggiorna lo stato con il valore selezionato nel filtro
  };

  const filteredCarrelliDettaglio = carrelliDettaglioFornitore.filter((dettaglio) =>
    statoFiltro === "Tutti" ? true : dettaglio.statoOrdine === statoFiltro
  );

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
            <div className="d-flex align-items-center">
              <h1 className="display-6 mt-5">ORDINI</h1>
              <div>
                <Form.Select
                  aria-label="Filtra per stato"
                  className="mt-5 ms-5"
                  onChange={handleFilterChange}
                  value={statoFiltro}
                >
                  <option>Filtra per stato</option>
                  <option value="Tutti">Tutti</option>
                  <option value="ORDINATO">ordinato</option>
                  <option value="SPEDITO">spedito</option>
                  <option value="CONSEGNATO">consegnato</option>
                </Form.Select>
              </div>
            </div>
          </Col>
        </Row>

        {filteredCarrelliDettaglio && filteredCarrelliDettaglio.length > 0 ? (
          filteredCarrelliDettaglio.map((dettaglio) => (
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
