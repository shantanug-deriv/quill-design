import { render, screen } from 'test-utils'
import LinkItem from '.'
import { colorStyle, disabled, size } from './types'
import { StandaloneArrowLeftBoldIcon } from '@deriv/quill-icons/Standalone'

describe('LinkItem', () => {
  it('should render correctly', () => {
    render(<LinkItem>Click me</LinkItem>)
    const LinkElement = screen.getByText(/click me/i)
    expect(LinkElement).toBeInTheDocument()
  })

  it('should render the classname', () => {
    render(<LinkItem className="px-300">Click me</LinkItem>)
    const LinkElement = screen.getByText(/click me/i)
    expect(LinkElement).toHaveClass('px-300')
  })

  it('should render chevron icon when hasIcon prop is true', () => {
    render(<LinkItem hasIcon>Click me</LinkItem>)
    const icon = screen.getByTestId('dt-link-item-chevron')
    expect(icon).toBeInTheDocument()
  })

  it('should render icon when a icon is pass', () => {
    render(<LinkItem icon={StandaloneArrowLeftBoldIcon}>Click me</LinkItem>)
    const icon = screen.getByTestId('dt-link-item-icon')
    expect(icon).toBeInTheDocument()
  })

  const colorStyles: colorStyle[] = ['black', 'white']
  colorStyles.forEach((color) => {
    it(`should render correctly with ${color} color`, () => {
      render(<LinkItem colorStyle={color}>Click me - {color}</LinkItem>)
      const LinkElement = screen.getByText(`Click me - ${color}`)
      expect(LinkElement).toMatchSnapshot()
    })
  })

  const sizes: size[] = ['caption', 'sm', 'md', 'lg', 'xl']
  sizes.forEach((size) => {
    it(`should render correctly with ${size} size`, () => {
      render(<LinkItem size={size}>Click me - {size}</LinkItem>)
      const LinkElement = screen.getByText(`Click me - ${size}`)
      expect(LinkElement).toMatchSnapshot()
    })
  })

  const disabled: disabled[] = [true, false]
  disabled.forEach((dis) => {
    it(`should render correctly with disabled ${dis}`, () => {
      render(<LinkItem disabled={dis}>Click me disabled</LinkItem>)
      const LinkElement = screen.getByText('Click me disabled')
      expect(LinkElement).toMatchSnapshot()
    })
  })
})
