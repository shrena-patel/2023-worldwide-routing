import { Link, useParams } from 'react-router-dom'

import countriesData from '../../data/countries'
import { Country as CountryType } from '../../data/countries'

function Country () {
  // the below 'code' & 'name' need to match the
  // params set out in the Route in App.jsx
  const { code, name } = useParams()
  const country: CountryType | undefined = countriesData.find(country => country.code === code)
  if (country === undefined) {
    return <p>Oops no country</p>
  } else {

  
  // Find the neighbours of the selected country
  // If they have neighbour, split them into an array of the country codes of the neighbours
  // otherwise just display an empty array
  // Can just do -> const neighbours = country.neighbours.split(',')

  const neighbours = country.neighbours ? country.neighbours.split(',') : []
  // neighbours is then an array of strings of the neighbours country codes
  // console.log(neighbours)

  // then map over the neighbours array
  // for each neighbour in the array, find where the country code from 'country' equals the code that is neighbour
  const neighboursObjs = neighbours.map(neighbour => countriesData.find(country => country.code === neighbour))
  console.log(neighbours)
  // we can then use this 'neighbours' array and map over it in the return
  // in order to render an <li> for each neighbour that is found
  return (
    <div>
      <h2>{country.flag} {country.name}</h2>
      <h3><strong>Capital: {country.capital}</strong></h3>
      <h3><strong>Area: {country.areaSqKms}</strong></h3>
      <h3><strong>Population: {country.population}</strong></h3>
      <h3><strong>Currency: {country.currencyName} ({country.currencyCode})</strong></h3>
      <h3><strong>Neighbours: </strong></h3>
      <ul>
        {neighboursObjs.map(neighbour => {
            if (neighbour !== undefined) {
           return <li key={neighbour.code}>
            <Link to={`/continent/${name}/${neighbour.code}`}>{neighbour.name}</Link>      
          </li>
         }
          })}
      </ul>
    </div>
  )
}
}

export default Country