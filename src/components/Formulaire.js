import React, { Component } from 'react';

class Formulaire extends Component {
  
  render() {
    return (
      <form action="http://localhost:3005/add" method="POST" encType="multipart/form-data">
        <input type="text" name="name" placeholder="Entrez un nom"/>
        <input type="text" name="size" placeholder="Entrez une taille"/>
        <input type="text" name="food" placeholder="Entrez un type de nourriture"/>
        <input type="file" name="image" id="file"/>
        <button type='submit'>Ajouter</button>
      </form>
    )
  }
}

export default Formulaire;
