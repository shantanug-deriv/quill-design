import { render, screen } from '@testing-library/react'
import { Text } from '.'

describe('Text', () => {
  it('Should display correct content', () => {
    render(<Text>Text content</Text>)

    const text = screen.getByText(/Text content/)
    expect(text).toBeInTheDocument()
  })
  it('Should display content with default classnames', () => {
    const { container } = render(<Text>Text content</Text>)

    expect(container).toMatchSnapshot()
  })

  it('Should have correct classnames with size xl', () => {
    const { container } = render(<Text size="xl">Text content</Text>)

    expect(container).toMatchSnapshot()
  })
  it('Should have correct classnames with size xl and type underline', () => {
    const { container } = render(
      <Text size="xl" type="underline">
        Text content
      </Text>,
    )
    expect(container).toMatchSnapshot()
  })
})
