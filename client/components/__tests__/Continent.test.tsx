// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { renderApp } from '../../test-setup'

describe('<Continent/>', () => {
  it('Displays the Africa continent image', async () => {
    const { ...screen } = renderApp('/continents/Africa')
    const img = screen.getByAltText('Africa-continent')
    expect(img).toHaveAttribute('src', '/images/South-Africa.jpg')
  })
})

// might need to use findByRole instead of getByRole that is shown in video