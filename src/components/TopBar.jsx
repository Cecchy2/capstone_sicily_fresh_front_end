import { Badge, Button, Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { HiMiniShoppingCart } from "react-icons/hi2";

const Topbar = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Image src="../../public/assets/limoni.svg" alt="Logo limoni" width={40} fluid />
          <Navbar.Brand href="#home">Sicily-Fresh</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Ricette</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <div className="position-relative mx-3">
                <HiMiniShoppingCart fill="black" size={30} />
                <Badge pill bg="danger" className="position-absolute top-0 start-90 translate-middle">
                  3
                </Badge>
              </div>

              <Button variant="outline-warning">Login</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Topbar;
