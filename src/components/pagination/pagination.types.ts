import { type VariantProps } from 'class-variance-authority'
import { paginationVariants } from './pagination.classnames'
import { ExcludeNull } from 'types'
import { ReactNode } from 'react'

export type PaginationVariantProps = VariantProps<typeof paginationVariants>

export type TPaginatedData<T> = {
  paginatedData: Array<T & { id: string | number }>
}

export interface PaginationProps<T>
  extends ExcludeNull<
    Required<Pick<PaginationVariantProps, 'variant'>>,
    'variant'
  > {
  children: (props: TPaginatedData<T>) => ReactNode
  className?: string
  contentPerPage: number
  dataList: Array<T & { id: string | number }>
}
