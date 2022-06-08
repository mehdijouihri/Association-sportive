import React from "react";
import Navbar from "../../components/Header/Navbar";
import "../../components/FicheMembres/FicheMembres.css";
import FicheMembres from "../../components/FicheMembres/FicheMembres";
import Footer from "../../components/Footer/Footer";

const AntoineLimanou = () => {
  return (
    <div>
      <Navbar />
      <FicheMembres
        nom="Antoine Limanou"
        role='N°2 - avant droit'
        date="17/07/1994"
        taille="2m13"
        kg="99kg"
        attaq="3m35"
        block="3m17"
        datePalma1="2016"
        datePalma2="2020"
        palma1=" Finaliste Championnat du monde"
        palma2=" Médaille d’or aux JO de Pékin"
        id='antoine-limanou'
      />
      <Footer />
    </div>
  );
};

export default AntoineLimanou;
