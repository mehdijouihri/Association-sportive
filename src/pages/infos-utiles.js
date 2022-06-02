import React from 'react';
import Navigation from '../components/Header/Navbar';
import '../styles/infos-utiles.css'
import CardActu from '../components/CardActu/CardActu';
import Footer from '../components/Footer/Footer';
import ButtonPrimary from '../components/ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../components/ButtonSecondary/ButtonSecondary';
import { POSTS } from '../assets/data/Posts';


const InfosUtiles = () => {
    return (
        <>

            <Navigation />
            <div className='affiche_info'>
                <h1 className='titre_info'>Infos utiles</h1>
            </div>
            <div className='container'>
                <section className='info_titre'>
                    <div className='titre_phrase'>
                        <h2 className='info_titre'>Nos actualités</h2>
                    <p className='info_phrase'>Suivez la vie du club en direct</p></div>
                </section>
            </div>
            <div className='info_actu'>
                {POSTS.slice(0, 6).map((data, key) => {
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
            <section className='information'>
                <div className='info_utile_detail'>
                    <h2 className='info_detail'>Documentation utiles</h2>
                    <ul className='detail'>
                        <li>Fiche d'inscription 2022 - 2023 (DOC)</li>
                        <li>Planning 2022 - 2023 (PDF)</li>
                        <li>Brochure 2022 - 2023 (PDF)</li>
                    </ul>
                </div>
                <div className='info_utile_detail'>
                    <h2 className='info_detail'>Horaires</h2>
                    <ul className='detail'>
                        <li>Adultes: Lundi de 19h à 20H30</li>
                        <li>Enfant (-12): Mercredi de 17h à 18H30</li>
                        <li>Ados: Vendredi de 18h30 à 20h</li>
                    </ul>
                </div>
                <div className='info_utile_detail'>
                    <h2 className='info_detail'>Contact</h2>
                    <ul className='detail'>
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