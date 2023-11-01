import { render, screen } from 'test-utils'
import userEvent from '@testing-library/user-event'
import SelectableChip from '.'
import { LabelPairedAndroidIcon } from '@deriv/quill-icons'
import { ChipSize } from '../types'

describe('SelectableChip', () => {
  it('should handle onClick event', async () => {
    const onClickButton = jest.fn()
    render(
      <SelectableChip onClick={onClickButton}>Selectbale Chip</SelectableChip>,
    )
    const button = screen.getByRole('button', { name: /Selectbale Chip/i })
    await userEvent.click(button)
    expect(onClickButton).toBeCalled()
  })

  it('should not handle onClick event when it is disabled', async () => {
    const onClickButton = jest.fn()
    render(<SelectableChip disabled>Selectbale Chip</SelectableChip>)
    const button = screen.getByRole('button', { name: /Selectbale Chip/i })
    await userEvent.click(button)
    expect(button).toBeDisabled()
    expect(onClickButton).not.toBeCalled()
  })

  it('should toggle selected state on clicking the chip', async () => {
    render(<SelectableChip>Selectbale Chip</SelectableChip>)
    const button = screen.getByRole('button', { name: /Selectbale Chip/i })
    await userEvent.click(button)
    expect(button).toHaveAttribute('data-state', 'selected')
    await userEvent.click(button)
    expect(button).toHaveAttribute('data-state', '')
  })

  it('should render correct disabled classname when it is disabled', () => {
    render(<SelectableChip>Selectbale Chip</SelectableChip>)
    const button = screen.getByRole('button', { name: /Selectbale Chip/i })
    expect(button).toHaveClass('disabled:opacity-600')
  })

  it('should render correct labelTag', () => {
    render(<SelectableChip labelTag="labelTag">Selectbale Chip</SelectableChip>)
    const labelTag = screen.getByText('labelTag')
    expect(labelTag).toBeInTheDocument()
  })

  it('should render icon properly', () => {
    render(
      <SelectableChip icon={LabelPairedAndroidIcon}>
        Selectbale Chip
      </SelectableChip>,
    )
    const icon = screen.getByRole('img', { name: '' })
    expect(icon).toBeInTheDocument()
  })

  it('should handle onDismiss for dissmisable chip', async () => {
    const onDismiss = jest.fn()
    render(
      <SelectableChip dismissible onDismiss={onDismiss}>
        Selectbale Chip
      </SelectableChip>,
    )
    const button = screen.getByTestId('dt-chip-dismissable-btn')
    await userEvent.click(button)
    expect(onDismiss).toBeCalled()
  })

  it('should not toggle data-state if chip is dissmisable', async () => {
    render(<SelectableChip dismissible>Selectbale Chip</SelectableChip>)
    const dismissButton = screen.getByTestId('dt-chip-dismissable-btn')
    const chipButton = screen.getByRole('button', { name: /Selectbale Chip/i })
    await userEvent.click(dismissButton)
    expect(chipButton).toHaveAttribute('data-state', '')
  })

  const sizes: ChipSize[] = ['sm', 'md', 'lg']
  sizes.forEach((size) => {
    it(`should render correctly with ${size} size`, () => {
      render(<SelectableChip size={size}>{`Chip - ${size}`}</SelectableChip>)
      const button = screen.getByRole('button', { name: `Chip - ${size}` })
      expect(button).toMatchSnapshot()
    })
  })
})
