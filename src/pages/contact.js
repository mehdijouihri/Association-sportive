import React from 'react';
import Navbar from '../components/Header/Navbar';
import histoire from '../assets/images/histoire.jpg'
import actu01 from '../assets/images/actu01.jpg'
import '../styles/contact.css'
import Footer from '../components/footer/footer'
import Formulaire from '../components/Formulaire'
import '../styles/contact.css'

const Contact = () => {
    return (
    <div>
            <Navbar />
            <img className="actu01" src={actu01}/>
            <container>
                 <img className="histoire" src={histoire}/>
                 <div id="contact-form">
            <Formulaire/>
        </div>
           </container>  
           <Footer/>
    </div>
        
    );
};
export default Contact;
