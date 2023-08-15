import continentData from '../../data/continents'
import Home from './Home'

function Nav() {
  const continentNames = Object.keys(continentData)
  console.log(continentNames)
  return (
    <div>
      <h2>Nav</h2>
      <ul>
        {continentNames.map((continent) => {
          return (
            <>
              <li key={continent}>{continent}</li>
            </>
          )
        })}
        <li>Home</li>
      </ul>
    </div>
  )
}

export default Nav
