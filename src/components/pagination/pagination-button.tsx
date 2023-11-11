import {
  StandaloneCircleFillIcon,
  StandaloneEllipsisRegularIcon,
} from '@deriv/quill-icons/Standalone'
import { paginationVariants } from './pagination.classnames'
import { DOTS } from 'hooks/usePaginationRange'
import { CaptionText } from '..'
import { PaginationProps } from './pagination.types'

interface PaginationButtonProps extends Pick<PaginationProps, 'variant'> {
  pageNumber: number | string
  currentPage: number
  handleOnClick: (event: string | null) => void
}

/**
 * Component to render type of Pagination button based on variant and page number.
 * @name PaginationButton
 * @param {number} currentPage - Selected page number
 * @param {function} handleOnClick - Function to handle click action on the Pagination button
 * @param {number} pageNumber - Page number
 * @param {string} variant - Variant of Pagination
 */
const PaginationButton = ({
  currentPage,
  handleOnClick,
  pageNumber,
  variant,
}: PaginationButtonProps) => {
  if (variant === 'bullet') {
    return (
      <button
        onClick={() => handleOnClick(String(pageNumber))}
        className={paginationVariants({ variant })}
      >
        <div>
          <StandaloneCircleFillIcon
            iconSize="sm"
            height={12}
            width={12}
            data-state={currentPage === pageNumber ? 'selected' : ''}
            className="fill-opacity-black-100 active:fill-opacity-black-200 data-[state=selected]:fill-solid-slate-1400"
          />
        </div>
      </button>
    )
  }

  if (pageNumber === DOTS) {
    return (
      <button
        onClick={(e) => handleOnClick((e.target as HTMLElement).textContent)}
        disabled
        className={paginationVariants({ variant })}
      >
        <StandaloneEllipsisRegularIcon fill="black" iconSize="sm" />
      </button>
    )
  }

  return (
    <button
      key={pageNumber}
      onClick={(e) => handleOnClick((e.target as HTMLElement).textContent)}
      data-state={currentPage === pageNumber ? 'selected' : ''}
      className={paginationVariants({
        variant,
      })}
    >
      <CaptionText
        data-state={currentPage === pageNumber ? 'selected' : ''}
        className="text-ellipsis leading-100 text-typography-default data-[state=selected]:text-solid-slate-50"
      >
        {pageNumber}
      </CaptionText>
    </button>
  )
}

export default PaginationButton
