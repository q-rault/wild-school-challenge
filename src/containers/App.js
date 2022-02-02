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
    this.getArgonautsList();
  }

  getArgonautsList() {
    fetch('https://calm-fortress-05068.herokuapp.com/list')
    .then(response => response.json())
    .then(argonauts => this.setState({argonautsList: argonauts }))
    .catch(console.log)
  }

  onNameSubmit=(event) => {
    fetch('https://calm-fortress-05068.herokuapp.com/add', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.input
      })
    })
    .then(response => response.json())
    .then(response => {
      if (response.length) {
        // console.log(response[0]);
        this.getArgonautsList();
      }
    })
    .catch(console.log)
  }

  onNameChange=(event) => {
    this.setState({input: event.target.value});
  }


  render() {
    const numberOfRows = Math.ceil((this.state.argonautsList.length)/3);
    const argonautsByColumn=[];
    argonautsByColumn[0]= this.state.argonautsList.slice(0,numberOfRows);
    argonautsByColumn[1]= this.state.argonautsList.slice(numberOfRows, 2*numberOfRows);
    argonautsByColumn[2]= this.state.argonautsList.slice(2*numberOfRows);
    return (
      <div className="App">
        <h1 className="f1">Les Argonautes</h1>
        <Form onNameChange={this.onNameChange} onNameSubmit={this.onNameSubmit}/>
        <ListBox argonautsByColumn={argonautsByColumn}/>
        <footer>
          <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
        </footer>
      </div>
    );
  }
}

export default App;
