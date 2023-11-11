import { render, screen } from 'test-utils'
import userEvent from '@testing-library/user-event'
import PaginationButton from './pagination-button'
import { DOTS } from 'hooks/usePaginationRange'

jest.mock('@deriv/quill-icons/Standalone', () => ({
  StandaloneEllipsisRegularIcon: () => <div>...</div>,
  StandaloneCircleFillIcon: () => <div>O</div>,
}))

describe('Pagination', () => {
  it('should render bullet icons when variant is bullet', () => {
    render(
      <PaginationButton
        currentPage={2}
        handleOnClick={jest.fn()}
        pageNumber={1}
        variant="bullet"
      />,
    )

    const elBullet = screen.getByRole('button', { name: 'O' })

    expect(elBullet).toBeInTheDocument()
  })

  it('should render ellipsis icon when page number is DOTS', () => {
    render(
      <PaginationButton
        currentPage={2}
        handleOnClick={jest.fn()}
        pageNumber={DOTS}
        variant="number"
      />,
    )

    const elEllipsis = screen.getByRole('button', { name: '...' })

    expect(elEllipsis).toBeInTheDocument()
    expect(elEllipsis).toBeDisabled()
  })

  it('should render page number when variant is number', () => {
    render(
      <PaginationButton
        currentPage={2}
        handleOnClick={jest.fn()}
        pageNumber={1}
        variant="number"
      />,
    )

    const elPageNumber = screen.getByRole('button', { name: '1' })

    expect(elPageNumber).toBeInTheDocument()
  })

  it('should call handleOnClick when clicked', async () => {
    const handleOnClick = jest.fn()
    const pageNumber = 3

    render(
      <PaginationButton
        currentPage={2}
        handleOnClick={handleOnClick}
        pageNumber={pageNumber}
        variant="number"
      />,
    )

    const elPageNumber = screen.getByRole('button', { name: '3' })

    await userEvent.click(elPageNumber)

    expect(handleOnClick).toBeCalledWith(pageNumber.toString())
  })
})
