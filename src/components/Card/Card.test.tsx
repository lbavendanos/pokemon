import { render, screen } from '@testing-library/react'
import Card, { Props } from './Card'

describe('Card.tsx', () => {
  it('render card', () => {
    const props: Props = {
      name: 'bulbasaur',
      image: {
        src: 'http://placeimg.com/640/480',
        alt: 'bulbasaur',
      },
      description: 'Dolorum odit a.',
    }

    render(<Card {...props} />)

    const image = screen.getByAltText(props.image.alt)
    const name = screen.getByText(props.name)
    const description = screen.getByText(props.description)

    expect(image).toBeInTheDocument()
    expect(name).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })
})
