import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./styles/App.css";
import Accueil from "./pages/accueil";
import Contact from "./pages/contact";
import InfosUtiles from "./pages/infos-utiles";
import Histoire from "./pages/notre-histoire";
import Membres from "./pages/membres";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Accueil" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/infos-utiles" element={<InfosUtiles />} />
        <Route path="/membres" element={<Membres />} />
        <Route path="/notre-histoire" element={<Histoire />} />
        {/* path=* fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
        <Route path="*" element={<Accueil />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
