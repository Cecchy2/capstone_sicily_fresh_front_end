import { Button, Card, Col, Container, Form, Image, Row } from "react-bootstrap";

const CarrelloPage = () => {
  return (
    <Container className="mt-5">
      <h2 className="mb-4">Il tuo Carrello</h2>

      <Card className="mb-3">
        <Row className="g-0 align-items-center">
          <Col md={4}>
            <Image src="../../public/assets/istockphoto-1316968335-1024x1024.jpg" fluid className="p-3" />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>Titolo</Card.Title>
              <Card.Text>Prezzo: €40</Card.Text>
              <Card.Text>
                Porzioni per:{" "}
                <Form.Control type="number" min="2" step="2" style={{ width: "100px", display: "inline-block" }} />
                persone
              </Card.Text>
              <Button variant="danger">Rimuovi</Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>

      <p>Il tuo carrello è vuoto.</p>
    </Container>
  );
};

export default CarrelloPage;
