import React from 'react'
const Person = ({ person, handleDel }) => {
  return (
    <li>
      {person.name} {person.number}{' '}
      <button onClick={() => handleDel(person.id)}>delete</button>
    </li>
  )
}
const Persons = ({ personsFilter, handleDel }) => {
  return (
    <ul>
      {personsFilter.map((person) => (
        <Person key={person.id} person={person} handleDel={handleDel} />
      ))}
    </ul>
  )
}

export default Persons
