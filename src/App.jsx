import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Topbar from "./components/TopBar";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import RegistrazionePage from "./components/RegistrazionePage";
import UtentiPage from "./components/UtentiPage";
import FornitorePage from "./components/FornitorePage";
import ProfiloUtente from "./components/ProfiloUtente";
import RicetteFornitorePage from "./components/RicetteFornitorePage";
import RicettaPage from "./components/RicettaPage";
import CarrelloPage from "./components/CarrelloPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registrazione" element={<RegistrazionePage />} />
          <Route path="/profili/:id" element={<ProfiloUtente />} />
          <Route path="/utenti/:id" element={<UtentiPage />} />
          <Route path="/fornitori/:fornitoreId" element={<FornitorePage />} />
          <Route path="/ricette/:fornitoreId" element={<RicetteFornitorePage />} />
          <Route path="/ricetta/:ricettaId" element={<RicettaPage />} />
          <Route path="/carrello/:clienteId" element={<CarrelloPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
