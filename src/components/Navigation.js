import React from 'react';
import {NavLink} from "react-router-dom"

const Naviguation = () => {
    return (
        <div className="naviguation">
            <ul>
                <NavLink to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/Formulaire_de_contact">
                    <li>Formulaire_de_contact</li>
                </NavLink>
                <NavLink to="/Infos_utiles">
                    <li>Infos_utiles</li>
                </NavLink>
                <NavLink to="/Liste_des_membres">
                    <li>Liste_des_membres</li>
                </NavLink>
                <NavLink to="/Notre_histoire">
                    <li>Notre_histoire</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Naviguation;