import React, { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
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
  const [personsFilter, setPersonsFilter] = useState(persons);

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
    setPersonsFilter(persons.concat(numberObject));
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
    setPersonsFilter(newArr);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm
        status={(newName, newNumber)}
        handle={(handleNameChange, handleNumberChange, addNumber)}
      />
      <h2>Numbers</h2>
      <Persons personsFilter={personsFilter} />
    </div>
  );
};

export default App;
