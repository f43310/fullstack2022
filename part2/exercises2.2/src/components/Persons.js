import React from 'react';
const Person = ({ person }) => {
  return (
    <li>
      {person.name} {person.number}
    </li>
  );
};
const Filter = ({ personsFilter }) => {
  return (
    <ul>
      {personsFilter.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </ul>
  );
};

export default Filter;
