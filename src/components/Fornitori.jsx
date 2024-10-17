import { Container, Row, Col } from "react-bootstrap";

const Fornitori = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          <h1 className="text-center mb-4">Diventa Fornitore di Sicily•Fresh</h1>
          <p>
            Hai una passione per la cucina siciliana e vuoi condividere le tue ricette con il mondo?{" "}
            <strong>Sicily•Fresh</strong> ti offre l'opportunità di farlo! Diventando un nostro fornitore, potrai
            caricare le tue ricette tipiche siciliane e vendere gli ingredienti direttamente ai nostri clienti,
            guadagnando un importo fisso per ogni ricetta venduta.
          </p>

          <h3 className="mt-5 text-warning">Cosa ti offriamo:</h3>
          <ul>
            <li>Visibilità su una piattaforma dedicata ai prodotti e alle ricette siciliane.</li>
            <li>La possibilità di vendere direttamente gli ingredienti delle tue ricette.</li>
            <li>Un guadagno fisso per ogni ricetta acquistata dai nostri clienti.</li>
          </ul>

          <h3 className="mt-5 text-warning">Sei pronto a collaborare?</h3>
          <p>Per entrare a far parte della nostra rete di fornitori, è importante che tu abbia tutto in regola:</p>
          <ul>
            <li>Hai i requisiti per vendere ingredienti di alta qualità?</li>
            <li>Rispetti le normative sanitarie e di sicurezza alimentare?</li>
            <li>Sei pronto a gestire ordini e spedizioni in modo tempestivo?</li>
          </ul>

          <p>
            Se hai risposto <strong>sì</strong> a tutte queste domande e sei interessato a collaborare con noi, inviaci
            un'email all'indirizzo <a href="mailto:fornitori@sicilyfresh.com">fornitori@sicilyfresh.com</a>. Saremo
            felici di valutare la tua candidatura e ricontattarti per discutere i dettagli della collaborazione.
          </p>

          <p className="mt-4">
            Unisciti a <strong>Sicily•Fresh</strong> e porta il gusto autentico della Sicilia sulle tavole di tutto il
            mondo!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Fornitori;
