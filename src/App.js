import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Accueil from './pages/Accueil';
import Formulaire_de_contact from './pages/Formulaire_de_contact';
import Infos_utiles from './pages/Infos_utiles';
import Liste_des_membres from './pages/Liste_des_membres';
import Notre_histoire from './pages/Notre_histoire';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Accueil" element={<Accueil />} />
        <Route path="/Formulaire_de_contact" element={<Formulaire_de_contact />} />
        <Route path="/Infos_utiles" element={<Infos_utiles />} />
        <Route path="/Liste_des_membres" element={<Liste_des_membres />} />
        <Route path="/Notre_histoire" element={<Notre_histoire />} />
        {/* path=* fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
        <Route path="*" element={<Accueil />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
