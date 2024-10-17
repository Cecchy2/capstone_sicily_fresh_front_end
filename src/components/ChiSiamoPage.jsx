import { Col, Container, Image, Row } from "react-bootstrap";

const ChiSiamoPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="d-flex flex-column align-content-center float me-4">
            <h1 className="mt-5 text-center">Sicily•Fresh</h1>
            <Image src="../../public/assets/limoni.svg" width={200} className=" ms-5 " />
          </div>
          <p className="mt-5 fs-4">
            Sicily Fresh è un progetto sviluppato da Dario Cecchinato come capstone finale per il diploma FullStack
            presso Epicode. L'applicazione consente agli utenti di registrarsi come Clienti e, successivamente, di
            contattare l'amministratore per richiedere l'accesso come Fornitori.
            <p className="mt-2 fs-4">
              I Fornitori possono caricare ricette tipiche siciliane e vendere i relativi ingredienti, guadagnando un
              importo fisso per ogni ricetta venduta. I Clienti, invece, possono sottoscrivere abbonamenti che
              permettono loro di aggiungere ricette al carrello e ordinare gli ingredienti necessari per prepararle
              comodamente a casa.
            </p>
            <p className="mt-2 fs-4">
              Gli utenti possono inoltre modificare il proprio profilo, aggiornare le informazioni personali e
              l'immagine del profilo.
            </p>
          </p>
          <p className="mt-2 fs-4">
            Il Back-end è stato sviluppato in Java utilizzando Spring Boot e Hibernate per la gestione delle entità e
            delle relazioni. Ho utilizzato PostgreSQL come database relazionale. Dopo aver creato le classi, ho
            implementato lo schema ERD (Entity Relationship Diagram) per gestire il mapping relazionale tra le varie
            entità, come utenti, fornitori, ricette, carrelli, e ordini.
          </p>
          <p className="mt-2 fs-4">
            Ho implementato Spring Security per gestire l’autenticazione e l’autorizzazione, assicurando un sistema
            sicuro per la registrazione e il login. Gli utenti sono gestiti tramite ruoli (Clienti e Fornitori), con
            controlli di accesso, permettendo l’accesso a specifiche funzionalità solo a utenti autenticati e
            autorizzati.
          </p>
          <p className="mt-2 fs-4">
            Per il Front-end, ho utilizzato JavaScript con React per la creazione di interfacce utente dinamiche e Redux
            per la gestione dello stato globale dell'applicazione. La comunicazione tra Front-end e Back-end è stata
            gestita tramite chiamate API REST, testate inizialmente con Postman per verificare il corretto funzionamento
            degli endpoints. Una volta validati gli endpoints, li ho integrati nel Front-end, sviluppando un'interfaccia
            intuitiva e responsive che permette agli utenti di navigare facilmente tra le ricette, aggiungerle al
            carrello e completare gli ordini.
          </p>

          <p></p>
        </Col>
      </Row>
    </Container>
  );
};

export default ChiSiamoPage;
