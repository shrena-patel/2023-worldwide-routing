import { Link, NavLink } from 'react-router-dom'
import continentData from '../../data/continents'

function Nav() {
  const continentNames = Object.keys(continentData)
  return (
    <div>
      <h2>Nav</h2>
      <ul>
        {continentNames.map(continent => {
          return <li key={continent}>
            <NavLink to={`/continents/${continent}`} style={({ isActive }) => ({ 
                            color: isActive ? 'darkblue' : 'darkpink' })}>
              {continent}</NavLink>
          </li>
        })}
      
      </ul>
      <Link to='/'>Go to homepage</Link>
    </div>
  )
}

export default Nav
