import React from 'react';
import FicheMembres from '../components/FicheMembres/FicheMembres.js';
import Navbar from '../components/Header/Navbar.js';


const Accueil = () => {
    return (
        <div>
            <Navbar />
            <FicheMembres />
        </div>
    );
};

export default Accueil;