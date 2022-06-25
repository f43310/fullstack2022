import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsService from './services/persons'
import Notification from './components/Notification '

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [personsFilter, setPersonsFilter] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personsService.getAll().then((persons) => {
      setPersons(persons)
      setPersonsFilter(persons)
    })
  }, [])

  const notify = (message, type = 'info') => {
    setErrorMessage({ message, type })
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  }

  const addNumber = (event) => {
    event.preventDefault()
    const numberObject = {
      name: newName,
      number: newNumber,
    }

    const found = persons.find(
      (element) =>
        JSON.stringify(numberObject.name) === JSON.stringify(element.name)
    )
    // console.log(found)
    if (found !== undefined) {
      if (
        window.confirm(
          `${found.name} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        personsService
          .update(found.id, { ...found, number: newNumber })
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== found.id ? person : returnedPerson
              )
            )
            setPersonsFilter(
              personsFilter.map((person) =>
                person.id !== found.id ? person : returnedPerson
              )
            )
            notify(`Updated info of ${found.name}`)
            setNewName('')
            setNewNumber('')
          })
          .catch((err) => {
            console.log(err, '2222222222')
            notify(err.response.data.error, 'alert')
            // setPersons(persons.filter((p) => p.id !== found.id))
            // setPersonsFilter(personsFilter.filter((p) => p.id !== found.id))
          })
        return false
      }
    }

    personsService
      .create(numberObject)
      .then((person) => {
        setPersons(persons.concat(person))
        setPersonsFilter(personsFilter.concat(person))
        setNewName('')
        setNewNumber('')
        notify(`${person.name} is already added to phonebook.`)
      })
      .catch((error) => {
        // this is the way to access the error message
        console.log(error.response.data, '11111111111111111')
        notify(`${error.response.data.error}`, 'alert')
        return
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
      <Notification notification={errorMessage} />
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
