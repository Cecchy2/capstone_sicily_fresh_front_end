import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const CarrelloPage = () => {
  const carrelloDettagli = useSelector((state) => state.carrelliDettagli);
  console.log(carrelloDettagli);

  return (
    <div className="paginaCarrello">
      <Container className="mt-5">
        <h1 className="display-6 my-4">IL TUO CARRELLO:</h1>
        {carrelloDettagli && carrelloDettagli.carrelliDettagli.length > 0 ? (
          carrelloDettagli.carrelliDettagli.map((dettaglio) => (
            <Row key={dettaglio.id} className="mb-4">
              <Col>
                <Card className="carrelloCard shadow-lg p-2">
                  <div className="d-flex align-items-center">
                    {dettaglio.ricetta && dettaglio.ricetta.immaginePiatto ? (
                      <Image
                        src={dettaglio.ricetta.immaginePiatto}
                        fluid
                        width={250}
                        height={150}
                        className="object-fit-contain rounded me-5"
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
                        <Card.Title className="text-center fw-bold">
                          <h1 className="display-6">
                            {dettaglio.ricetta ? dettaglio.ricetta.titolo : "Titolo non disponibile"}
                          </h1>
                        </Card.Title>

                        <Card.Text>
                          <h3 className="m-0">Quantità: {dettaglio.quantita}</h3>
                        </Card.Text>

                        <Card.Text className="d-flex m-0">
                          <p>
                            Fornitore:{" "}
                            {dettaglio.ricetta?.fornitore
                              ? `${dettaglio.ricetta.fornitore.nome} ${dettaglio.ricetta.fornitore.cognome}`
                              : "Fornitore non disponibile"}
                          </p>
                          <p className="ms-auto">Portata: {dettaglio.ricetta?.portata || "Portata non disponibile"}</p>
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
                          <Button variant="outline-success" className="align-self-start mx-0 mx-lg-5">
                            Ordina
                          </Button>
                          <Button variant="outline-danger" className="align-self-start">
                            Rimuovi
                          </Button>
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
