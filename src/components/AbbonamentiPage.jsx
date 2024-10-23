import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { createCheckoutSession } from "../redux/actions/subscriptionActions";
import { useState } from "react";

const AbbonamentiPage = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const handleSubscription = (priceId) => {
    setLoading(true);
    dispatch(createCheckoutSession(priceId));
  };

  return (
    <div className="abbonamentiPage">
      <Container>
        <Row>
          <h1 className="text-center mt-5 mb-0 titoloAbbonamenti">Scegli il tuo Abbonamento</h1>
          <h2 className="text-center mt-0 mb-5">(Ogni ricetta equivale a 2 porzioni)</h2>
          <Col lg={4}>
            <Card className="cardsAbbonamenti">
              <Card.Body>
                <Card.Title>
                  {" "}
                  <h1 className="m-3 display-5 text-primary">06 RICETTE</h1>
                </Card.Title>
                <Card.Subtitle className="mt-4 text-muted">
                  Ordina fino a 6 ricette, equivalgono a 12 porzioni
                </Card.Subtitle>
                <Card.Text>
                  <div className="d-flex align-items-center">
                    <h2>€</h2>
                    <h1 className="mt-5 prezzo text-success"> 60</h1>
                  </div>
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button
                    className="rounded-pill mt-3 w-50"
                    variant="outline-dark"
                    onClick={() => handleSubscription("price_1QBMhyRtBWiMZPoBvhrdx9AT")}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...
                      </>
                    ) : (
                      "Acquista ora"
                    )}
                  </Button>
                </div>
                <Card.Text>
                  <hr className="mt-5" />
                  <div className="d-flex align-items-center mt-5">
                    <p>Abbonamento base • scegli le tue ricette</p>
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
                  <h1 className="m-3 display-5 text-primary">12 RICETTE</h1>
                </Card.Title>
                <Card.Subtitle className="mt-4 text-muted">
                  Ordina fino a 12 ricette, equivalgono a 24 porzioni
                </Card.Subtitle>
                <Card.Text>
                  <div className="d-flex align-items-center">
                    <h2>€</h2>
                    <h1 className="mt-5 prezzo text-success"> 110</h1>
                  </div>
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button
                    className="rounded-pill mt-3 w-50"
                    variant="outline-dark"
                    onClick={() => handleSubscription("price_1QAYbBRtBWiMZPoBmqPekkR2")}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...
                      </>
                    ) : (
                      "Acquista ora"
                    )}
                  </Button>
                </div>
                <Card.Text>
                  <hr className="mt-5" />
                  <div className="d-flex align-items-center mt-5">
                    <p>Abbonamento medium • risparmi 10€ </p>
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
                  <h1 className="m-3 display-5 text-primary">24 RICETTE</h1>
                </Card.Title>
                <Card.Subtitle className="mt-4 text-muted">
                  Ordina fino a 24 ricette, equivalgono a 48 porzioni
                </Card.Subtitle>
                <Card.Text>
                  <div className="d-flex align-items-center">
                    <h2>€</h2>
                    <h1 className="mt-5 prezzo text-success"> 200</h1>
                  </div>
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button
                    className="rounded-pill mt-3 w-50"
                    variant="outline-dark"
                    onClick={() => handleSubscription("price_1QCGyfRtBWiMZPoBVKE9pyhj")}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        Loading...
                      </>
                    ) : (
                      "Acquista ora"
                    )}
                  </Button>
                </div>
                <Card.Text>
                  <hr className="mt-5" />
                  <div className="d-flex align-items-center mt-5">
                    <p>Abbonamento premium • risparmi 20€ </p>
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
