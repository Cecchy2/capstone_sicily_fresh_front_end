import { Badge, Button, Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/authActions";
import { useEffect, useState } from "react";
import { creaCarrello, getCarrelloByClienteId } from "../redux/actions/carrelloAction";
import {
  findCarrelliDettagliByCarrelloId,
  getCarrelloDettagliFornitore,
  getCarrelloDettaglioByRicetta,
  resetCarrelloDettaglio,
} from "../redux/actions/carrelloDettaglioActions";
import { getRicette } from "../redux/actions/ricetteActions";
import { FaSackDollar } from "react-icons/fa6";

const Topbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const utente = useSelector((state) => state.utente);
  const carrello = useSelector((state) => state.carrello);
  const carrelloDettagli = useSelector((state) => state.carrelliDettagli);
  const ricette = useSelector((state) => state.ricette);
  const carrelliDettaglioFornitore = useSelector((state) => state.carrelliDettagli.carrelloDettagliFornitore);
  const carrelloId = useSelector((state) => state.carrelli.carrelli[0]?.id);

  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    dispatch(getRicette());
  }, [dispatch]);

  useEffect(() => {
    if (user && user.utenteId) {
      dispatch(getCarrelloDettagliFornitore(user.utenteId));
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (isAuthenticated && user && user.utenteId) {
      dispatch(getCarrelloByClienteId(user.utenteId)).then(() => {
        if (!carrello || !carrello.id) {
          dispatch(creaCarrello(user.utenteId));
        }
      });
    }
  }, [isAuthenticated, user, dispatch, carrello]);

  useEffect(() => {
    dispatch(findCarrelliDettagliByCarrelloId(carrelloId));
  }, [dispatch, carrelloId]);

  useEffect(() => {
    if (ricette.ricette.length > 0) {
      ricette.ricette.forEach((ricetta) => {
        dispatch(getCarrelloDettaglioByRicetta(ricetta.id));
      });
    }
  }, [dispatch, ricette]);

  const handleLogout = () => {
    const confirmed = window.confirm("Sei sicuro di voler uscire?");
    if (confirmed) {
      dispatch(logout());
      dispatch(resetCarrelloDettaglio());
      navigate("/");
      setExpanded(false);
    }
  };

  useEffect(() => {}, [carrelloDettagli]);

  let userPath = "/";

  if (isAuthenticated) {
    if (user.role === "ADMIN") {
      userPath = "/admin";
    } else if (user.role === "CLIENTE") {
      userPath = `/utenti/${user.utenteId}`;
    } else if (user.role === "FORNITORE") {
      userPath = `/fornitori/${user.utenteId}`;
    }
  }

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" expanded={expanded}>
        <Container>
          <Navbar.Brand as={Link} to={isAuthenticated && user.role !== "FORNITORE" ? `/utenti/${user.utenteId}` : "/"}>
            <Image src="/assets/limoni.svg" alt="Logo limoni" width={40} fluid />
            Sicily•Fresh
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : true)} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center d-flex">
              <Nav.Link as={Link} to={userPath} onClick={() => setExpanded(false)} className="translate">
                🏠 Home
              </Nav.Link>
              {isAuthenticated && user.role === "CLIENTE" ? (
                <Nav.Link
                  as={Link}
                  to={isAuthenticated ? "/abbonamenti" : "/registrazione"}
                  onClick={() => setExpanded(false)}
                  className="translate"
                >
                  💳 Abbonamenti
                </Nav.Link>
              ) : (
                ""
              )}
              <Nav.Link as={Link} to="/chi_siamo" className="translate" onClick={() => setExpanded(false)}>
                👩🏼‍🍳 Chi Siamo
              </Nav.Link>
              {isAuthenticated && user.role === "CLIENTE" ? (
                <Nav.Link as={Link} to="/allRicettePage" className="translate" onClick={() => setExpanded(false)}>
                  🍝 Ricette
                </Nav.Link>
              ) : (
                ""
              )}
              {isAuthenticated && user.role === "CLIENTE" ? (
                <Nav.Link as={Link} to="/ordini" className="translate" onClick={() => setExpanded(false)}>
                  🧺 Ordini
                </Nav.Link>
              ) : (
                ""
              )}

              <div className="position-relative mx-3 mb-2 cart">
                {isAuthenticated && user.role === "CLIENTE" ? (
                  <div>
                    <HiMiniShoppingCart
                      fill="black"
                      size={30}
                      onClick={() => {
                        navigate(`/carrello/${user.utenteId}`);
                        setExpanded(false);
                      }}
                      className="translate"
                    />
                    <Badge pill bg="danger" className="position-absolute top-0 start-90 translate-middle">
                      {
                        carrelloDettagli.carrelliDettagli.filter((dettaglio) => dettaglio.statoOrdine === "INCARRELLO")
                          .length
                      }
                    </Badge>
                  </div>
                ) : isAuthenticated && user.role === "FORNITORE" ? (
                  <div>
                    <FaSackDollar
                      fill="black"
                      size={30}
                      onClick={() => {
                        navigate(`/carrello/fornitore/${user.utenteId}`);
                        setExpanded(false);
                      }}
                      className="translate"
                    />
                    <Badge pill bg="danger" className="position-absolute top-0 start-90 translate-middle">
                      {Array.isArray(carrelliDettaglioFornitore) &&
                        carrelliDettaglioFornitore.filter((carrello) => carrello.statoOrdine !== "INCARRELLO").length}
                    </Badge>
                  </div>
                ) : null}
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
                  <NavDropdown.Item as={Link} to={`/profili/${utente.utente.id}`} onClick={() => setExpanded(false)}>
                    Profilo
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/come-funziona" onClick={() => setExpanded(false)}>
                    Come Funziona?
                  </NavDropdown.Item>

                  <NavDropdown.Item as={Link} to="/contattaci" onClick={() => setExpanded(false)}>
                    Contattaci
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/fornitori" onClick={() => setExpanded(false)}>
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
