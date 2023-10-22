import React from "react";
import Navigation from "../components/Header/Navbar";
import "../styles/infos-utiles.css";
import "../styles/accueil.css";
import CardActu from "../components/CardActu/CardActu";
import Footer from "../components/footer/Footer.js";
import ButtonPrimary from "../components/ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary/ButtonSecondary";
import { POSTS } from "../assets/data/Posts";


const InfosUtiles = () => {
  return (
    <>
      <Navigation />
      <div className="affiche_info">
        <h1 className="titre_info">Infos utiles</h1>
      </div>
      <section className="actus">
        <div className="container">
          <div className="intro_home">
            <div>
              <h2>Actualités</h2>
              <p>Suivez la vie du club en direct</p>
            </div>
          </div>
          <div className="actus_bloc">
            {POSTS.slice(0, 6).map((data, key) => {
              return (
                <CardActu
                  img={data.img}
                  category={data.category}
                  date={data.date}
                  title={data.title}
                  key={key}
                  id={data.id}
                />
              );
            })}
          </div>
        </div>
      </section>
      <section className="histoire">
        <div className="container">
          <img
            src={require("../assets/Images/histoire.jpg")}
            alt="Photo des joueurs"
          />
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
            <div className="buttons_group">
              <ButtonSecondary value="En savoir plus" href="notre-histoire" />
            </div>
          </div>
        </div>
      </section>
      <section className="information container">
        <div className="info_utile_detail">
          <h2 className="info_detail">Documentation utiles</h2>
          <ul className="detail">
            <li>Fiche d'inscription 2022 - 2023 (DOC)</li>
            <li>Planning 2022 - 2023 (PDF)</li>
            <li>Brochure 2022 - 2023 (PDF)</li>
          </ul>
        </div>
        <div className="info_utile_detail">
          <h2 className="info_detail">Horaires</h2>
          <ul className="detail">
            <li>Adultes: Lundi de 19h à 20H30</li>
            <li>Enfant (-12): Mercredi de 17h à 18H30</li>
            <li>Ados: Vendredi de 18h30 à 20h</li>
          </ul>
        </div>
        <div className="info_utile_detail">
          <h2 className="info_detail">Contact</h2>
          <ul className="detail">
            <li>Par tél: 06 24 54 94</li>
            <li>Par mail: contact[at]volley.fr</li>
            <li>Via notre formulaire</li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default InfosUtiles;
