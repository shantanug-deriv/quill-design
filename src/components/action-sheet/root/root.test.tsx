import { screen, render } from 'test-utils'
import ActionSheet from '..'
import userEvent from '@testing-library/user-event'
import { RootPosition } from '../types'

describe('<ActionSheet.Root/>', () => {
  it('should set the data-state attribute to "open" when the show prop is true', () => {
    const onCloseAction = jest.fn()
    render(<ActionSheet.Root show={true} onClose={onCloseAction} />)
    const state = screen.getByRole('dialog').getAttribute('data-state')
    expect(state).toBe('open')
  })
  it('should set the data-state attribute to "close" when the show prop is false', () => {
    const onCloseAction = jest.fn()
    render(<ActionSheet.Root show={false} onClose={onCloseAction} />)
    const state = screen.getByRole('dialog').getAttribute('data-state')
    expect(state).toBe('close')
  })
  it('should render overlay when type prop is modal', () => {
    const onCloseAction = jest.fn()
    render(
      <ActionSheet.Root show={true} onClose={onCloseAction} type="modal" />,
    )
    const modalOverlay = screen.getByTestId('modal-overlay')
    expect(modalOverlay).toBeInTheDocument()
  })
  it('should not render overlay when type prop is non-modal', () => {
    const onCloseAction = jest.fn()
    render(
      <ActionSheet.Root show={true} onClose={onCloseAction} type="non-modal" />,
    )
    const modalOverlay = screen.queryByTestId('modal-overlay')
    expect(modalOverlay).not.toBeInTheDocument()
  })
  it('should call onClose function when user clicked on overlay', async () => {
    const onCloseAction = jest.fn()
    render(<ActionSheet.Root show={true} onClose={onCloseAction} />)
    const modalOverlay = screen.getByTestId('modal-overlay')
    await userEvent.click(modalOverlay)
    expect(onCloseAction).toHaveBeenCalled()
  })
  it('should render handle bar when expandable prop is true', () => {
    const onCloseAction = jest.fn()
    render(
      <ActionSheet.Root
        show={true}
        onClose={onCloseAction}
        expandable={true}
      />,
    )
    const handleBar = screen.getByTestId('handle-bar')
    expect(handleBar).toBeInTheDocument()
  })
  it('should not render handle bar when expandable prop is false', () => {
    const onCloseAction = jest.fn()
    render(
      <ActionSheet.Root
        show={true}
        onClose={onCloseAction}
        expandable={false}
      />,
    )
    const handleBar = screen.queryByTestId('handle-bar')
    expect(handleBar).not.toBeInTheDocument()
  })
  const positions: RootPosition[] = ['left', 'right']
  positions.forEach((position) => {
    it(`should render correctly with position ${position}`, () => {
      const onCloseAction = jest.fn()
      render(
        <ActionSheet.Root
          position={position}
          aria-label={`${position} root`}
          show={true}
          onClose={onCloseAction}
        />,
      )
      const actionRoot = screen.getByLabelText(`${position} root`)
      expect(actionRoot).toMatchSnapshot()
    })
  })
})
