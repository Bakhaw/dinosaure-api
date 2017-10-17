import React, { Component } from 'react';

// functionnal component, comme structure assez basique
export class List extends Component {
  render(){
    return(
      // parcourir le Json pour afficher chaque élément

      <ul>
        {this.props.displayDinos.map((dino, index) =>
          <div>
            <li key={index}>{dino.name}</li>
            <li key={index}>{dino.size}</li>
            <li key={index}>{dino.food}</li>
            <li>
              <form action={`http://localhost:3005/${dino._id}/edit`} method="POST">
                <button>Edit</button>
              </form>
            </li>
            <li>
            <form action={`http://localhost:3005/${dino._id}/delete`} method="GET">
              <button>Supprimer</button>
            </form>
            </li>
          </div>
        )}
      </ul>
    )
  }

}
