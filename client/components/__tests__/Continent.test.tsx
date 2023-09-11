// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { renderApp } from '../../test-setup'

describe('<Continent/>', () => {
  it('Displays the Africa continent image', async () => {
    const { ...screen } = renderApp('/continents/Africa')
    const img = screen.getByAltText('Africa-continent')
    expect(img).toHaveAttribute('src', '/images/South-Africa.jpg')
  })

  it('user can view the neighbours of a country', async () => {
    const { user, ...screen } = renderApp('/continents/Africa')
    const countryLink = screen.getByText(/Burundi/)

    await user.click(countryLink)

    // at this point in memory router it has gone to the Burundi Country page
    const countryNeighbour = await screen.findByText(/Tanzania/)
    expect(countryNeighbour).toBeVisible()
  })

  
})