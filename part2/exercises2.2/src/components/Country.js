import React from 'react'
import Weather from './Weather'
const Country = ({ info }) => {
  return (
    <div>
      <h1>{info.name.common}</h1>
      <div>
        <span>capital</span> <span>{info.capital}</span>
      </div>
      <div>
        <span>area</span> <span>{info.area} km²</span>
      </div>
      <h2>languages:</h2>
      <ul>
        {Object.keys(info.languages).map((key) => {
          console.log(key, info.languages[key])
          return <li key={key}>{info.languages[key]}</li>
        })}
      </ul>
      <img alt={info.name.common + ' flags'} src={info.flags.png} />
      <Weather city={info.capital} />
    </div>
  )
}

export default Country
