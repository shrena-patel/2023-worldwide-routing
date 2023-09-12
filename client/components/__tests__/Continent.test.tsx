// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { renderApp } from '../../test-setup'

describe('<Continent/>', () => {
  it('displays the Africa continent image', async () => {
    const screen = renderApp('/continents/Africa')
    const img = screen.getByAltText('Africa-continent')
    expect(img).toHaveAttribute('src', '/images/South-Africa.jpg')
  })

  it('displays a title for the continent', async () => {
    const screen = renderApp('/continents/Africa')
    const heading = screen.getByText(/View countries in Africa/)
    expect(heading).toBeVisible()
  })

  it('returns an error message if continent does not exist', async () => {
    const screen = renderApp('/continents/Dog')
    const heading = screen.getByText(/Oh no, no continent/)
    expect(heading).toBeVisible()
  })

  it('displays 5 Country list item in Antarctica', async () => {
    const screen = renderApp('/continents/Antarctica')
    const heading = screen.queryAllByRole('listitem')
    console.log('headings', heading)
    expect(heading).toHaveLength(12)
  })
// use this in COuntry tests
  // it('displays error text if continent does not exist', async () => {
  //   const screen = renderApp('/continents/TheMoon')
  //   expect(screen.getByText(/Oops no country/)).toBeVisible()
  // })

  it('user can view the neighbours of a country', async () => {
    const { user, ...screen } = renderApp('/continents/Africa')
    const countryLink = screen.getByText(/Burundi/)

    await user.click(countryLink)

    // at this point in memory router it has gone to the Burundi Country page
    const countryNeighbour = await screen.findByText(/Tanzania/)
    expect(countryNeighbour).toBeVisible()
  })

  
})