import React, { useState } from 'react';
const Number = ({ name, number }) => {
  return (
    <li>
      {name} {number}
    </li>
  );
};
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addNumber = (event) => {
    event.preventDefault();
    const numberObject = {
      name: newName,
      number: newNumber,
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
    setNewNumber('');
  };
  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
          <br />
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <Number
            key={person.number}
            name={person.name}
            number={person.number}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
