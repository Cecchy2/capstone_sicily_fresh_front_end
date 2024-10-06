import { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getRicetteByFornitoreId } from "../redux/actions/ricetteActions";

const RicetteFornitorePage = () => {
  const { fornitoreId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const ricette = useSelector((state) => state.ricette);

  console.log(ricette);

  useEffect(() => {
    if (fornitoreId) {
      dispatch(getRicetteByFornitoreId(fornitoreId));
    }
  }, [dispatch, fornitoreId]);

  return (
    <Container>
      <Row className="mt-5">
        {ricette && ricette.ricette && ricette.ricette.length > 0 ? (
          ricette.ricette.map((ricetta, index) => (
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
  );
};

export default RicetteFornitorePage;
