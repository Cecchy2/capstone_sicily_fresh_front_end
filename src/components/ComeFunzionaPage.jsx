import { Container, Row, Col, Image } from "react-bootstrap";

const ComeFunzionaPage = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} className="text-center">
          <h1 className="display-4 mb-4">Come Funziona</h1>
          <p className="fs-5 mb-5">
            <strong>Sicily•Fresh</strong> ti permette di scoprire e cucinare le migliori ricette tipiche siciliane,
            ricevendo a casa tutti gli ingredienti necessari.
          </p>

          <h3 className="mb-3">1. Registrazione Gratuita</h3>
          <p className="fs-5 mb-5">
            La registrazione su <strong>Sicily•Fresh</strong> è completamente gratuita. Dopo esserti registrato come
            Cliente, potrai esplorare tutte le ricette disponibili nella nostra piattaforma.
          </p>

          <h3 className="mb-3">2. Scopri le Ricette</h3>
          <p className="fs-5 mb-5">
            Sfoglia il nostro vasto catalogo di ricette tradizionali siciliane, ricche di sapori autentici. Ogni ricetta
            è stata selezionata con cura dai nostri fornitori locali, pronti a fornirti ingredienti freschi e di
            qualità.
          </p>

          <h3 className="mb-3">3. Acquista un Abbonamento</h3>
          <p className="fs-5 mb-5">
            Per poter ordinare le ricette, è necessario sottoscrivere un abbonamento. Gli abbonamenti ti permettono di
            selezionare le ricette che preferisci e ricevere a casa tutti gli ingredienti necessari per cucinarle.
          </p>

          <h3 className="mb-3">4. Ricevi a Casa gli Ingredienti</h3>
          <p className="fs-5 mb-5">
            Dopo aver scelto le tue ricette preferite e ordinato, ti consegneremo tutti gli ingredienti freschi e di
            alta qualità direttamente a casa tua, pronti per essere cucinati!
          </p>

          <h3 className="mb-3">5. Crea deliziose Ricette Siciliane</h3>
          <p className="fs-5 mb-5">
            Con <strong>Sicily•Fresh</strong> potrai gustare le tradizionali ricette siciliane nel comfort della tua
            casa, seguendo le istruzioni delle ricette scelte e utilizzando gli ingredienti consegnati.
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6} className="text-center">
          <h1 className="display-4">Sicily•Fresh</h1>
          <Image src="/assets/limoni.svg" width={250} className="mt-3" />
        </Col>
      </Row>
    </Container>
  );
};

export default ComeFunzionaPage;
