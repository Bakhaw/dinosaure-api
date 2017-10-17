import React, {Component} from 'react';
import './App.css';
import request from 'request';
import {List} from './components/List'; // en curly brackets car export et functionnal component
import Formulaire from './components/Formulaire';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dinos: []
    };
  }

  // voir le Json, on lie le back et le front
  componentDidMount() {
    request(`http://localhost:3005/`, (error, response, body) => {
      if (error) {
        console.log(error)
      }
      console.log(body);
      this.setState({dinos: JSON.parse(body)});
    });
  }
  render() {
    return (
      <div className="App">
        <h2>Dino API</h2>
        <h1>Ajoutez votre dino</h1>
        <Formulaire/>
        <div className="dinos">
          <List displayDinos={this.state.dinos}/>
        </div>
      </div>
    );
  }
}

export default App;
