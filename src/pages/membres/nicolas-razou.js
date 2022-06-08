import React from "react";
import Navbar from "../../components/Header/Navbar";
import "../../components/FicheMembres/FicheMembres.css";
import FicheMembres from "../../components/FicheMembres/FicheMembres";
import Footer from "../../components/Footer/Footer";

const NicolasRazou = () => {
  return (
    <div>
      <Navbar />
      <FicheMembres
        nom="Nicolas Razou"
        role="N°6 - central"
        date="12/03/1995"
        taille="2m05"
        kg="92kg"
        attaq="3m36"
        block="3m12"
        datePalma1="2016"
        datePalma2="2020"
        palma2=" Finaliste Championnat du monde"
        palma1=" Médaille d’or aux JO de Pékin"
        id='nicolas-razou'
      />
      <Footer />
    </div>
  );
};

export default NicolasRazou;
