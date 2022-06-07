import React, { useState } from 'react';
const Number = ({ name, number }) => {
  return (
    <li>
      {name} {number}
    </li>
  );
};
const App = () => {
  const init = [
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ];
  const [persons, setPersons] = useState(init);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterName, setFilterName] = useState('');

  const addNumber = (event) => {
    event.preventDefault();
    const numberObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    const found = persons.find(
      (element) =>
        JSON.stringify(numberObject.name) === JSON.stringify(element.name)
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
  const handleFilterChange = (event) => {
    console.log(event.target.value);
    const filter_name = event.target.value || '';
    setFilterName(filter_name);
    console.log('filterName', filter_name);
    let newArr = persons.filter((person) => {
      console.log(person.name, filter_name);
      return person.name.toLowerCase().includes(filter_name);
    });
    console.log(newArr);
    setPersons(newArr);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with{' '}
        <input type="text" value={filterName} onChange={handleFilterChange} />
      </div>
      <h2>add a new</h2>
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
          <Number key={person.id} name={person.name} number={person.number} />
        ))}
      </ul>
    </div>
  );
};

export default App;
