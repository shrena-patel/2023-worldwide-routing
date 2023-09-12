// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { renderApp } from '../../test-setup'

describe('<Country/>', () => {
  it('returns an error message if country does not exist', async () => {
    const screen = renderApp('/continent/Africa/AA')
    const heading = screen.getByText(/Oops no country/)
    expect(heading).toBeVisible()
  })
})