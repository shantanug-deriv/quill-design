import { render, screen } from 'test-utils'
import Link from '.'
import { colorStyle, disabled, size } from './types'
import { StandaloneArrowLeftBoldIcon } from '@deriv/quill-icons/Standalone'

describe('Link', () => {
  it('should render correctly', () => {
    render(<Link>Click me</Link>)
    const link = screen.getByText(/click me/i)
    expect(link).toBeInTheDocument()
  })

  it('should render the classname', () => {
    render(<Link className="px-300">Click me</Link>)
    const link = screen.getByText(/click me/i)
    expect(link).toHaveClass('px-300')
  })

  it('should render chevron icon when hasIcon prop is true', () => {
    render(<Link hasIcon>Click me</Link>)
    const icon = screen.getByTestId('dt-link-chevron')
    expect(icon).toBeInTheDocument()
  })

  it('should render icon when a icon is pass', () => {
    render(<Link icon={StandaloneArrowLeftBoldIcon}>Click me</Link>)
    const icon = screen.getByTestId('dt-link-icon')
    expect(icon).toBeInTheDocument()
  })

  const colorStyles: colorStyle[] = ['black', 'white']
  colorStyles.forEach((color) => {
    it(`should render correctly with ${color} color`, () => {
      render(<Link colorStyle={color}>Click me - {color}</Link>)
      const link = screen.getByText(`Click me - ${color}`)
      expect(link).toMatchSnapshot()
    })
  })

  const sizes: size[] = ['caption', 'sm', 'md', 'lg', 'xl']
  sizes.forEach((size) => {
    it(`should render correctly with ${size} size`, () => {
      render(<Link size={size}>Click me - {size}</Link>)
      const link = screen.getByText(`Click me - ${size}`)
      expect(link).toMatchSnapshot()
    })
  })

  const disabled: disabled[] = [true, false]
  disabled.forEach((dis) => {
    it(`should render correctly with disabled ${dis}`, () => {
      render(<Link disabled={dis}>Click me disabled</Link>)
      const link = screen.getByText('Click me disabled')
      expect(link).toMatchSnapshot()
    })
  })
})
