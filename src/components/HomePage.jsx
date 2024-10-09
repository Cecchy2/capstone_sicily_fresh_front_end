import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRicette } from "../redux/actions/ricetteActions";
import CarouselItems from "./CarouselItems";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MdFoodBank } from "react-icons/md";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ricetteList = useSelector((state) => state.ricette.ricette);

  console.log(ricetteList);

  useEffect(() => {
    dispatch(getRicette());
  }, [dispatch]);

  return (
    <>
      <div className="utentiPage">
        <div className="f-lato-thin">
          <h1 className=" mt-5">SCEGLI LE TUE RICETTE</h1>
          <div className="d-flex flex-column flex-md-row align-items-md-center ">
            <h2 className="mb-3 mb-md-0 ">TI PORTIAMO LA SPESA A CASA</h2>
            <Button
              variant="warning"
              className="border border-black ms-md-5"
              onClick={() => navigate("/registrazione")}
            >
              Registrati subito
            </Button>
          </div>
          <p className="f-lato-thin mt-1 fs-3">Registrati Ora e Ricevi uno Sconto del 10% sul Primo Acquisto</p>
        </div>
      </div>

      <div className="striscia">
        <CarouselItems />
      </div>

      <div className="middleHome text-center f-lato-thin">
        <Container>
          <Row>
            <Col className="mt-3  mx-auto cardHome">
              <h2 className="mt-5">Scopri le Migliori Ricette Siciliane!</h2>
              <p>
                Acquista ricette gourmet e ricevi a casa tua gli ingredienti sottovuoto, pronti per essere utilizzati.
                Ingredienti selezionati da fornitori locali!
              </p>
              <Button
                variant="warning"
                className="border border-black ms-md-5"
                onClick={() => navigate("/registrazione")}
              >
                Registrati e vai alle Ricette <MdFoodBank size={30} />
              </Button>
            </Col>
          </Row>
        </Container>
        <Container className="mt-5 bg-warning">
          <Row>
            {ricetteList && ricetteList.content && ricetteList.content.length > 0 ? (
              ricetteList.content.slice(0, 4).map((ricetta, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={3} className="my-4">
                  <Card className="h-100 shadow-sm border-0 rounded-4 hover-card">
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

export default HomePage;

{
  /* <Container>
          <Row>
            {ricetteList && ricetteList.content && ricetteList.content.length > 0 ? (
              ricetteList.content.map((ricetta, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <Card
                    className="h-100 shadow-sm border-0 rounded-4 hover-card"
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
              <p>No recipes available at the moment.</p>
            )}
          </Row>
        </Container> */
}
