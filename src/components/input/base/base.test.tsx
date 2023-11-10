import { render } from 'test-utils'
import Input from '.'

describe('Input', () => {
  it('It should render a default Input', () => {
    const { container } = render(<Input />)
    expect(container).toMatchSnapshot()
  })
})
