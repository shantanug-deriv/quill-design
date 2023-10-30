import { render } from 'test-utils'
import Tag from '.'

describe('Tag', () => {
  it('Should render Tag Default', () => {
    const { container } = render(<Tag>Label</Tag>)
    expect(container).toMatchSnapshot()
  })
  it('Should render Error Tag Fill', () => {
    const { container } = render(<Tag type="error">Label</Tag>)
    expect(container).toMatchSnapshot()
  })

  it('Should render Warning Tag Fill', () => {
    const { container } = render(<Tag type="warning">Label</Tag>)
    expect(container).toMatchSnapshot()
  })

  it('Should render Success Tag Fill', () => {
    const { container } = render(<Tag type="success">Label</Tag>)
    expect(container).toMatchSnapshot()
  })

  it('Should render Info Tag Fill', () => {
    const { container } = render(<Tag type="info">Label</Tag>)
    expect(container).toMatchSnapshot()
  })

  it('Should render Error Tag Outline', () => {
    const { container } = render(
      <Tag type="error" variant="outline">
        Label
      </Tag>,
    )
    expect(container).toMatchSnapshot()
  })

  it('Should render Warning Tag Outline', () => {
    const { container } = render(
      <Tag type="warning" variant="outline">
        Label
      </Tag>,
    )
    expect(container).toMatchSnapshot()
  })

  it('Should render Success Tag Outline', () => {
    const { container } = render(
      <Tag type="success" variant="outline">
        Label
      </Tag>,
    )
    expect(container).toMatchSnapshot()
  })

  it('Should render Info Tag Outline', () => {
    const { container } = render(
      <Tag type="info" variant="outline">
        Label
      </Tag>,
    )
    expect(container).toMatchSnapshot()
  })
})
