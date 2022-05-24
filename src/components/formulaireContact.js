import React from 'react';
import "./contact.css";

const Contact = () => {
    return (

        <>
            <div className='COMPLETCONTACT'>
                <img src={require('../assets/Images/image-contact.png')}></img>
                <div class="contactez-nous">
                    <h1>Vous souhaitez prendre contact avec nous ?</h1>
                    <p>Merci de remplir le formulaire ci-dessous&nbsp;:</p>
                    <form action="/page-traitement-donnees" method="post">
                        <div className='partien'>
                            <div className='formule'>
                                <label for="nom"></label>
                                <input type="text" id="nom" name="nom" placeholder="Nom" required></input>
                            </div>
                            <div className='formule'>
                                <label for="prenom"></label>
                                <input type="text" id="nom" name="nom" placeholder="Prénom" required></input>
                            </div>
                        </div>
                        <div className='partiea'>
                            <div>
                                <label for="numtel"></label>
                                <input type="text" id="nom" name="nom" placeholder="Numéro de tel" required></input>
                            </div>
                            <div className='formule'>
                                <label for="email"></label>
                                <input type="email" id="email" name="email" placeholder="Adresse mail" required></input>
                            </div>
                        </div>

                        <div className='formule'>
                            <label for="message"></label>
                            <textarea id="message" name="message" placeholder="Indiquez votre message ici..." required></textarea>
                        </div>
                        <div className='vendame'>
                            <input type="checkbox" id="subscribeNews" name="subscribe" value="newsletter" required></input>
                            <label for="subscribeNews">J'accepte la politique de confidentialité</label>
                        </div>
                        <div className='formule'>
                            <button className='boutoncontact' type="submit">Envoyer un message</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;