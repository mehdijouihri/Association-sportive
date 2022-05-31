import React from 'react';
import './FicheMembres.css';
import membre1 from '../../assets/Images/membre1.jpg';



const FicheMembres = () => {
    return (
        <>
        <div id='pageDestination'>
            <p>Accueil &gt;</p>
            <p>Membres &gt;</p>
            <p>Fiche du membre</p>
        </div>
        <div className='whitebg'>

        <div className="membre1">
          <img  src={membre1}/>
        </div>

        <div className='descriptionmembre'>
            <strong>
                <h3>Jean PATRY</h3>
            </strong>
            <p className='numero'>N°4 - Pointu</p>
            <p><strong>Date de naissance :</strong> 27/12/1996 à Montpellier</p>
            <p><strong>Taille :</strong> 2m07</p>
            <p><strong>Poids :</strong> 94kg</p>
            <p><strong>Hauteur d'attaque :</strong> 3m34</p>
            <p><strong>Hauteur de block :</strong> 3m17</p>
            <h2>Palmarès international</h2>
            <p><strong>2021 :</strong> Médaille de bronze Volleyball Nations League</p>
            <p><strong>2018 :</strong> Médaille d'argent Volleyball Nations League</p>
        </div>

        </div>
        </>
    );
};

export default FicheMembres;