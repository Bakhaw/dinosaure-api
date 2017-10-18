import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Formulaire extends Component {

  render() {
    return (
      <form className="form-group" action="http://localhost:3005/add" method="POST" encType="multipart/form-data">
        <input className="form-control col-md-4" type="text" name="name" placeholder="Entrez un nom"/>
        <input className="form-control col-md-4" type="text" name="size" placeholder="Entrez une taille"/>
        <input className="form-control col-md-4" type="text" name="food" placeholder="Entrez un type de nourriture"/>
        <input className="btn-file" type="file" name="image" id="file"/>
        <button className="btn btn-primary" type='submit'>Ajouter</button>
      </form>
    )
  }
}

export default Formulaire;
