import React, { Component } from 'react';
import Button from './Button';


class List extends Component {

  render() {
    return (
      <div className="list">
        <ul>
          {this.props.displayDinos.map((dino, index) =>
            <li key={index}>
              <img src={dino.image} /><br/>
              {dino.name}<br/>
              {dino.size}<br/>
              {dino.food}<br/>
              <Button id={dino._id}/>
            </li>
          )}
        </ul>
      </div>
    );
  }

}

export default List ;
