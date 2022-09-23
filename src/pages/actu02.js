import React from "react";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/footer/Footer.js"
import "../styles/actu.css";

const Actu2 = () => {
  return (
    <div>
      <Navbar />
      <section className="temp_actu">
        <div>
          <h1>Victoire de l'équipe de Lens face à leur adversaire</h1>
          <div className="actu_details">
            <p className="actu_category">CLUB</p>
            <p className="actu_date">18 mai 2022</p>
          </div>
          <img src={require('../assets/Images/actu01.jpg')} alt="" />
          <p className="content_actu">L'équipe de Lens a battu Wingles, en quatre sets (25-15, 24-26, 25-22, 25-19), à Léo Lagrange(Lens).s'impose avec difficulté contre Wingles pour leur première victoire à domicile.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Actu2;
