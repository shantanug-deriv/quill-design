import { useMemo, useState } from 'react'
import {
  StandaloneChevronLeftRegularIcon,
  StandaloneChevronRightRegularIcon,
} from '@deriv/quill-icons'
import { usePaginationRange } from 'hooks/usePaginationRange'
import PaginationButton from './pagination-button'
import {
  navigationIconFillVariants,
  paginationVariants,
} from './pagination.classnames'
import { PaginationProps } from './pagination.types'

/**
 * Component that can divide large lists of data into smaller more manageable pages.
 * @name Pagination
 * @param {string} className- Styles to be applied to Pagination body
 * @param {number} contentPerPage- Number of items to be displayed per page
 * @param {Array} dataList- List of data to be displayed
 * @param {string} variant- Variant of Pagination.
 *
 * @example
 * <Pagination className="pagination__container" contentPerPage={10}
 * dataList={dataList} variant="number"
 * >
 * {({ paginatedData }) => (
 *  <ComponentToRender data={paginatedData} />
 * )}
 * </Pagination>
 */
const Pagination = <T,>({
  children,
  className,
  contentPerPage,
  dataList = [],
  variant = 'number',
}: PaginationProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPageCount = useMemo(() => {
    const dataToDisplay = contentPerPage > 0 ? contentPerPage : 1
    return Math.ceil(dataList.length / dataToDisplay)
  }, [dataList.length, contentPerPage])

  const paginationRange = usePaginationRange({
    totalPageCount,
    currentPage,
    variant,
  })

  const goToNextPage = () => setCurrentPage((page) => page + 1)

  const gotToPreviousPage = () => setCurrentPage((page) => page - 1)

  const changePage = (event: string | null) => {
    const pageNumber = Number(event)
    setCurrentPage(pageNumber)
  }

  const paginatedData = useMemo(() => {
    const startIndex = currentPage * contentPerPage - contentPerPage
    const endIndex = startIndex + contentPerPage
    return dataList.slice(startIndex, endIndex)
  }, [contentPerPage, currentPage, dataList])

  return (
    <div className="row-auto grid">
      <section className={className}>{children({ paginatedData })}</section>
      <section className="flex items-center justify-center gap-400">
        <button
          onClick={gotToPreviousPage}
          disabled={currentPage === 1}
          className={paginationVariants({ variant })}
        >
          <StandaloneChevronLeftRegularIcon
            iconSize="sm"
            className={navigationIconFillVariants({
              disabled: currentPage === 1,
            })}
          />
        </button>
        {paginationRange.map((pageNumber, index) => (
          <PaginationButton
            key={`${pageNumber}_${index}`}
            pageNumber={pageNumber}
            variant={variant}
            currentPage={currentPage}
            handleOnClick={changePage}
          />
        ))}
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPageCount}
          className={paginationVariants({ variant })}
        >
          <StandaloneChevronRightRegularIcon
            iconSize="sm"
            className={navigationIconFillVariants({
              disabled: currentPage === totalPageCount,
            })}
          />
        </button>
      </section>
    </div>
  )
}

export default Pagination
