import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
// import axios from 'axios'
const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [result, setResult] = useState([])

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setCountries(response.data)
    })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleSearchChange = (event) => {
    console.log(event.target.value)
    setResult(
      countries.filter((country) =>
        country.name.common
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      )
    )
    setSearch(event.target.value)
  }
  return (
    <div>
      <span>find countries</span>{' '}
      <input type="text" value={search} onChange={handleSearchChange} />
      <Countries search={result} />
    </div>
  )
}

export default App
