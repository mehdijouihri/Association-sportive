import React from 'react';
import Navigation from '../components/Header/Navbar';
import '../styles/membre.css';
import CardPlayer from '../components/CardPlayer/CardPlayer';
import Footer from '../components/Footer/Footer';
import { PLAYERS } from '../assets/data/Players';


const Membres = () => {
    return (
        <>
            <Navigation />
            <div className="affiche">
                <h1 className="titre_membres">Membres</h1>

            </div>
            <div className="container">
                <section className="equipe">
                    <div className="equipe_titre">
                        <h2>Joueurs</h2>
                        <p className="equipe_phrase">Découvrez notre équipe</p>
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
            <div className="container">
                <section className="membres">
                    <div className="membre_equipe">
                        <h2>Membres</h2>
                        <p className="membre_phrase">Ceux qui font vivre le club</p>
                    </div>
                    <div className="membre_joueur">
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

                </section>
            </div>
            <Footer />
        </>
    );
};

export default Membres;