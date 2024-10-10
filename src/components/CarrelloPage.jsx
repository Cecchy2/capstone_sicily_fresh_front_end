import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const CarrelloPage = () => {
  const carrelloDettagli = useSelector((state) => state.carrelliDettagli);
  console.log(carrelloDettagli);

  return (
    <div className="paginaCarrello">
      <Container className="mt-5">
        <h1 className="display-6 my-4">CARRELLO:</h1>
        {carrelloDettagli && carrelloDettagli.carrelliDettagli.length > 0 ? (
          carrelloDettagli.carrelliDettagli.map((dettaglio) => (
            <Row key={dettaglio.id} className="mb-4">
              <Col>
                <Card className="carrelloCard shadow-lg p-2">
                  <div className="d-flex align-items-center">
                    <Image
                      src={dettaglio.ricetta.immaginePiatto}
                      fluid
                      width={250}
                      height={150}
                      className="object-fit-contain rounded me-5"
                      alt="Immagine della ricetta"
                    />
                    <div className="d-flex flex-column flex-grow-1">
                      <Card.Body>
                        <Card.Title className="text-center fw-bold mb-3">
                          <h1 className="display-6">{dettaglio.ricetta.titolo}</h1>
                        </Card.Title>
                        <div className="d-flex">
                          <Card.Text>
                            <h3>Quantità: {dettaglio.quantita}</h3>
                          </Card.Text>
                          <Button variant="outline-success" className="align-self-start mx-5">
                            Ordina
                          </Button>
                          <Button variant="outline-danger" className="align-self-start">
                            Rimuovi
                          </Button>
                        </div>

                        <Card.Text className="d-flex">
                          <p>
                            Fornitore: {dettaglio.ricetta.fornitore.nome} {dettaglio.ricetta.fornitore.cognome}
                          </p>
                          <p className="m-auto">Portata: {dettaglio.ricetta.portata}</p>
                        </Card.Text>

                        <Card.Text className="text-muted">
                          <h5>
                            Stato: {dettaglio.statoOrdine === "INCARRELLO" ? "IN CARRELLO" : dettaglio.statoOrdine}
                          </h5>
                        </Card.Text>
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
