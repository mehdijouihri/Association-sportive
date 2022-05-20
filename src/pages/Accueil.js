import React from 'react';
import Navigation from '../components/Navigation';
import CarteActu from '../components/CarteActu/CarteActu';
import Header from '../components/Header/Header';

const Accueil = () => {
    return (
        <div>
            <Header/>
            <Navigation/>
            <CarteActu/>
        </div>
    );
};

export default Accueil;