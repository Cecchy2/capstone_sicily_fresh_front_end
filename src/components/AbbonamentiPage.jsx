import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { creaAbbonamento } from "../redux/actions/abbonamentiActions";

const AbbonamentiPage = () => {
  const utente = useSelector((state) => state.utente);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const oggi = new Date();
  const prossimoAnno = new Date(oggi.setFullYear(oggi.getFullYear() + 1)).toISOString().split("T")[0];

  const payloadSei = {
    nome: "6 Ricette",
    numeroRicette: 6,
    prezzo: 46.0,
    dataInizio: new Date().toISOString().split("T")[0],
    dataScadenza: prossimoAnno,
    cliente: user.utenteId,
  };
  const payloadDodici = {
    nome: "12 Ricette",
    numeroRicette: 12,
    prezzo: 80.0,
    dataInizio: new Date().toISOString().split("T")[0],
    dataScadenza: prossimoAnno,
    cliente: user.utenteId,
  };
  const payloadVentiquattro = {
    nome: "24 Ricette",
    numeroRicette: 24,
    prezzo: 150.0,
    dataInizio: new Date().toISOString().split("T")[0],
    dataScadenza: prossimoAnno,
    cliente: user.utenteId,
  };

  const handleclickSei = () => {
    if (isAuthenticated) {
      dispatch(creaAbbonamento(payloadSei));
    } else {
      window.alert("Devi registrarti per acquistare un abbonamento");
    }
  };
  const handleclickDodici = () => {
    if (isAuthenticated) {
      dispatch(creaAbbonamento(payloadDodici));
    } else {
      window.alert("Devi registrarti per acquistare un abbonamento");
    }
  };
  const handleclickVentiquattro = () => {
    if (isAuthenticated) {
      dispatch(creaAbbonamento(payloadVentiquattro));
    } else {
      window.alert("Devi registrarti per acquistare un abbonamento");
    }
  };

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
                  <h1 className="m-3 display-5 text-primary">6 RICETTE</h1>
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
                  <Button className="rounded-pill mt-3 w-50" variant="outline-dark" onClick={handleclickSei}>
                    {" "}
                    Acquista ora
                  </Button>
                </div>
                <Card.Text>
                  <hr className="mt-5" />
                  <div className="d-flex align-items-center mt-5">
                    <p>Abbonamento base </p>
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
                    <h1 className="mt-5 prezzo"> 80</h1>
                  </div>
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button className="rounded-pill mt-3 w-50" variant="outline-dark" onClick={handleclickDodici}>
                    {" "}
                    Acquista ora
                  </Button>
                </div>
                <Card.Text>
                  <hr className="mt-5" />
                  <div className="d-flex align-items-center mt-5">
                    <p>Abbonamento medium • risparmi 12€ </p>
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
                    <h1 className="mt-5 prezzo"> 150</h1>
                  </div>
                </Card.Text>
                <div className="d-flex justify-content-center">
                  <Button className="rounded-pill mt-3 w-50" variant="outline-dark" onClick={handleclickVentiquattro}>
                    {" "}
                    Acquista ora
                  </Button>
                </div>
                <Card.Text>
                  <hr className="mt-5" />
                  <div className="d-flex align-items-center mt-5">
                    {/* <p>🥕 Ingredienti selezionati da fornitori locali</p> */}
                    <p>Abbonamento premium • risparmi 22€ </p>
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
