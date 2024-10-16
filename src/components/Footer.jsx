import { Col, Container, Image, Nav, Row } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-dark text-white">
      <Container>
        <Row>
          <div className="d-flex my-5">
            <Col xs={5} className="footerLogo">
              <Image src="../../public/assets/limoni.svg" alt="Logo limoni" width={40} fluid />
              Sicily•Fresh
            </Col>
            <Col xs={2}>
              <p className="mb-0 mt-5 text-warning">Prodotti</p>
              <p className="mb-0">Overview</p>
              <p className="mb-0">Fetaures</p>
              <p className="mb-0">Solutions</p>
              <p className="mb-0">Tutorials</p>
              <p className="mb-0">Pricing</p>
              <p className="mb-0">Release</p>
            </Col>
            <Col xs={2}>
              <p className="mb-0 mt-5 text-warning">Fornitori</p>
              <p className="mb-0">About us</p>
              <p className="mb-0">Careers</p>
              <p className="mb-0">Press</p>
              <p className="mb-0">News</p>
              <p className="mb-0">Media kit</p>
              <p className="mb-0">Contact</p>
            </Col>
            <Col xs={2}>
              <p className="mb-0 mt-5 text-warning">Risorse</p>
              <p className="mb-0">Blog</p>
              <p className="mb-0">NewsLetter</p>
              <p className="mb-0">Events</p>
              <p className="mb-0">Help Center</p>
              <p className="mb-0">Tutorials</p>
              <p className="mb-0">Support</p>
              <div className="d-flex">
                <div className="me-2">
                  <Nav.Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </Nav.Link>
                </div>
                <div className="me-2">
                  <Nav.Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaSquareFacebook />
                  </Nav.Link>
                </div>
                <div>
                  <Nav.Link href="mailto:tuoemail@example.com">
                    <MdOutlineEmail />
                  </Nav.Link>
                </div>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
