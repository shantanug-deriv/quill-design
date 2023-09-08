import { render } from 'test-utils'
import { Heading, Text } from '.'

describe('Heading', () => {
  it('Should render Hero Heading with h1', () => {
    const { container } = render(<Heading.hero>Hero heading</Heading.hero>)
    expect(container).toMatchSnapshot()
  })
  it('Should render h1 Heading with h1', () => {
    const { container } = render(<Heading.h1>h1 heading</Heading.h1>)
    expect(container).toMatchSnapshot()
  })
  it('Should render h2 Heading with h2', () => {
    const { container } = render(<Heading.h2>h2 heading</Heading.h2>)
    expect(container).toMatchSnapshot()
  })
  it('Should render h3 Heading with h3', () => {
    const { container } = render(<Heading.h3>h3 heading</Heading.h3>)
    expect(container).toMatchSnapshot()
  })
  it('Should render h4 Heading with h4', () => {
    const { container } = render(<Heading.h4>h4 heading</Heading.h4>)
    expect(container).toMatchSnapshot()
  })
  it('Should render h5 Heading with h5', () => {
    const { container } = render(<Heading.h5>h5 heading</Heading.h5>)
    expect(container).toMatchSnapshot()
  })
  it('Should render h6 Heading with h6', () => {
    const { container } = render(<Heading.h6>h6 heading</Heading.h6>)
    expect(container).toMatchSnapshot()
  })
  it('Should render h7 Heading with h7', () => {
    const { container } = render(<Heading.h7>h7 heading</Heading.h7>)
    expect(container).toMatchSnapshot()
  })
})

describe('Text', () => {
  it('Should display correct content', () => {
    const { container } = render(<Text>Text content</Text>)
    expect(container).toMatchSnapshot()
  })
})
