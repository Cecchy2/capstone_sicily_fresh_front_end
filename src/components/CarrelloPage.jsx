import { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { findCarrelliDettagliByCarrelloId } from "../redux/actions/carrelloDettaglioActions";

const CarrelloPage = () => {
  const dispatch = useDispatch();

  const carrelloId = useSelector((state) => state.carrelli.carrelli[0].id);
  const carrelloDettagli = useSelector((state) => state.carrelliDettagli);
  console.log(carrelloDettagli);

  useEffect(() => {
    dispatch(findCarrelliDettagliByCarrelloId(carrelloId));
  }, [dispatch, carrelloId]);

  return (
    <div className="paginaCarrello">
      <Container>
        <h2 className="mb-4 ">Il tuo Carrello</h2>

        <Row>
          {carrelloDettagli && carrelloDettagli.carrelliDettagli.length > 0 ? (
            carrelloDettagli.carrelliDettagli.map((dettaglio) => (
              <Col key={dettaglio.id} className="mb-4">
                <Card>
                  <Card.Img
                    variant="top"
                    src={dettaglio.ricetta.immaginePiatto}
                    alt={dettaglio.ricetta.titolo}
                    width={15}
                    style={{ objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title>{dettaglio.ricetta.titolo}</Card.Title>
                    <Card.Text>Quantità: {dettaglio.quantita}</Card.Text>
                    <Button variant="danger">Rimuovi</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p>Il carrello è vuoto.</p>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default CarrelloPage;
