import React from 'react'
import Country from './Country'
const Countries = ({ search }) => {
  if (search.length === 1) {
    return <Country info={search[0]} />
  } else if (search.length <= 10) {
    return (
      <ul>
        {search.map((item) => (
          <li key={item.name.common}>{item.name.common}</li>
        ))}
      </ul>
    )
  } else {
    return <h3>Too many matches, specify another filter</h3>
  }
}
export default Countries
