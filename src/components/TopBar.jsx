import { Badge, Button, Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/authActions";

const Topbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    const confirmed = window.confirm("Sei sicuro di voler uscire?");
    if (confirmed) {
      dispatch(logout());
      navigate("/");
    }
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Image src="../../public/assets/limoni.svg" alt="Logo limoni" width={40} fluid />
          <Navbar.Brand as={Link} to="/">
            Sicily-Fresh
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
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
                <NavDropdown.Item as={Link} to="/chi-siamo">
                  Chi Siamo
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/come-funziona">
                  Come Funziona
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/contattaci">
                  Contattaci
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/fornitori">
                  Fornitori
                </NavDropdown.Item>
              </NavDropdown>

              {isAuthenticated ? (
                <Button variant="outline-warning" onClick={handleLogout} className="mx-2">
                  Logout
                </Button>
              ) : (
                <Button variant="outline-warning" onClick={() => navigate(`/login`)} className="mx-2">
                  Login
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Topbar;
