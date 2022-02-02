import React, {Component} from 'react';
import './App.css';
import Form from '../components/Form.js';
import ListBox from '../components/ListBox.js';

class App extends Component {
  constructor() {
    super()
    this.state= {
      argonautsList:[],
      input: ''
    }
  }
  componentDidMount() {
    // fetch('https://calm-fortress-05068.herokuapp.com/list', {
    this.getArgonautsList();
  }

  getArgonautsList() {
    fetch('http://localhost:3000/list')
    .then(response => response.json())
    .then(argonauts => this.setState({argonautsList: argonauts }))
    .catch(console.log)
  }

  onNameSubmit=(event) => {
    fetch('http://localhost:3000/add', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.input
      })
    })
    .then(response => response.json())
    .then(response => {
      if (response.length) {
        console.log(response[0]);
        this.getArgonautsList();
      }
    })
    .catch(console.log)
  }

  onNameChange=(event) => {
    this.setState({input: event.target.value});
  }


  render() {
    const testArgo= this.state.argonautsList.map(argo =>{
      return argo;
    });
    return (
      <div className="App">
        <h1>Les Argonautes</h1>
        <Form onNameChange={this.onNameChange} onNameSubmit={this.onNameSubmit}/>
        <ListBox argonauts={testArgo}/>
        <footer>
          <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
        </footer>
      </div>
    );
  }
}

export default App;
