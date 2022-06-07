import React, { useState } from 'react';
const Number = ({ name }) => {
  return <li>{name}</li>;
};
const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const addNumber = (event) => {
    event.preventDefault();
    const numberObject = {
      name: newName,
    };

    const found = persons.find(
      (element) => JSON.stringify(numberObject) === JSON.stringify(element)
    );
    if (found !== undefined) {
      alert(`${numberObject.name} is already added to phonebook`);
      return false;
    }

    setPersons(persons.concat(numberObject));
    setNewName('');
  };
  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          name: <input value={newName} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <Number key={person.name} name={person.name} />
        ))}
      </ul>
    </div>
  );
};

export default App;
