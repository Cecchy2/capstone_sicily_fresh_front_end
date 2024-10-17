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
            <Nav.Link href="/" className="mb-0 text-white p-0">
              Le Nostre Ricette
            </Nav.Link>
            <Nav.Link href="" className="mb-0 text-secondary p-0">
              Ingredienti Freschi
            </Nav.Link>
            <Nav.Link href="" className="mb-0 text-secondary p-0">
              Ricette Siciliane
            </Nav.Link>
            <Nav.Link href="" className="mb-0 text-secondary p-0">
              Cucina a Casa
            </Nav.Link>
            <Nav.Link href="" className="mb-0 text-secondary p-0">
              Offerte Speciali
            </Nav.Link>
          </Col>

          <Col xs={12} sm={4} md={2} className="mb-4">
            <h6 className="text-warning">Fornitori</h6>
            <Nav.Link href="/fornitori" className="mb-0 text-white p-0">
              Diventa Fornitore
            </Nav.Link>
            <Nav.Link href="" className="mb-0 text-secondary p-0">
              Gestisci Ricette
            </Nav.Link>
            <Nav.Link href="https://www.fedex.com/it-it/home.html" className="mb-0 text-white p-0">
              Spedizioni e Consegne
            </Nav.Link>
            <Nav.Link href="" className="mb-0 text-secondary p-0">
              Partner e Collaborazioni
            </Nav.Link>
          </Col>

          <Col xs={12} sm={4} md={3}>
            <h6 className="text-warning">Aiuto</h6>
            <Nav.Link href="/come-funziona" className="mb-0 text-white p-0">
              Come Funziona
            </Nav.Link>
            <Nav.Link href="" className="mb-0 text-secondary p-0">
              Domande Frequenti
            </Nav.Link>
            <Nav.Link href="/contattaci" className="mb-0 text-white p-0">
              Contattaci
            </Nav.Link>
            <Nav.Link href="/contattaci" className="mb-0 text-secondary p-0">
              Supporto Clienti
            </Nav.Link>

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
