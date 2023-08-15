import Nav from './Nav.tsx'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="title">
        <img
          src="/images/color_earth.gif"
          alt="A coloured globe of the earth spinning around on its axis"
        />
        <h1>Navigating the worldwide routes</h1>
      </div>
      {/* This 'main' div is only for styling (so we can use flexbox) */}
      <div className="main">
        <Nav />
        {/* outlet will be whatever the child component is in the route, like {{{body}}} in handlebars */}
        <Outlet />
      </div>
    </>
  )
}

export default App
