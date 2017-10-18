import React, { Component } from 'react';

class EditButton extends Component {

  render() {
    return (
      <div className="editButton">
        <form action={`http://localhost:3005/${this.props.id}/edit`} method="POST">
          <button className="btn btn-danger" type="submit">Modifier</button>
        </form>
      </div>
    );
  }

}

export default EditButton;
