function Form({onNameChange, onNameSubmit}) {
    return (
      <div>
        <input onChange={onNameChange} type="text" placeholder="entrer un nom ici" />
        <button onClick={onNameSubmit} >Ajouter</button>
      </div>
    );
}

export default Form;