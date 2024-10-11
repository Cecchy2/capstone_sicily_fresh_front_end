import { Badge, Button, Card, Col, Container, Form, Image, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../redux/actions/utentiActions";
import { useState } from "react";
import { uploadAvatar } from "../redux/actions/imagesUploadActions";

const ProfiloUtente = () => {
  const utente = useSelector((state) => state.utente);
  const abbonamenti = useSelector((state) => state.abbonamenti.abbonamenti || []);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [payload, setPayload] = useState({
    username: utente.utente?.username || "",
    email: utente.utente?.email || "",
    password: utente.utente?.password || "",
    nome: utente.utente?.nome || "",
    cognome: utente.utente?.cognome || "",
    dataDiNascita: utente.utente?.dataDiNascita || "",
    ruolo: "CLIENTE",
  });

  const numeroRicetteRimanenti = abbonamenti
    .map((abbonamento) => abbonamento.numeroRicette)
    .reduce((total, ricette) => total + ricette, 0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAvatarModalClose = () => setShowAvatarModal(false);
  const handleAvatarModalShow = () => setShowAvatarModal(true);

  const handleUpdate = () => {
    dispatch(updateProfile(utente.utente.id, payload));
    handleClose();
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleAvatarUpdate = () => {
    if (selectedFile) {
      dispatch(uploadAvatar(selectedFile));
      handleAvatarModalClose();
    }
  };

  console.log(utente);
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className="shadow-lg border-0 rounded-4">
            <Card.Header className="bg-light d-flex justify-content-center p-4 rounded-top border-bottom-0">
              <Image
                src={utente.utente.avatar}
                width={300}
                height={300}
                className="border border-4 border-warning shadow-sm object-fit-cover"
                roundedCircle
              />
            </Card.Header>
            <Card.Body className="bg-light p-5">
              <Card.Title className="text-center mb-4">
                <h1 className="display-5 fw-bold">
                  {utente.utente.nome} {utente.utente.cognome}
                </h1>
              </Card.Title>

              <Card.Text className="text-center fs-4 text-muted mb-3">{utente.utente.username}</Card.Text>
              <Card.Text className="text-center fs-5 text-secondary">{utente.utente.dataDiNascita}</Card.Text>
              <h4 className="text-center  my- ms-auto">
                Le tue ricette disponibili: <Badge bg="info">{numeroRicetteRimanenti}</Badge>
              </h4>
              <div className="d-flex justify-content-center mt-4">
                <Button variant="info" onClick={handleShow} className="px-5">
                  Modifica Profilo
                </Button>
              </div>

              <Modal show={show} onHide={handleClose} animation={false} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Modifica il tuo profilo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="formNome">
                      <Form.Label>Nome</Form.Label>
                      <Form.Control
                        type="text"
                        value={payload.nome}
                        onChange={(e) => setPayload({ ...payload, nome: e.target.value })}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formCognome">
                      <Form.Label>Cognome</Form.Label>
                      <Form.Control
                        type="text"
                        value={payload.cognome}
                        onChange={(e) => setPayload({ ...payload, cognome: e.target.value })}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formUsername">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        value={payload.username}
                        onChange={(e) => setPayload({ ...payload, username: e.target.value })}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        value={payload.email}
                        onChange={(e) => setPayload({ ...payload, email: e.target.value })}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        value={payload.password}
                        onChange={(e) => setPayload({ ...payload, password: e.target.value })}
                      />
                    </Form.Group>

                    <div className="d-flex justify-content-center mt-4">
                      <Button variant="primary" onClick={handleAvatarModalShow} className="px-4">
                        Modifica Avatar
                      </Button>
                    </div>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Annulla
                  </Button>
                  <Button variant="success" onClick={handleUpdate}>
                    Salva Modifiche
                  </Button>
                </Modal.Footer>
              </Modal>

              <Modal show={showAvatarModal} onHide={handleAvatarModalClose} animation={false} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Modifica Avatar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>Seleziona nuovo avatar</Form.Label>
                      <Form.Control type="file" onChange={handleFileChange} />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleAvatarModalClose}>
                    Annulla
                  </Button>
                  <Button variant="success" onClick={handleAvatarUpdate}>
                    Salva Avatar
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfiloUtente;
