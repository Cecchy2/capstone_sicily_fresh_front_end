import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRicette } from "../redux/actions/ricetteActions";
import CarouselItems from "./CarouselItems";
import { Card, Col, Container, Row } from "react-bootstrap";

const HomePage = () => {
  const dispatch = useDispatch();
  const ricetteList = useSelector((state) => state.ricette.ricette);

  console.log(ricetteList);

  useEffect(() => {
    dispatch(getRicette());
  }, [dispatch]);

  return (
    <>
      <div className="homePage"></div>
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
                  <Card className="h-100 shadow-sm border-0 rounded-4 hover-card">
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
