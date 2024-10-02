import { Badge, Button, Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Image src="../../public/assets/limoni.svg" alt="Logo limoni" width={40} fluid />
          <Navbar.Brand href="#home">Sicily-Fresh</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/chi-siamo">
                  Chi Siamo
                </Nav.Link>
                <Nav.Link as={Link} to="/ricette">
                  Ricette
                </Nav.Link>
                <Nav.Link as={Link} to="/menu">
                  Menù
                </Nav.Link>
                <div className="position-relative mx-4 cart">
                  <HiMiniShoppingCart fill="black" size={30} />
                  <Badge pill bg="danger" className="position-absolute top-0 start-90 translate-middle">
                    3
                  </Badge>
                </div>
                <NavDropdown title="info" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Chi Siamo</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Come Funziona</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Contattaci</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Fornitori</NavDropdown.Item>
                </NavDropdown>
              </Nav>

              <Button variant="outline-warning" onClick={() => navigate(`/login`)}>
                Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Topbar;
