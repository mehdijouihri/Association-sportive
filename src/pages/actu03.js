import React from "react";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/footer/Footer.js"
import "../styles/actu.css";

const Actu3 = () => {
  return (
    <div>
      <Navbar />
      <section className="temp_actu">
        <div>
          <h1>André Giovanni entraîneur officiel de l'équipe de l’association de volley à lens</h1>
          <div className="actu_details">
            <p className="actu_category">CLUB</p>
            <p className="actu_date">18 mai 2022</p>
          </div>
          <img src={require('../assets/Images/actu01.jpg')} alt="" />
          <p className="content_actu">L’association de Lens a annoncé dimanche soir le nom de son nouvel entraîneur : André Giovanni, près pour le premier match contre Wingles.</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Actu3;
