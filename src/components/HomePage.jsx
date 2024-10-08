import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRicette } from "../redux/actions/ricetteActions";
import CarouselItems from "./CarouselItems";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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
      <div className="homePage">
        <Container className="my-5">
          <Row className="justify-content-center text-center text-md-start">
            <Col className="ms-5">
              <h1 className="display-5">ACQUISTA IL TUO ABBONAMENTO</h1>
              <div className="d-flex flex-column flex-md-row align-items-md-center ">
                <h2 className="mb-3 mb-md-0 ms-5">SCEGLI LE TUE RICETTE</h2>
                <Button variant="warning" className="border border-black ms-md-5">
                  Vai ad abbonamenti
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="striscia mt-4">
        <CarouselItems />
      </div>
      <hr className="border border-5 mt-4" />
      <div className="middleHome mt-4">
        <Container>
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
        </Container>
      </div>
    </>
  );
};

export default HomePage;
