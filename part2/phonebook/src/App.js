import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsService from './services/persons'
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [personsFilter, setPersonsFilter] = useState([])

  useEffect(() => {
    personsService.getAll().then((persons) => {
      setPersons(persons)
      setPersonsFilter(persons)
    })
  }, [])

  const addNumber = (event) => {
    event.preventDefault()
    const numberObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    const found = persons.find(
      (element) =>
        JSON.stringify(numberObject.name) === JSON.stringify(element.name)
    )
    if (found !== undefined) {
      alert(`${numberObject.name} is already added to phonebook`)
      return false
    }

    personsService.create(numberObject).then((person) => {
      setPersons(persons.concat(person))
      setPersonsFilter(personsFilter.concat(person))
      setNewName('')
      setNewNumber('')
    })
  }
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    const filter_name = event.target.value || ''
    setFilterName(filter_name)
    console.log('filterName', filter_name)

    let newArr = persons.filter((person) => {
      console.log(person.name, filter_name)
      return person.name.toLowerCase().includes(filter_name)
    })
    console.log(newArr)
    setPersonsFilter(newArr)
  }

  const handleDel = (id) => {
    const item = persons.filter((p) => p.id === id)
    console.log(item)
    if (window.confirm(`Del ${item[0].name} ?`)) {
      personsService
        .del(id)
        .then((res) =>
          setPersonsFilter(personsFilter.filter((n) => n.id !== id))
        )
    }
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterName={filterName} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm
        status={{ newName, newNumber }}
        handle={{ handleNameChange, handleNumberChange, addNumber }}
      />
      <h2>Numbers</h2>
      <Persons personsFilter={personsFilter} handleDel={handleDel} />
    </div>
  )
}

export default App