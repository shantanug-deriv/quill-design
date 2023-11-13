import { ReactNode } from 'react'
import { ExcludeNull } from 'types'
import { type VariantProps } from 'class-variance-authority'
import { accordionBaseVariant } from './accordion.classnames'

export interface AccordionProps extends AccordionPropsExcludingNull {
  id?: string
  className?: string
  title?: string
  subtitle?: string
  icon?: ReactNode
  expanded?: boolean
  divider?: AccordionDivider
  contentClassname?: string
  content?: () => ReactNode
  customContent?: () => ReactNode
  onExpand?: (e: boolean, i: string) => void
}

export type TBaseAccordionVariant = VariantProps<typeof accordionBaseVariant>

type AccordionPropsExcludingNull = ExcludeNull<TBaseAccordionVariant, 'divider'>

export type AccordionDivider = 'none' | 'both' | 'bottom'
