import { render } from 'test-utils'
import TextField from '.'

describe('TextField', () => {
  it('It should render a default TextField', () => {
    const { container } = render(<TextField />)
    expect(container).toMatchSnapshot()
  })
})
