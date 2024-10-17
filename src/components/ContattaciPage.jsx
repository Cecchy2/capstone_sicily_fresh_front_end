import { Col, Container, Image, Row } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

const ContattaciPage = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} className="text-center">
          <h1 className="display-3 mb-4">Contattaci</h1>
          <p className="fs-5 mb-5">
            Hai domande o vuoi maggiori informazioni su come collaborare con <strong>Sicily•Fresh</strong>? Non esitare
            a contattarci tramite i seguenti canali. Saremo felici di aiutarti!
          </p>

          <div className="mb-4">
            <h4 className="fw-bold">Email:</h4>
            <p className="fs-5">
              <a href="mailto:info@sicilyfresh.com" className="text-decoration-none text-dark">
                info@sicilyfresh.com
              </a>
            </p>
          </div>

          <div className="mb-4">
            <h4 className="fw-bold">Indirizzo:</h4>
            <p className="fs-5">Via dei Limoni, 123, Palermo, Sicilia, Italia</p>
          </div>

          <div className="mb-4">
            <h4 className="fw-bold">Telefono:</h4>
            <p className="fs-5">+39 091 1234567</p>
          </div>

          <h4 className="mt-5">Seguici sui social:</h4>
          <div className="d-flex justify-content-center gap-4">
            <a href="https://www.instagram.com" target="_blank" className="fs-3">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com" target="_blank" className="fs-3">
              <FaFacebook />
            </a>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6} className="text-center">
          <h1 className="mt-5 display-4">Sicily•Fresh</h1>
          <Image src="../../public/assets/limoni.svg" width={250} className="mt-3" />
        </Col>
      </Row>
    </Container>
  );
};

export default ContattaciPage;
