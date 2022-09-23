import React from "react";
import Navbar from "../components/Header/Navbar";
import histoire from "../assets/Images/histoire.jpg";
import actu01 from "../assets/Images/actu01.jpg";
import Footer from "../components/footer/Footer.js";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="affiche">
        <h1 className="titre_membres">Contactez-nous</h1>
      </div>
      <div className="container">
      <form method="post" action="mail.php" className="form-box">
          <p class="subtitle">Par formulaire</p>
          <input type="text" name="nom" id="nom" placeholder="Nom*" required/>
          <input type="text" name="prenom" id="prenom" placeholder="Prénom*" required/>
          <input type="tel" name="tel" id="tel" placeholder="Téléphone*" required/>
          <input type="email" name="email" id="email" placeholder="Email*" required />
          <input
            type="text"
            name="entreprise"
            id="entreprise"
            placeholder="Entreprise (facultatif)"
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Merci d'indiquer votre message ici..."
            required
          ></textarea>
          <div class="rgpd">
            <input type="checkbox" name="rgpd" id="rgpd" required />
            <label for="rgpd"
              >J'accepte
              <a href="#rgpd"> la politique de confidentialité</a>
            </label>
          </div>
          <input type="submit" value="C'est parti !" id="submit"/>
        </form>
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
