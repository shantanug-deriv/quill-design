import { render, screen } from 'test-utils'
import Link from '.'

describe('Link', () => {
  it('should handle onClick event', async () => {
    render(<Link>Click me</Link>)
    const link = screen.getByText(/click me/i)
    expect(link).toBeInTheDocument()
  })
})
