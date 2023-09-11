// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { renderApp } from '../../test-setup'

describe('<Home/>', () => {
  it('shows the user a welcome message', async () => {
    const { ...screen } = renderApp('/')
    const message = screen.getByText(/Welcome to Worldwide Routing/)
    expect(message).toBeVisible()
  })

})