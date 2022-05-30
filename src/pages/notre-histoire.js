import React from 'react'
import Navbar from '../components/Header/Navbar'
import voley1 from '../assets/images/voley1.jpeg'
import voley2 from '../assets/images/voley2.jpeg'
import  '../styles/notre-histoire.css'
import ButtonPrimary from '../components/ButtonPrimary/ButtonPrimary'
import ButtonSecondary from '../components/ButtonSecondary/ButtonSecondary'


const Histoire = () => {
    return (
        <div className='histoire-page'>
            <Navbar/>
            <img className="voley1" src={voley1}/>
            <container>
            <img className="voley2" src={voley2}/>
            <div className='texte'>
                <h1>Notre club de volley <span> existe depuis 1996</span></h1>
                <p>Suspendisse potenti. Suspendisse consequat tempus lobortis. Morbi faucibus tortor sed justo ultricies, 
                in placerat dui facilisis. Maecenas ornare ultrices sem. Nam at quam urna. 
                Sed sit amet mi pretium, ultrices elit lacinia, malesuada nisl. Suspendisse potenti. 
                Vestibulum luctus massa quis augue tincidunt, non venenatis turpis viverra. 
                In imperdiet nec risus a auctor. Cras et bibendum tortor. Donec dignissim auctor blandit.</p>
               <div className='bt'>
                <ButtonPrimary value="Nous rejoindre"/>
                <ButtonSecondary value="En savoir plus"/>
                </div>
                </div>
           </container>
                <div class="container2">
                <h1>Un peu plus sur notre histoire...</h1>
                <p>USA Volleyball is excited to announce the volleyball standouts who will be honored at the 2022 USA Volleyball Hall of Fame ceremony at the Dorothy C. Boyce Banquet on May 25 in Orlando, Fla.</p>
                <p>COLORADO SPRINGS, Colo. (April 21, 2022) – Hundreds of club teams will heat up Phoenix on April 22-24 at the USA Volleyball Girls 18s Junior National Championship. A record 350 teams with approximately 4,000 athletes are expected to compete in seven divisions this weekend at the Phoenix Convention Center. Most of the athletes will be...</p>
                <p>Sunshine Volleyball Club (Pacific Palisades, Calif./SCVA) won two of the seven titles handed out Sunday at the 2022 USA Volleyball Girls 18 Junior National Championship.</p>
       </div>
        </div>
        
    );
};

export default Histoire;