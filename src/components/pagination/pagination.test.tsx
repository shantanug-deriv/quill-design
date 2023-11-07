import { render, screen } from 'test-utils'
import userEvent from '@testing-library/user-event'
import Pagination from '.'
import { MOCK_DATA } from './mocks/sample-data'
import { configureMockChild } from './mocks/Post'
// import Post from './mocks/Post'

jest.mock('@deriv/quill-icons', () => ({
  StandaloneChevronLeftRegularIcon: () => <div>Previous</div>,
  StandaloneChevronRightRegularIcon: () => <div>Next</div>,
  StandaloneEllipsisRegularIcon: () => <div>...</div>,
  StandaloneCircleFillIcon: () => <div>O</div>,
}))

describe('Pagination', () => {
  it('should render Previous and next navigation buttons and page numbers', () => {
    render(
      <Pagination contentPerPage={5} dataList={MOCK_DATA} variant="number">
        {configureMockChild}
      </Pagination>,
    )

    const elPreviousButton = screen.getByRole('button', { name: /previous/i })
    const elNextButton = screen.getByRole('button', { name: /next/i })
    const elPageNumbers = screen.getAllByRole('button', { name: /\d+/i })

    expect(elPreviousButton).toBeInTheDocument()
    expect(elNextButton).toBeInTheDocument()
    expect(elPageNumbers).toHaveLength(6)
  })

  it('should render Previous and next navigation buttons and bullet points', () => {
    render(
      <Pagination contentPerPage={5} dataList={MOCK_DATA} variant="bullet">
        {configureMockChild}
      </Pagination>,
    )

    const elPreviousButton = screen.getByRole('button', { name: /previous/i })
    const elNextButton = screen.getByRole('button', { name: /next/i })
    const elPageNumbers = screen.getAllByRole('button', { name: /o/i })

    expect(elPreviousButton).toBeInTheDocument()
    expect(elNextButton).toBeInTheDocument()
    expect(elPageNumbers).toHaveLength(11)
  })

  it('should disable Previous button when current page is 1', () => {
    render(
      <Pagination contentPerPage={5} dataList={MOCK_DATA} variant="number">
        {configureMockChild}
      </Pagination>,
    )

    const elPreviousButton = screen.getByRole('button', { name: /previous/i })

    expect(elPreviousButton).toBeDisabled()
  })

  it('should disable Next button when current page is last page', async () => {
    render(
      <Pagination contentPerPage={10} dataList={MOCK_DATA} variant="number">
        {configureMockChild}
      </Pagination>,
    )

    const elNextButton = screen.getByRole('button', { name: /next/i })

    await userEvent.click(elNextButton)
    await userEvent.click(elNextButton)
    await userEvent.click(elNextButton)
    await userEvent.click(elNextButton)

    expect(elNextButton).toBeDisabled()
  })

  it('should render disabled ellipses button when total page count is more than 5', () => {
    render(
      <Pagination contentPerPage={5} dataList={MOCK_DATA} variant="number">
        {configureMockChild}
      </Pagination>,
    )

    const elEllipsesButton = screen.getByRole('button', { name: /\.\.\./i })

    expect(elEllipsesButton).toBeDisabled()
  })

  it('should select correct page number when a particular page is clicked', async () => {
    render(
      <Pagination contentPerPage={10} dataList={MOCK_DATA} variant="number">
        {configureMockChild}
      </Pagination>,
    )

    const elPageButtonOne = screen.getByRole('button', { name: /1/i })
    const elPageButtonTwo = screen.getByRole('button', { name: /2/i })

    expect(elPageButtonOne).toHaveClass('bg-solid-slate-1400')
    expect(elPageButtonTwo).not.toHaveClass('bg-solid-slate-1400')

    await userEvent.click(elPageButtonTwo)

    expect(elPageButtonOne).not.toHaveClass('bg-solid-slate-1400')
    expect(elPageButtonTwo).toHaveClass('bg-solid-slate-1400')
  })

  it('should be able to navigate to the required page when Previous and Next buttons are clicked', async () => {
    render(
      <Pagination contentPerPage={10} dataList={MOCK_DATA} variant="number">
        {configureMockChild}
      </Pagination>,
    )
    const elPreviousButton = screen.getByRole('button', { name: /previous/i })
    const elNextButton = screen.getByRole('button', { name: /next/i })
    const elPageButtonOne = screen.getByRole('button', { name: /1/i })
    const elPageButtonTwo = screen.getByRole('button', { name: /2/i })

    expect(elPageButtonOne).toHaveClass('bg-solid-slate-1400')
    expect(elPageButtonTwo).not.toHaveClass('bg-solid-slate-1400')

    await userEvent.click(elNextButton)
    expect(elPageButtonOne).not.toHaveClass('bg-solid-slate-1400')
    expect(elPageButtonTwo).toHaveClass('bg-solid-slate-1400')

    await userEvent.click(elPreviousButton)
    expect(elPageButtonOne).toHaveClass('bg-solid-slate-1400')
    expect(elPageButtonTwo).not.toHaveClass('bg-solid-slate-1400')
  })
})
