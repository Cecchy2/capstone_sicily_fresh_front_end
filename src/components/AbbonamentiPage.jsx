import { Button, Card, Col, Container, Row } from "react-bootstrap";

const AbbonamentiPage = () => {
  return (
    <div className="abbonamentiPage">
      <Container>
        <Row>
          <h1 className="text-center my-5 titoloAbbonamenti">Scegli il tuo Abbonamento</h1>
          <Col lg={4}>
            <Card className="cardsAbbonamenti">
              <Card.Body>
                <Card.Title>
                  {" "}
                  <h1 className="m-3 display-5">6 RICETTE</h1>
                </Card.Title>
                <Card.Subtitle className="mt-4 text-muted">
                  Ordina fino a 6 ricette, equivalgono a 12 porzioni
                </Card.Subtitle>
                <Card.Text>
                  <div className="d-flex align-items-center">
                    <h2>€</h2>
                    <h1 className="mt-5 prezzo"> 46</h1>
                  </div>
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button className="rounded-pill mt-3 w-50" variant="outline-dark">
                    {" "}
                    Acquista ora
                  </Button>
                </div>
                <Card.Text>
                  <hr className="mt-5" />
                  <div className="d-flex align-items-center mt-5">
                    <p>Abbonamento base • risparmi tempo </p>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="cardsAbbonamenti">
              <Card.Body>
                <Card.Title>
                  {" "}
                  <h1 className="m-3 display-5">12 RICETTE</h1>
                </Card.Title>
                <Card.Subtitle className="mt-4 text-muted">
                  Ordina fino a 6 ricette, equivalgono a 24 porzioni
                </Card.Subtitle>
                <Card.Text>
                  <div className="d-flex align-items-center">
                    <h2>€</h2>
                    <h1 className="mt-5 prezzo"> 80</h1>
                  </div>
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button className="rounded-pill mt-3 w-50" variant="outline-dark">
                    {" "}
                    Acquista ora
                  </Button>
                </div>
                <Card.Text>
                  <hr className="mt-5" />
                  <div className="d-flex align-items-center mt-5">
                    <p>Abbonamento medium • risparmi 12€ sul totale </p>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="cardsAbbonamenti">
              <Card.Body>
                <Card.Title>
                  {" "}
                  <h1 className="m-3 display-5">24 RICETTE</h1>
                </Card.Title>
                <Card.Subtitle className="mt-4 text-muted">
                  Ordina fino a 6 ricette, equivalgono a 48 porzioni
                </Card.Subtitle>
                <Card.Text>
                  <div className="d-flex align-items-center">
                    <h2>€</h2>
                    <h1 className="mt-5 prezzo"> 150</h1>
                  </div>
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button className="rounded-pill mt-3 w-50" variant="outline-dark">
                    {" "}
                    Acquista ora
                  </Button>
                </div>
                <Card.Text>
                  <hr className="mt-5" />
                  <div className="d-flex align-items-center mt-5">
                    {/* <p>🥕 Ingredienti selezionati da fornitori locali</p> */}
                    <p>Abbonamento premium • risparmi 22€ sul totale •</p>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AbbonamentiPage;
