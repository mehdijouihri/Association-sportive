import React from "react";
import Navbar from "../../components/Header/Navbar";
import "../../components/FicheMembres/FicheMembres.css";
import FicheMembres from "../../components/FicheMembres/FicheMembres";
import Footer from "../../components/Footer/Footer";

const WilliamDakori = () => {
  return (
    <div>
      <Navbar />
      <FicheMembres
        nom="William Dakori"
        role='N°1 - avant gauche'
        date="12/03/1995"
        taille="2m04"
        kg="90kg"
        attaq="3m30"
        block="3m11"
        datePalma1="2017"
        datePalma2="2020"
        palma2=" Finaliste Championnat du monde"
        palma1=" Finaliste Ligue mondiale"
        id='william-dakori'
      />
      <Footer />
    </div>
  );
};

export default WilliamDakori;
