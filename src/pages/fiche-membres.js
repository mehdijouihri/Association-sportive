import React from 'react';
import Navbar from '../components/Header/Navbar';
import "../components/FicheMembres/FicheMembres.css";
import FicheMembres from '../components/FicheMembres/FicheMembres';
import Footer from '../components/footer/footer';
import Carousel from '../components/Carousel/Carousel';

const PficheMembres = () => {
    return (
        <div>
            <Navbar/>
            <FicheMembres/>
            <Carousel/>
            <Footer/>
        </div>
    );
};

export default PficheMembres;