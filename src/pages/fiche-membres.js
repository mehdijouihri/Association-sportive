import React from 'react';
import Navbar from '../components/Header/Navbar';
import "../components/FicheMembres/FicheMembres.css";
import FicheMembres from '../components/FicheMembres/FicheMembres';
import Footer from '../components/Footer/Footer';

const PficheMembres = () => {
    return (
        <div>
            <Navbar/>
            <FicheMembres/>
            <Footer/>
        </div>
    );
};

export default PficheMembres;