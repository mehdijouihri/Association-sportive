import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import React from "react";
import Accueil from "./pages/accueil";
import Contact from "./pages/contact";
import InfosUtiles from "./pages/infos-utiles";
import Histoire from "./pages/notre-histoire";
import Membres from "./pages/membres";
import PficheMembres from "./pages/fiche-membres";
import Actu from "./pages/actu01";
import WilliamDakori from "./pages/membres/william-dakori";
import AntoineLimanou from "./pages/membres/antoine-limanou";
import JeanRito from "./pages/membres/jean-rito";
import JeanPatry from "./pages/membres/jean-patry";
import MichelPiradou from "./pages/membres/michel-piradou";
import NicolasRazou from "./pages/membres/nicolas-razou";
import Actu3 from "./pages/actu03";
import Actu2 from "./pages/actu02";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fiche-membres" element={<PficheMembres/>} />
        <Route path="/actu01" element={<Actu />} />
        <Route path="/actu02" element={<Actu2 />} />
        <Route path="/actu03" element={<Actu3 />} />

        <Route path="/infos-utiles" element={<InfosUtiles />} />
        <Route path="/membres" element={<Membres />} />

        <Route path="/membres/william-dakori" element={<WilliamDakori />} />
        <Route path="/membres/antoine-limanou" element={<AntoineLimanou />} />
        <Route path="/membres/jean-rito" element={<JeanRito />} />
        <Route path="/membres/jean-patry" element={<JeanPatry />} />
        <Route path="/membres/michel-piradou" element={<MichelPiradou />} />
        <Route path="/membres/nicolas-razou" element={<NicolasRazou />} />



        <Route path="/notre-histoire" element={<Histoire />} />
        {/* path=* fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
        <Route path="*" element={<Accueil />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
