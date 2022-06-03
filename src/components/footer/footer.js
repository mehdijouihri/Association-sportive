import React from 'react';
import "./footer.css";

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
                        <img src={require('../../assets/images/simplon.logo.png')}></img>
                        <img src={require('../../assets/images/logo_adidas.png')}></img>
                        <img src={require('../../assets/images/logo_ffvolley.png')}></img>
                        <img src={require('../../assets/images/logo_hdf.png')}></img>
                    </div>
                    <div className='barrefooter'>

                    </div>
                    <div className='lienmilieufooter'>
                        <a href='#'>ACCEUIL</a>
                        <a href='#'>INFOS PRATIQUES</a>
                        <a href='#'>MEMBRES</a>
                        <a href='#'>HISTOIRE</a>
                        <a href='#'>CONTACT</a>
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