import React from "react";
import Navbar from "../components/Header/Navbar";
import voley1 from "../assets/Images/voley1.jpeg";
import voley2 from "../assets/Images/voley2.jpeg";
import "../styles/notre-histoire.css";
import ButtonPrimary from "../components/ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary/ButtonSecondary";
import Footer from "../components/Footer/Footer";

const Histoire = () => {
  return (
    <div className="histoire-page">
      <Navbar />
      <div className="affiche">
        <h1 className="titre_membres">Notre histoire</h1>
      </div>
      <section className="histoire">
        <div className="container">
          <img src={voley1} alt="Photo des joueurs" />
          <div className="histoire_details">
            <h4>Notre club de Volley existe depuis 1976</h4>
            <p>
              En pleine restructuration, le Luc Volley accueille les joueurs
              (ses) de 5 à 77 ans ! Avec une volonté de pouvoir permettre à
              chacun de venir pratiquer selon son niveau, nous proposons à nos
              licenciés un environnement convivial et adapté à leurs projets.
              Rejoignez ainsi un club et une équipe de bénévoles dynamiques,
              implantés sur le territoire Lillois et rayonnant sur la partie
              Nord de la France ! A l’image du Luc Open Volley, le club
              travaille activement sur son développement afin de proposer un
              événement inédit répondant aux attentes de l’ensemble des joueurs
              (ses) ainsi qu’à ses partenaires.
            </p>
          </div>
        </div>
      </section>
      <section className="plus">
        <div>
          <h2>Un peu plus sur notre histoire...</h2>
          <p>
            USA Volleyball is excited to announce the volleyball standouts who
            will be honored at the 2022 USA Volleyball Hall of Fame ceremony at
            the Dorothy C. Boyce Banquet on May 25 in Orlando, Fla.
            <br />
            <br />
            COLORADO SPRINGS, Colo. (April 21, 2022) – Hundreds of club teams
            will heat up Phoenix on April 22-24 at the USA Volleyball Girls 18s
            Junior National Championship. A record 350 teams with approximately
            4,000 athletes are expected to compete in seven divisions this
            weekend at the Phoenix Convention Center. Most of the athletes will
            be...
            <br />
            <br />
            Sunshine Volleyball Club (Pacific Palisades, Calif./SCVA) won two of
            the seven titles handed out Sunday at the 2022 USA Volleyball Girls
            18 Junior National Championship.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Histoire;
