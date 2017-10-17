import React, { Component } from 'react';
// functionnal component, comme structure assez basique
export class List extends Component {
  render(){
    return(
      // parcourir le Json pour afficher chaque élément

      <ul>
        {this.props.displayDinos.map((dino, index) =>
          <div><li key={index}>{dino.name}</li>
          <li key={index}>{dino.size}</li>
          <li key={index}>{dino.food}</li></div>
        )}
      </ul>
    )
  }

}