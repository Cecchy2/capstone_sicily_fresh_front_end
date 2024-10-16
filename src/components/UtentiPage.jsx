import { useEffect } from "react";
import { getProfile } from "../redux/actions/utentiActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CarouselItems from "./CarouselItems";
import { Card, Col, Container, Row } from "react-bootstrap";
import { findCarrelliDettagliByCarrelloId } from "../redux/actions/carrelloDettaglioActions";
import { GetAbbonamentiByClienteId } from "../redux/actions/abbonamentiActions";

const UtentiPage = () => {
  const utente = useSelector((state) => state.utente);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ricetteList = useSelector((state) => state.ricette.ricette);
  const carrelloId = useSelector((state) => state.carrelli.carrelli[0]?.id);

  useEffect(() => {
    if (params.id) {
      dispatch(getProfile(params.id));
    }
  }, [dispatch, params.id]);

  console.log(ricetteList);

  useEffect(() => {
    if (utente && utente.utente.id) {
      dispatch(GetAbbonamentiByClienteId(utente.utente.id));
    }
  }, [dispatch, utente]);

  useEffect(() => {
    dispatch(findCarrelliDettagliByCarrelloId(carrelloId));
  }, [dispatch, carrelloId]);

  return (
    <>
      <div className="utentiPage">
        <h1>
          <span className="text-warning">Acquista il tuo abbonamento </span>
          <br />
          aggiungi le tue ricette preferite al carrello,
          <br />
          ordinale e ricevi la spesa a casa !!!
        </h1>
      </div>
      <div className="striscia ">
        <CarouselItems />
      </div>
      <div className="middleHome text-center f-lato-thin">
        <Container>
          <Row>
            <hr className="my-5" />
            <h3 className="my-3">• 🥕 Ingredienti selezionati da fornitori locali •</h3>
            <hr className="mt-5 mb-3" />
            {ricetteList && ricetteList.content && ricetteList.content.length > 0 ? (
              ricetteList.content.slice(0, 8).map((ricetta, index) => (
                <Col key={index} xs={12} sm={12} md={3} lg={3} className="">
                  <Card
                    className="shadow-sm border-0 rounded-4 hover-card mt-5 "
                    onClick={() => navigate(`/ricetta/${ricetta.id}`)}
                  >
                    <Card.Img variant="top" src={ricetta.immaginePiatto} className="cardImageFornitori" />
                    <Card.Body>
                      <Card.Title className="fw-bold ">{ricetta.titolo}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <p>Nessuna ricetta al momento.</p>
            )}
            <hr className="my-5" />
            <Col xs={12}>
              <h2>🐟 Le nostre ultime ricette di Pesce</h2>
            </Col>
            {ricetteList && ricetteList.content && ricetteList.content.length > 0 ? (
              ricetteList.content
                .filter((ricetta) => ricetta.tipo === "PESCE")
                .slice(0, 3)
                .map((ricetta, index) => (
                  <Col key={index} xs={12} sm={12} md={4} lg={4} className="mb-5">
                    <Card
                      className="shadow-sm border-0 rounded-4 hover-card mt-5"
                      onClick={() => navigate(`/ricetta/${ricetta.id}`)}
                    >
                      <Card.Img variant="top" src={ricetta.immaginePiatto} className="cardImageFornitori" />
                      <Card.Body>
                        <Card.Title className="fw-bold">{ricetta.titolo}</Card.Title>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
            ) : (
              <p>Nessuna ricetta al momento.</p>
            )}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UtentiPage;
