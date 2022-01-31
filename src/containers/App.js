import './App.css';
import Form from '../components/Form.js';
import ListBox from '../components/ListBox.js';

function App() {
  return (
    <div className="App">
      <h1>Les Argonautes</h1>
      <Form />
      <ListBox />
      <footer>
        <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
      </footer>
    </div>
  );
}

export default App;
