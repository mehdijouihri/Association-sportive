import React from "react";
import Navigation from "../components/Header/Navbar";
import "../styles/membre.css";
import "../styles/accueil.css";
import CardPlayer from "../components/CardPlayer/CardPlayer";
import Footer from "../components/footer/Footer.js";
import { PLAYERS } from "../assets/data/Players";

const Membres = () => {
  return (
    <>
      <Navigation />
      <div className="affiche">
        <h1 className="titre_membres">Membres</h1>
      </div>
      <div className="equipe">
        <section className="container">
          <div className="intro_home">
            <div>
              <h2>Joueurs</h2>
              <p className="equipe_phrase">Découvrez notre équipe</p>
            </div>
          </div>
          <div className="equipe_joueur">
            {PLAYERS.slice(0, 6).map((data, key) => {
              return (
                <CardPlayer
                  img={data.img}
                  name={data.name}
                  role={data.role}
                  link={data.link}
                  key={key}
                />
              );
            })}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Membres;
