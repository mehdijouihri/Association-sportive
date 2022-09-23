import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (

        <>
            <div className='footercomplet'>
                <div className='footerhaut'>
                    <h1>Rejoindre notre club ?</h1>
                    <a href='#'>Postulez ici !</a>
                </div>
                <div className='footermilieu'>
                    <div className='logofooter'>
                        <img src={require('../../assets/Images/SIMPLON.png')}></img>
                        <img src={require('../../assets/Images/ADIDAS.png')}></img>
                        <img src={require('../../assets/Images/FFVolley.png')}></img>
                        <img src={require('../../assets/Images/HDF.png')}></img>
                    </div>
                    <div className='barrefooter'>

                    </div>
                    <div className='lienmilieufooter'>
                        <a href='/'>ACCUEIL</a>
                        <a href='/infos-utiles'>INFOS UTILES</a>
                        <a href='/membres'>MEMBRES</a>
                        <a href='/notre-histoire'>HISTOIRE</a>
                        <a href='/contact'>CONTACT</a>
                    </div>
                </div>
                <div className='footerbas'>
                    <a>Mention Légales</a>
                    <a>Politique de confidentialité</a>
                    <a>Gestions des cookies</a>
                    <a>© AssoSport 2022</a>
                </div>
            </div>
        </>
    );
};

export default Footer;