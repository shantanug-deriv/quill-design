import { render } from 'test-utils'
import Tag from '.'

describe('Tag', () => {
  it('Should render Tag Default', () => {
    const { container } = render(<Tag caption="Label" />)
    expect(container).toMatchSnapshot()
  })
  it('Should render Error Tag Fill', () => {
    const { container } = render(<Tag type="error" caption="Label" />)
    expect(container).toMatchSnapshot()
  })

  it('Should render Warning Tag Fill', () => {
    const { container } = render(<Tag type="warning" caption="Label" />)
    expect(container).toMatchSnapshot()
  })

  it('Should render Success Tag Fill', () => {
    const { container } = render(<Tag type="success" caption="Label" />)
    expect(container).toMatchSnapshot()
  })

  it('Should render Info Tag Fill', () => {
    const { container } = render(<Tag type="info" caption="Label" />)
    expect(container).toMatchSnapshot()
  })

  it('Should render Error Tag Outline', () => {
    const { container } = render(
      <Tag type="error" caption="Label" variant="outline" />,
    )
    expect(container).toMatchSnapshot()
  })

  it('Should render Warning Tag Outline', () => {
    const { container } = render(
      <Tag type="warning" caption="Label" variant="outline" />,
    )
    expect(container).toMatchSnapshot()
  })

  it('Should render Success Tag Outline', () => {
    const { container } = render(
      <Tag type="success" caption="Label" variant="outline" />,
    )
    expect(container).toMatchSnapshot()
  })

  it('Should render Info Tag Outline', () => {
    const { container } = render(
      <Tag type="info" caption="Label" variant="outline" />,
    )
    expect(container).toMatchSnapshot()
  })
})
