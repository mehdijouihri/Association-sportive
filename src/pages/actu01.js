import React from "react";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer"
import "../styles/actu.css";

const Actu = () => {
  return (
    <div>
      <Navbar />
      <section className="temp_actu">
        <div>
          <h1>European Golden League : Les Bleues dans le grand bain</h1>
          <div className="actu_details">
            <p className="actu_category">CLUB</p>
            <p className="actu_date">18 mai 2022</p>
          </div>
          <img src={require('../assets/Images/actu01.jpg')} alt="" />
          <p className="content_actu">Les joueurs du Paris Saint-Germain ont conclu hier soir une tournée express de 48h à Doha qui leur ont permis d’aller à la rencontre des supporters qatari et d’activer les partenaires du club présents localement. C’est la première visite du Club au Qatar depuis 2019 suite aux reports en lien avec la situation sanitaire.
<br/>
<br/>
Alors que le pays se prépare à accueillir les fans de football du monde entier cet hiver, l’ensemble des joueurs de l’équipe première sont partis à la découverte des nouvelles infrastructures mises en place par le Qatar. Les joueurs ont pu mesurer les progrès colossaux réalisés et la qualité des installations dont bénéficieront les 736 joueurs invités à représenter leurs pays dans la plus prestigieuse des compétitions de football, la Coupe du Monde, à partir du 21 novembre prochain.
<br/>
<br/>
Ce Qatar Tour 2022 a permis au Paris Saint-Germain de mettre en lumière ses partenaires All, Aspetar/Aspire, Ooredoo, Qatar Airways, Qatar Tourism et QNB.  </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Actu;
