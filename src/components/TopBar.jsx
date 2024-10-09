import { Badge, Button, Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/authActions";

const Topbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const utente = useSelector((state) => state.utente);
  console.log(utente);

  const handleLogout = () => {
    const confirmed = window.confirm("Sei sicuro di voler uscire?");
    if (confirmed) {
      dispatch(logout());
      navigate("/");
    }
  };
  console.log("Avatar URL:", utente.utente.avatar);

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to={isAuthenticated ? "/utenti/${user.utenteId}" : "/"}>
            <Image src="../../public/assets/limoni.svg" alt="Logo limoni" width={40} fluid />
            Sicily•Fresh
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center d-flex">
              <Nav.Link as={Link} to={isAuthenticated ? `/utenti/${user.utenteId}` : "/"} className="translate">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/abbonamenti" className="translate">
                Abbonamenti
              </Nav.Link>
              <Nav.Link as={Link} to="/chi-siamo" className="translate">
                Chi Siamo
              </Nav.Link>
              <Nav.Link as={Link} to="/ricette" className="translate">
                Ricette
              </Nav.Link>
              <Nav.Link as={Link} to="/menu" className="translate">
                Menù
              </Nav.Link>
              <div className="position-relative mx-3 mb-2 cart">
                <HiMiniShoppingCart
                  fill="black"
                  size={30}
                  onClick={() => navigate("/carrello/${clienteId}")}
                  className="translate"
                />
                <Badge pill bg="danger" className="position-absolute top-0 start-90 translate-middle">
                  3
                </Badge>
              </div>
              {isAuthenticated && (
                <NavDropdown
                  title=<Image
                    src={utente.utente.avatar}
                    roundedCircle
                    width={35}
                    height={35}
                    style={{ objectFit: "cover" }}
                  />
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item as={Link} to={`/profili/${utente.utente.id}`}>
                    Profilo
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to="/contattaci">
                    Contattaci
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/fornitori">
                    Fornitori
                  </NavDropdown.Item>
                </NavDropdown>
              )}

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
