import { Link, useParams } from 'react-router-dom'
import continentData from '../../data/continents'


function Continent() {
  const { name } = useParams()
  const continent = continentData[name || 'Antarctica']

  return (
    <div>
        <h2>{name}</h2>
        <img src={`/images/${continent.image}`} alt={`${name}-continent`} />
        <ul>
          {continent.countries.map((country) => <li key={country.code}>
            <Link to={`/continent/${name}/${country.code}`}>{country.name}</Link>
          </li>)}
        </ul>
      </div>
  )
}

export default Continent