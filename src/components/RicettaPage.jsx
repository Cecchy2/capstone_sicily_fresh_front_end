import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { deleteRicetta, getRicettaById } from "../redux/actions/ricetteActions";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Button, Col, Container, Image, Row } from "react-bootstrap";

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
                <h1 className="display-5 my-5">{ricetta.titolo}</h1>
                <p>{ricetta.descrizione}</p>
                {ricetta.passaggi && ricetta.passaggi.length > 0 ? (
                  ricetta.passaggi.map((passaggio, index) => (
                    <div key={index} className="my-5">
                      <Image src={passaggio.immaginePassaggio} />
                      <Badge>Passaggio {index + 1}:</Badge>
                      <p className="fs-5">{passaggio.descrizione}</p>
                    </div>
                  ))
                ) : (
                  <p>Nessun passaggio disponibile per questa ricetta.</p>
                )}
              </Col>
            </Row>
            <Button variant="danger" className="mt-3" onClick={() => handleDelete(ricetta.id)}>
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
