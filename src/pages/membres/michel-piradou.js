import React from "react";
import Navbar from "../../components/Header/Navbar";
import "../../components/FicheMembres/FicheMembres.css";
import FicheMembres from "../../components/FicheMembres/FicheMembres";
import Footer from "../../components/Footer/Footer";

const MichelPiradou = () => {
  return (
    <div>
      <Navbar />
      <FicheMembres
        nom="Michel Piradou"
        role="N°5 - arrière droit"
        date="02/02/1996"
        taille="2m05"
        kg="91kg"
        attaq="3m29"
        block="3m10"
        datePalma1="2015"
        datePalma2="2020"
        palma2=" Finaliste Championnat du monde"
        palma1=" Vainqueur Championnat du Brésil"
        id='michel-piradou'
      />
      <Footer />
    </div>
  );
};

export default MichelPiradou;
