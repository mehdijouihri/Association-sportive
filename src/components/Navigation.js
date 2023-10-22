import React from 'react';
import {NavLink} from "react-router-dom"

const Naviguation = () => {
    return (
        <div className="naviguation">
            <ul>
                <NavLink to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/contact">
                    <li>Contact</li>
                </NavLink>
                <NavLink to="/infos-utiles">
                    <li>Infos utiles</li>
                </NavLink>
                <NavLink to="/membres">
                    <li>Membres</li>
                </NavLink>
                <NavLink to="/notre-histoire">
                    <li>Notre histoire</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Naviguation;