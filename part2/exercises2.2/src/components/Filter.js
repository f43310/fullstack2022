import React from 'react';

const Filter = ({ filterName, handleFilterChange }) => {
  return (
    <div>
      filter shown with
      <input type="text" value={filterName} onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;
