import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Topbar from "./components/TopBar";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
