import '../CardPlayer/CardPlayer.css'
import React from 'react';
const CardPlayer = (props) => {
    return (
        <div className="card_player">
            <img src={props.img} alt={`Photo de ${props.name}`} />
            <div className="player_details">
                <p className="player_role">{props.role}</p>
                <h2 className="player_name">{props.name}</h2>
                <a href={props.link} className="player_link">VOIR LA FICHE DU JOUEUR</a>
            </div>
        </div>
    );
};

export default CardPlayer;