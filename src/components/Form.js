function Form({onNameChange, onNameSubmit}) {
    return (
      <div className="Form flex flex-row justify-center">
        <input className="input grow w-50" onChange={onNameChange} type="text" placeholder="entrer un nom ici" />
        <button className="button grow dib" onClick={onNameSubmit} >Ajouter</button>
      </div>
    );
}

export default Form;