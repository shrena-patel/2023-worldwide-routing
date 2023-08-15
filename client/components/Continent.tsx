import { Link, useParams } from 'react-router-dom'
import continentData from '../../data/continents'


function Continent() {
  const { name } = useParams()
  console.log(name)

  const continent = continentData[name || 'Antarctica']
  console.log(continentData[name || 'Antarctica'])


  console.log(continent)
  return (
    <div>
        <h2>{name}</h2>
        <img src={`/images/${continent.image}`} alt='continent' />
        <ul>
          {/* map over the continent array, and for each
        display a link to the country */}
          {continent.countries.map((country) => <li key={country.code}>
            <Link to={`/continents/${name}/${country.code}`}>{country.name}</Link>
          </li>)}
        </ul>
      </div>
  )
}

export default Continent