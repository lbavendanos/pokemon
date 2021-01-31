import { render } from '@testing-library/react'
import Pokemon from './Pokemon'

describe('Pokemon page', () => {
  it('render', () => {
    render(<Pokemon />)
  })
})
