import { render } from '@testing-library/react'
import FluidContainer from '.'

describe('FluidContainer', () => {
  it('should render correctly', () => {
    const { container } = render(<FluidContainer />)
    expect(container).toMatchSnapshot()
  })
})
