import { Link } from 'react-router-dom'
import continentData from '../../data/continents'

function Nav() {
  const continentNames = Object.keys(continentData)
  console.log(continentNames)
  return (
    <div>
      <h2>Nav</h2>
      <ul>
        {continentNames.map(continent => {
          return <li key={continent}>
            <Link to={`/continents/${continent}`}>
              {continent}</Link>
          </li>
        })}
      
      </ul>
      <Link to='/'>Go to homepage</Link>
    </div>
  )
}

export default Nav
