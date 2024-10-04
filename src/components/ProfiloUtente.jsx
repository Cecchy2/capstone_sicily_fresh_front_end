import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const ProfiloUtente = () => {
  const utente = useSelector((state) => state.utente);

  console.log(utente);
  return (
    <Container>
      <Row className="mt-2">
        <Col>
          <Card>
            <Card.Header className="d-flex justify-content-center cardImageProfile">
              <Image src={utente.utente.avatar} width={350} roundedCircle fluid />
            </Card.Header>
            <Card.Body className="bg-warning">
              <Card.Title className="text-center">
                {" "}
                <h1 className="display-5">
                  {utente.utente.nome} {utente.utente.cognome}
                </h1>
              </Card.Title>
              <Card.Text className="text-center fs-4">{utente.utente.username}</Card.Text>
              <Card.Text className="text-center fs-5">{utente.utente.dataDiNascita}</Card.Text>
              <div className="d-flex justify-content-center">
                <Button variant="info">Modifica profilo</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default ProfiloUtente;
