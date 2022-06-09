import React from "react";
import "../styles/accueil.css";
import Navbar from "../components/Header/Navbar.js";
import { POSTS } from "../assets/data/Posts";
import { PLAYERS } from "../assets/data/Players";
import FirstPost from "../components/FirstPost/FirstPost.js";
import CardActu from "../components/CardActu/CardActu";
import CardPlayer from "../components/CardPlayer/CardPlayer";
import RedArrow from "../components/RedArrow/RedArrow.js";
import ButtonPrimary from "../components/ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary/ButtonSecondary";
import Footer from "../components/Footer/Footer";

const Accueil = () => {
  return (
    <>
      <Navbar />
      <FirstPost
        img={POSTS[0].img}
        category={POSTS[0].category}
        title={POSTS[0].title}
        id={POSTS[0].id}
      />
      <section className="actus">
        <div className="container">
          <div className="intro_home">
            <div>
              <h2>Actualités</h2>
              <p>Suivez la vie du club en direct</p>
            </div>
            <RedArrow />
          </div>
          <div className="actus_bloc">
            {POSTS.slice(0, 3).map((data, key) => {
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
      <section className="joueurs">
        <div className="container">
          <div className="intro_home">
            <div>
              <h3>Joueur</h3>
              <p>Découvrez notre équipe</p>
            </div>
            <RedArrow />
          </div>
          <div className="joueurs_bloc">
            {PLAYERS.slice(0, 3).map((data, key) => {
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
        </div>
      </section>
      <section className="histoire">
        <div className="container">
          <img
            src={require("../assets/Images/imagesportines/inesgioca.jpeg")}
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
      <Footer />
    </>
  );
};

export default Accueil;
