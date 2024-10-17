import { Col, Container, Image, Row } from "react-bootstrap";

const ContattaciPage = () => {
  return (
    <Container>
      <Row>
        <h2 className="mt-5">I Nostri Contatti:</h2>
        <h4>Email:</h4>
        <h4>Indirizzo: </h4>
        <h4>Telefono</h4>
        <Col>
          <div className="d-flex  align-items-center vh-100 flex-column">
            <h1 className="mt-5 text-center display-2 ps-5">Sicily•Fresh</h1>
            <Image src="../../public/assets/limoni.svg" width={400} className=" ms-5 " />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContattaciPage;
