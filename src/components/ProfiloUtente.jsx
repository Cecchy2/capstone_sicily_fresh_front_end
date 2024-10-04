import { Button, Card, Col, Container, Form, Image, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../redux/actions/utentiActions";
import { useState } from "react";
import { uploadAvatar } from "../redux/actions/imagesUploadActions";

const ProfiloUtente = () => {
  const utente = useSelector((state) => state.utente);
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
    <Container>
      <Row className="mt-2">
        <Col>
          <Card>
            <Card.Header className="d-flex justify-content-center cardImageProfile">
              <Image src={utente.utente.avatar} width={350} fluid />
            </Card.Header>
            <Card.Body className="bg-warning">
              <Card.Title className="text-center">
                {" "}
                <h1 className="display-5">
                  {utente.utente.nome} {utente.utente.cognome}
                </h1>
              </Card.Title>
              <Card.Text className="text-center fs-4">{utente.utente.username}</Card.Text>
              <Card.Text className="text-center fs-5">{utente.utente.dataDiNascita}</Card.Text>
              <div className="d-flex justify-content-center">
                <Button variant="info" onClick={handleShow}>
                  Modifica profilo
                </Button>
                <Modal show={show} onHide={handleClose} animation={false}>
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
                        <Button variant="primary" onClick={handleAvatarModalShow}>
                          Modifica Avatar
                        </Button>
                      </div>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Modal show={showAvatarModal} onHide={handleAvatarModalClose} animation={false}>
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
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleAvatarUpdate}>
                      Save Avatar
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfiloUtente;
