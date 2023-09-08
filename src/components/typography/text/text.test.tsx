import { render, screen } from '@testing-library/react'
import { Text } from '.'

describe('Text', () => {
  it('Should display correct content', () => {
    render(<Text>Text content</Text>)

    const text = screen.getByText(/Text content/)
    expect(text).toBeInTheDocument()
  })
  it('Should display content with default classnames', () => {
    render(<Text>Text content</Text>)

    const text = screen.getByText(/Text content/)
    expect(text).toHaveExactClasses([
      'font-ibmPlex-sans',
      'text-core-100',
      'space-y-100',
      'leading-core-300',
      'font-core-regular',
    ])
  })

  it('Should have correct classnames with size xl', () => {
    render(<Text size="xl">Text content</Text>)

    const text = screen.getByText(/Text content/)
    expect(text).toHaveExactClasses([
      'font-ibmPlex-sans',
      'text-core-400',
      'space-y-400',
      'leading-core-700',
      'font-core-regular',
    ])
  })
  it('Should have correct classnames with size xl and type underline', () => {
    render(
      <Text size="xl" type="underline">
        Text content
      </Text>,
    )

    const text = screen.getByText(/Text content/)
    expect(text).toHaveExactClasses([
      'font-ibmPlex-sans',
      'text-core-400',
      'space-y-400',
      'leading-core-700',
      'font-core-regular',
      'underline',
    ])
  })
})
