import { render } from 'test-utils'
import SearchField from '.'

describe('SearchField', () => {
  it('It should render a default SearchField', () => {
    const { container } = render(<SearchField />)
    expect(container).toMatchSnapshot()
  })
})
