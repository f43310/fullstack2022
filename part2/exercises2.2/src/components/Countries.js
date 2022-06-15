import React, { useState } from 'react'
import Country from './Country'
const Countries = ({ search }) => {
  // eslint-disable-next-line
  const [country, setCountry] = useState({})

  if (search.length === 1) {
    return <Country info={search[0]} />
  } else if (search.length <= 10) {
    return (
      <div>
        <ul>
          {search.map((item) => (
            <li key={item.name.common}>
              {item.name.common}
              <button onClick={() => setCountry(item)}>show</button>
            </li>
          ))}
        </ul>
        {JSON.stringify(country) !== '{}' ? <Country info={country} /> : ''}
      </div>
    )
  } else {
    return <h3>Too many matches, specify another filter</h3>
  }
}
export default Countries
