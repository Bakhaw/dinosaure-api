import React, { Component } from 'react';

class DeleteButton extends Component {

  render() {
    return (
      <div className="deleteButton">
        <form action={`http://localhost:3005/${this.props.id}/delete`} method="POST">
          <button className="btn btn-danger" type="submit">Supprimer</button>
        </form>
      </div>
    );
  }

}

export default DeleteButton;
