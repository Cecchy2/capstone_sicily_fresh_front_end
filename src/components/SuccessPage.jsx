import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { creaAbbonamento } from "../redux/actions/abbonamentiActions";
import { useEffect, useState } from "react";

const SuccessPage = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { price } = useParams();
  const dispatch = useDispatch();

  const [abbonamentoCreato, setAbbonamentoCreato] = useState(false);

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

  useEffect(() => {
    if (isAuthenticated && !abbonamentoCreato) {
      if (price === "price_1QBMhyRtBWiMZPoBvhrdx9AT") {
        dispatch(creaAbbonamento(payloadSei));
        setAbbonamentoCreato(true);
      } else if (price === "price_1QAYbBRtBWiMZPoBmqPekkR2") {
        dispatch(creaAbbonamento(payloadDodici));
        setAbbonamentoCreato(true);
      } else if (price === "price_1QCGyfRtBWiMZPoBVKE9pyhj") {
        dispatch(creaAbbonamento(payloadVentiquattro));
        setAbbonamentoCreato(true);
      } else {
        window.alert("Devi registrarti per acquistare un abbonamento");
      }
    }
  }, [dispatch, isAuthenticated, price, abbonamentoCreato, payloadSei, payloadDodici, payloadVentiquattro]);

  return (
    <Container className="vh-100">
      <Row>
        <Col className="mt-5">
          <h3 className="text-success mt-5 text-center">
            Complimenti, hai acquistato il tuo abbonamento con successo!
          </h3>
          <div className="d-flex justify-content-center mt-5">
            {" "}
            <Button variant="warning" onClick={() => navigate("/allRicettePage")}>
              Vai alle ricette
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SuccessPage;
