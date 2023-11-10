import { render } from 'test-utils'
import Button, { BasicIconButtonProps } from '.'
import { LabelPairedAndroidIcon } from '@deriv/quill-icons/LabelPaired'
import userEvent from '@testing-library/user-event'

const IconButtonVariants: BasicIconButtonProps['variant'][] = [
  'primary',
  'secondary',
  'tertiary',
]

describe('IconButton', () => {
  it('Should render BasicButton Default', () => {
    const { container } = render(<Button icon={LabelPairedAndroidIcon} />)
    expect(container).toMatchSnapshot()
  })

  it('Should handle onClick event', async () => {
    const mockOnClick = jest.fn()
    const { getByRole } = render(
      <Button icon={LabelPairedAndroidIcon} onClick={mockOnClick} />,
    )
    const iconButton = getByRole('button')
    await userEvent.click(iconButton)
    expect(mockOnClick).toHaveBeenCalled()
  })

  IconButtonVariants.forEach((variant) => {
    it(`Should render IconButton with variant ${variant}`, () => {
      const { container } = render(
        <Button icon={LabelPairedAndroidIcon} variant={variant} />,
      )
      expect(container).toMatchSnapshot()
    })
  })
})
