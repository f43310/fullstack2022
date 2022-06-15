import React from 'react'
const Countries = ({ result, setResult }) => {
  if (result.length === 1) {
    return null
  }
  return (
    <div>
      <ul>
        {result.map((item) => (
          <li key={item.name.common}>
            {item.name.common}
            <button onClick={() => setResult([item])}>show</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Countries
