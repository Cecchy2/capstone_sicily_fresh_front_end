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

  useEffect(() => {
    dispatch(getRicette());
  }, [dispatch]);

  const firstNumber = Math.floor(Math.random() * 13);
  const secondNumber = firstNumber + 8;

  return (
    <>
      <div className="homePage position-relative">
        <div className="f-lato-thin mx-2">
          <h1 className=" mt-5 text-warning">SCEGLI LE TUE RICETTE</h1>

          <h2 className="mb-3 mb-md-0 ">TI PORTIAMO LA SPESA A CASA</h2>
          <div className="d-flex flex-column flex-md-row align-items-md-center ">
            <p className="f-lato-thin mt-1 fs-3">La registrazione è gratuita</p>
            <Button
              variant="warning"
              className="border border-black ms-md-3"
              onClick={() => navigate("/come-funziona")}
            >
              Come Funziona?
            </Button>
          </div>
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
          <hr className="my-5" />

          <h3 className="my-3">• 🥕 Ingredienti selezionati da fornitori locali •</h3>

          <hr className="my-5" />
        </Container>

        <Container className="mt-5">
          <Row>
            {ricetteList && ricetteList.content && ricetteList.content.length > 0 ? (
              ricetteList.content.slice(firstNumber, secondNumber).map((ricetta, index) => (
                <Col key={index} xs={12} sm={6} md={3} lg={3} className="my-4">
                  <Card
                    className="h-100 shadow-sm border-0 rounded-4 hover-card"
                    onClick={() => alert("Devi registrarti per vedere le ricette 🤪")}
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

export default HomePage;
