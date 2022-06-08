import React from "react";
import "./FicheMembres.css";

const FicheMembres = (props) => {
  return (
    <>
      <div id="pageDestination">
        <p>Accueil &gt;</p>
        <a href="/membres">Membres</a>
      </div>

      <div className="whitebg">
        <div className="membre1">
          <img src={require(`../../assets/Images/${props.id}.jpg`)} />
        </div>

        <div className="descriptionmembre">
          <strong>
            <h3>{props.nom}</h3>
          </strong>
          <p className="numero">{props.role}</p>
          <p>
            <strong>Date de naissance :</strong> {props.date}
          </p>
          <p>
            <strong>Taille :</strong> {props.taille}
          </p>
          <p>
            <strong>Poids :</strong> {props.kg}
          </p>
          <p>
            <strong>Hauteur d'attaque :</strong> {props.attaq}
          </p>
          <p>
            <strong>Hauteur de block :</strong> {props.block}
          </p>
          <h2>Palmarès international</h2>
          <p>
            <strong>{props.datePalma1} :</strong> {props.palma1}
          </p>
          <p>
            <strong>{props.datePalma2} :</strong> {props.palma2}
          </p>
        </div>
      </div>
    </>
  );
};

export default FicheMembres;
