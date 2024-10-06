import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { deleteRicetta, getRicettaById } from "../redux/actions/ricetteActions";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Button, Card, Col, Container, Image, ListGroup, Row } from "react-bootstrap";

const RicettaPage = () => {
  const { ricettaId } = useParams();
  const dispatch = useDispatch();

  const ricetta = useSelector((state) => state.ricette.ricettaDettaglio);

  console.log(ricetta);

  useEffect(() => {
    if (ricettaId) {
      dispatch(getRicettaById(ricettaId));
    }
  }, [dispatch, ricettaId]);

  const handleDelete = (ricettaId) => {
    const confirmDelete = window.confirm("Sei sicuro di voler eliminare questa ricetta?");
    if (confirmDelete) {
      dispatch(deleteRicetta(ricettaId));
      /* AGGIUNGERE NAVIGATE */
    }
  };

  return (
    <>
      {ricetta && ricetta.immaginePiatto ? (
        <>
          <div>
            <Image
              src={ricetta.immaginePiatto}
              alt="Immagine del piatto"
              height={400}
              width={1200}
              className="object-fit-cover"
            />
          </div>
          <Container>
            <Row>
              <Col>
                <h1 className="display-4 my-5">•{ricetta.titolo}•</h1>
                <p>{ricetta.descrizione}</p>
                <>
                  <h4 className="mt-4">Ingredienti</h4>
                  <div className="my-4">
                    {ricetta.ricettaIngredienti.map((item) => (
                      <div key={item.id} className="d-flex align-items-center mb-3" style={{ gap: "1rem" }}>
                        •
                        <Image
                          src={item.ingrediente.immagine}
                          alt={item.ingrediente.nome}
                          roundedCircle
                          height={40}
                          width={40}
                          style={{ objectFit: "cover" }}
                        />
                        <div>
                          <span className="fw-bold">{item.ingrediente.nome}</span> -{" "}
                          <span className="text-muted">{item.quantita}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
                {ricetta.passaggi && ricetta.passaggi.length > 0 ? (
                  ricetta.passaggi.map((passaggio, index) => (
                    <div key={index} className="mt-5">
                      <Image src={passaggio.immaginePassaggio} />
                      <Badge bg="warning" className="text-dark">
                        Passaggio {index + 1}:
                      </Badge>
                      <p className="fs-5">{passaggio.descrizione}</p>
                    </div>
                  ))
                ) : (
                  <p>Nessun passaggio disponibile per questa ricetta.</p>
                )}
              </Col>
            </Row>
            <Button variant="danger" className="my-5" onClick={() => handleDelete(ricetta.id)}>
              Elimina ricetta
            </Button>
          </Container>
        </>
      ) : (
        <p>Caricamento in corso o nessuna ricetta trovata...</p>
      )}
    </>
  );
};

export default RicettaPage;

/* {ricetta.ricettaIngredienti && ricetta.ricettaIngredienti.length > 0 && (
    <>
      <h4 className="mt-4">Ingredienti</h4>
      <ListGroup variant="flush">
        {ricetta.ricettaIngredienti.map((item, index) => (
          <ListGroup.Item key={item.id} className="d-flex align-items-center">
            {item.ingrediente.immagine && (
              <Image
                src={item.ingrediente.immagine}
                alt={item.ingrediente.nome}
                height={50}
                width={50}
                className="me-3"
                rounded
              />
            )}
            <div>
              <strong>{item.ingrediente.nome}</strong> - {item.quantita}
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  )} */
