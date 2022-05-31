import React from 'react';
import './Carousel.css'

const Carousel = () => {
  return (
    <div>
    <section className='joueurs'>
      <div className='container'>
        <div className='intro_home'>
          <div>
            <h3>Nos autres joueurs</h3>
            <p>Découvrez notre équipe</p>
          </div>

        </div>
        
      <div className='joueurs-bloc'>
      <button className='red_arrow' id='red_larrow'>
            <img src='/static/media/red-arrow.f1a9f9fe27d33e59e0dd047e42d858b5.svg'></img>
      </button>
        <div className='card_player'>
          <img src='http://localhost:3000/static/media/player01.48d30e410f398806b5a8.jpg' alt='photo de Jean Patry'></img>
          <div className='player_details'>
            <p className='player_role'>arrière droit</p>
            <h2 className='player_name'>Jean Patry</h2>
            <a className='player_link'>VOIR LA FICHE DU JOUEUR</a>
          </div>
        </div>
        <div className='card_player'>
          <img src='http://localhost:3000/static/media/player01.48d30e410f398806b5a8.jpg' alt='photo de Jean Patry'></img>
          <div className='player_details'>
            <p className='player_role'>arrière droit</p>
            <h2 className='player_name'>Jean Patry</h2>
            <a className='player_link'>VOIR LA FICHE DU JOUEUR</a>
          </div>
        </div>
        <div className='card_player'>
          <img src='http://localhost:3000/static/media/player01.48d30e410f398806b5a8.jpg' alt='photo de Jean Patry'></img>
          <div className='player_details'>
            <p className='player_role'>arrière droit</p>
            <h2 className='player_name'>Jean Patry</h2>
            <a className='player_link'>VOIR LA FICHE DU JOUEUR</a>
          </div>
        </div>
        <button className='red_arrow'>
            <img src='/static/media/red-arrow.f1a9f9fe27d33e59e0dd047e42d858b5.svg'></img>
        </button>
      </div>
    </div>
    </section>
    </div>
  );
};

export default Carousel;
