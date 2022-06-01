import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/formulaire.css'


function Formulaire() {
  const [state, handleSubmit] = useForm("mayvvlzz");
  if (state.succeeded) {
      return <p>Merci de nous avoir contacter</p>;
  }
  return (
   
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        <div class="titre">
            Vous souhaitez prendre<br/>
            contact avec nous ?<br/>
            <span> Merci de remplir le formulaire ci-dessous :</span>
        </div>
      </label>
  
  <container class="np">
      <div class="name">
            Name : 
            <input
            id="Nom"
            type="nom" 
            name="Nom" placeholder=' nom'
            />
      </div>

      <div class="prenom">
             Prénom : 
            <input
            id="Prenom"
            type="prenom" 
            name="Prénom"
            placeholder=' prénom'
            />
      </div>      
      </container>
      <container class="tm">
      <div class="mail">
        E-mail :
      <input
        id="email"
        type="email" 
        name="email"
        placeholder=' e-mail'
      />
       </div>

       <div class="numero">
         Numero tel : 
       <input
        id="Numero"
        type="numero" 
        name="Numéro de tél"
        placeholder=' Tel'
      />
      </div>
      
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      </container>
      

      <textarea
        id="message"
        name="message"
        placeholder='message'
      />

      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
      
      </form>
      
  );
}

export default Formulaire;
