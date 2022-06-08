import React from "react";
import Navbar from "../../components/Header/Navbar";
import "../../components/FicheMembres/FicheMembres.css";
import FicheMembres from "../../components/FicheMembres/FicheMembres";
import Footer from "../../components/Footer/Footer";

const JeanRito = () => {
  return (
    <div>
      <Navbar />
      <FicheMembres
        nom="Jean Rito"
        role="N°3 - arrière gauche"
        date="13/03/1995"
        taille="1m99"
        kg="89kg"
        attaq="3m23"
        block="3m09"
        datePalma1="2015"
        datePalma2="2020"
        palma2=" Finaliste Championnat du monde"
        palma1=" Vainqueur Championnat du Brésil"
        id='jean-rito'
      />
      <Footer />
    </div>
  );
};

export default JeanRito;
