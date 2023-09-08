import { render, screen } from 'test-utils'
import userEvent from '@testing-library/user-event'
import Button, { ButtonColorStyle, ButtonSize, ButtonVariant } from '.'

describe('Button', () => {
  it('should handle onClick event', async () => {
    const onClickButton = jest.fn()
    render(<Button onClick={onClickButton}>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    await userEvent.click(button)
    expect(onClickButton).toBeCalled()
  })

  it('should not handle onClick event when it is disabled', async () => {
    const onClickButton = jest.fn()
    render(
      <Button onClick={onClickButton} disabled>
        Click me
      </Button>,
    )
    const button = screen.getByRole('button', { name: /click me/i })
    await userEvent.click(button)
    expect(button).toBeDisabled()
    expect(onClickButton).not.toBeCalled()
  })

  it('should render correct disabled classname when it is disabled', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toHaveClass('disabled:opacity-core-300')
  })

  const variants: ButtonVariant[] = ['primary', 'secondary', 'tertiary']
  const sizes: ButtonSize[] = ['sm', 'md', 'lg', 'xl']
  const colorStyles: ButtonColorStyle[] = ['coral', 'black', 'white']

  variants.forEach((variant) => {
    sizes.forEach((size) => {
      colorStyles.forEach((colorStyle) => {
        it(`should render correctly with ${variant} variant, ${size} size, ${colorStyle} colorStyle`, () => {
          render(
            <Button variant={variant} size={size} colorStyle={colorStyle}>
              Click me
            </Button>,
          )
          const button = screen.getByRole('button', { name: /click me/i })
          expect(button).toMatchSnapshot()
        })
      })
    })
  })
})
