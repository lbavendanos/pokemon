import { render } from '@testing-library/react'
import Home from './Home'

describe('Home page', () => {
  it('render welcome card', () => {
    render(<Home />)
  })
})
