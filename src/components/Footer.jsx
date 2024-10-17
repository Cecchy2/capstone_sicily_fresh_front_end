import { Col, Container, Image, Nav, Row } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-dark text-white py-5">
      <Container>
        <Row className="text-center text-md-start">
          <Col xs={12} md={4} className="mb-4">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start">
              <Image src="../../public/assets/limoni.svg" alt="Logo limoni" width={40} fluid className="me-2" />
              <h5>Sicily•Fresh</h5>
            </div>
          </Col>

          <Col xs={12} sm={4} md={2} className="mb-4">
            <h6 className="text-warning">Prodotti</h6>
            <p className="mb-0 ">Le Nostre Box</p>
            <p className="mb-0 text-secondary">Ingredienti Freschi</p>
            <p className="mb-0">Ricette Siciliane</p>
            <p className="mb-0 text-secondary">Cucina a Casa</p>
            <p className="mb-0">Offerte Speciali</p>
          </Col>

          <Col xs={12} sm={4} md={2} className="mb-4">
            <h6 className="text-warning">Fornitori</h6>
            <p className="mb-0">Diventa Fornitore</p>
            <p className="mb-0">Gestisci Ricette</p>
            <p className="mb-0">Spedizioni e Consegne</p>
            <p className="mb-0 text-secondary">Partner e Collaborazioni</p>
          </Col>

          <Col xs={12} sm={4} md={3}>
            <h6 className="text-warning">Aiuto</h6>
            <p className="mb-0">Come Funziona</p>
            <p className="mb-0 text-secondary">Domande Frequenti</p>
            <p className="mb-0">Contattaci</p>
            <p className="mb-0 text-secondary">Supporto Clienti</p>

            <div className="d-flex justify-content-center justify-content-md-start mt-3">
              <Nav.Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-3"
              >
                <FaInstagram size={20} />
              </Nav.Link>
              <Nav.Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white me-3"
              >
                <FaSquareFacebook size={20} />
              </Nav.Link>
              <Nav.Link href="mailto:info@sicilyfresh.com" className="text-white">
                <MdOutlineEmail size={20} />
              </Nav.Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
