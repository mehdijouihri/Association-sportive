import React from "react";
import "../styles/accueil.css";

import Navbar from "../components/Header/Navbar.js";
import { POSTS } from "../assets/data/Posts";
import { PLAYERS } from "../assets/data/Players";
import FirstPost from "../components/FirstPost/FirstPost.js";
import CardActu from "../components/CardActu/CardActu";
import CardPlayer from "../components/CardPlayer/CardPlayer";
import RedArrow from "../components/RedArrow/RedArrow.js";
import ButtonPrimary from '../components/ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../components/ButtonSecondary/ButtonSecondary';
import Footer from '../components/footer/footer';

const Accueil = () => {
  return (
    <>
      <Navbar />
      <FirstPost
        img={POSTS[0].img}
        category={POSTS[0].category}
        title={POSTS[0].title}
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
        <img src={require("../assets/images/histoire.jpg")} alt="Photo des joueurs" />
        <div className="histoire_details">
          <h4>Notre club de Volley existe depuis 1976</h4>
          <p>
            Suspendisse potenti. Suspendisse consequat tempus lobortis. Morbi
            faucibus tortor sed justo ultricies, in placerat dui facilisis.
            Maecenas ornare ultrices sem. Nam at quam urna. Sed sit amet mi
            pretium, ultrices elit lacinia, malesuada nisl. Suspendisse potenti.
            Vestibulum luctus massa quis augue tincidunt, non venenatis turpis
            viverra. In imperdiet nec risus a auctor. Cras et bibendum tortor.
            Donec dignissim auctor blandit.
          </p>
          <div className="buttons_group">
              <ButtonPrimary value='Nous rejoindre' />
              <ButtonSecondary value='En savoir plus' />
          </div>
        </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Accueil;
