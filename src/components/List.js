import React, { Component } from 'react';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';


class List extends Component {

  render() {
    return (
      <div className="list">
        <ul>
          {this.props.displayDinos.map((dino, index) =>
            <li className="col-md-6 listItems text-center" key={index}>
              <img src={dino.image} /><br/>
              Nom: {dino.name}<br/>
              Taille: {dino.size}<br/>
              Régime alimentaire: {dino.food}<br/>
              <div className="buttons">
                <EditButton id={dino._id} />
                <DeleteButton id={dino._id}/>
              </div>
            </li>
          )}
        </ul>
      </div>
    );
  }

}

export default List ;
