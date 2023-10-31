import { render } from 'test-utils'
import { StandalonePlaceholderRegularIcon } from '@deriv/quill-icons'
import Tag from '.'

describe('Tag', () => {
  it('Should render Tag Default', () => {
    const { container } = render(<Tag>Label</Tag>)
    expect(container).toMatchSnapshot()
  })

  it('Should render Custom Tag Fill with Icon', () => {
    const { container } = render(
      <Tag icon={StandalonePlaceholderRegularIcon}>Label</Tag>,
    )
    expect(container).toMatchSnapshot()
  })

  it('Should render Custom Tag Outline with Icon', () => {
    const { container } = render(
      <Tag icon={StandalonePlaceholderRegularIcon} variant="outline">
        Label
      </Tag>,
    )
    expect(container).toMatchSnapshot()
  })

  it('Should render Custom Tag Fill without Icon', () => {
    const { container } = render(<Tag color="blue">Label</Tag>)
    expect(container).toMatchSnapshot()
  })

  it('Should render Custom Tag Outline without Icon', () => {
    const { container } = render(
      <Tag color="blue" variant="outline">
        Label
      </Tag>,
    )
    expect(container).toMatchSnapshot()
  })

  it('Should render Custom Tag Fill in other different colors', () => {
    const { container } = render(<Tag color="blueberry">Label</Tag>)
    expect(container).toMatchSnapshot()
  })

  it('Should render Custom Tag Outline in other different colors', () => {
    const { container } = render(
      <Tag color="blueberry" variant="outline">
        Label
      </Tag>,
    )
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

  it('Does not override icon with pre-existent types', () => {
    const { container } = render(
      <Tag type="error" icon={StandalonePlaceholderRegularIcon}>
        Label
      </Tag>,
    )
    expect(container).toMatchSnapshot()
  })

  it('Does not override colors with pre-existent types', () => {
    const { container } = render(
      <Tag type="success" color="yellow">
        Label
      </Tag>,
    )
    expect(container).toMatchSnapshot()
  })
})
