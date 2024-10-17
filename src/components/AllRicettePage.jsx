import { useState } from "react";
import { useSelector } from "react-redux";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AllRicettePage = () => {
  const ricette = useSelector((state) => state.ricette);

  const [selectedPortata, setSelectedPortata] = useState("");
  const [selectedTipo, setSelectedTipo] = useState("");
  const [searchTitle, setSearchTitle] = useState("");

  const navigate = useNavigate();

  const handlePortataChange = (e) => setSelectedPortata(e.target.value);
  const handleTipoChange = (e) => setSelectedTipo(e.target.value);
  const handleTitleChange = (e) => setSearchTitle(e.target.value);

  const filteredRicette = ricette.ricette.content.filter((ricetta) => {
    const matchPortata = selectedPortata === "" || ricetta.portata === selectedPortata;
    const matchTipo = selectedTipo === "" || ricetta.tipo === selectedTipo;
    const matchTitle = ricetta.titolo.toLowerCase().includes(searchTitle.toLowerCase());

    return matchPortata && matchTipo && matchTitle;
  });

  return (
    <>
      <div className="bg-dark py-5">
        <div className="allRicettePage">
          <h1 className="text-center ">
            <span className="text-warning">Scopri le nostre Ricette</span>
          </h1>
        </div>

        <div className="filterSection text-center text-warning">
          <label className="mx-3">
            Filtra per Portata:
            <select value={selectedPortata} onChange={handlePortataChange} className="form-select mx-2">
              <option value="">Tutte</option>
              <option value="ANTIPASTO">Antipasto</option>
              <option value="PRIMO">Primo</option>
              <option value="SECONDO">Secondo</option>
              <option value="DOLCE">Dolce</option>
            </select>
          </label>

          <label className="mx-3">
            Filtra per Tipo:
            <select value={selectedTipo} onChange={handleTipoChange} className="form-select mx-2">
              <option value="">Tutti</option>
              <option value="CARNE">Carne</option>
              <option value="PESCE">Pesce</option>
              <option value="VEGETALI">Vegetali</option>
            </select>
          </label>

          <label className="mx-3">
            Cerca per Titolo:
            <input
              type="text"
              value={searchTitle}
              onChange={handleTitleChange}
              placeholder="Cerca per titolo"
              className="form-control mx-2"
            />
          </label>
        </div>
      </div>

      <div className="middleHome text-center f-lato-thin pb-5">
        <Container>
          <Row>
            {filteredRicette.length > 0 ? (
              filteredRicette.map((ricetta, index) => (
                <Col
                  key={index}
                  xs={12}
                  sm={12}
                  md={4}
                  lg={4}
                  className="mt-5"
                  onClick={() => navigate(`/ricetta/${ricetta.id}`)}
                >
                  <Card className="shadow-sm border-0 rounded-4 hover-card">
                    <Card.Img variant="top" src={ricetta.immaginePiatto} className="cardImageFornitori" />
                    <Card.Body className="p-1">
                      <Card.Title className="fw-bold">{ricetta.titolo}</Card.Title>

                      <p>Portata: {ricetta.portata}</p>
                      <p>Tipo: {ricetta.tipo}</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <p>Nessuna ricetta trovata</p>
            )}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AllRicettePage;
