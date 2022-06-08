import React from 'react';

const Filter = ({ status, handle }) => {
  return (
    <form onSubmit={handle.addNumber}>
      <div>
        name:{' '}
        <input value={status.newName} onChange={handle.handleNameChange} />
        <br />
        number:{' '}
        <input value={status.newNumber} onChange={handle.handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Filter;
