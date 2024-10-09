import { Button, Card, Col, Container, Row } from "react-bootstrap";

const AbbonamentiPage = () => {
  return (
    <div className="abbonamentiPage">
      <Container>
        <Row>
          <h1 className="text-center mt-5">Scegli il tuo Abbonamento</h1>
          <Col>
            <Card className="cardsAbbonamenti">
              <Card.Body>
                <Card.Title>Abbonamento 6 ricette</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Ordina fino a 6 ricette, equivalgono a 12 porzioni
                </Card.Subtitle>
                <Card.Text>
                  <h1>46</h1>
                </Card.Text>
                <Button className="rounded-pill"> Acquista ora</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="cardsAbbonamenti">
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="cardsAbbonamenti">
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AbbonamentiPage;
