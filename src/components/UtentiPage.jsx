import { useEffect } from "react";
import { getProfile } from "../redux/actions/utentiActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CarouselItems from "./CarouselItems";
import { Card, Col, Container, Row } from "react-bootstrap";

const UtentiPage = () => {
  const utente = useSelector((state) => state.utente);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(params);
  const ricetteList = useSelector((state) => state.ricette.ricette);

  useEffect(() => {
    if (params.id) {
      dispatch(getProfile(params.id));
    }
  }, [dispatch, params.id]);

  console.log(utente);

  return (
    <>
      <div className="utentiPage"></div>
      <div className="striscia ">
        <CarouselItems />
      </div>
      <div className="middleHome text-center f-lato-thin">
        <Container className="mt-5 bg-warning">
          <Row>
            {ricetteList && ricetteList.content && ricetteList.content.length > 0 ? (
              ricetteList.content.map((ricetta, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={3} className="my-4">
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
              <p>Nessuna ricetta al momento.</p>
            )}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UtentiPage;
