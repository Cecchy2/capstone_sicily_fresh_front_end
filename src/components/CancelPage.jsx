import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CancelPage = () => {
  const navigate = useNavigate();

  return (
    <Container className="vh-100">
      <Row>
        <Col className="mt-5">
          <h3 className="text-danger mt-5 text-center">Mi dispiace, il pagamento non è andato a buon fine</h3>
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

export default CancelPage;
