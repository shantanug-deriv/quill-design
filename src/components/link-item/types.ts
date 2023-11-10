import { type VariantProps } from 'class-variance-authority'
import { ExcludeNull } from 'types'
import { QuillSvgProps } from '@deriv/quill-icons/QuillTypes'
import { AnchorHTMLAttributes } from 'react'
import { linkItemCva } from './link-item.classnames'

export interface LinkItemProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    ExcludeNull<
      VariantProps<typeof linkItemCva>,
      'colorStyle' | 'size' | 'disabled'
    > {
  icon?: React.ForwardRefExoticComponent<Omit<QuillSvgProps, 'ref'>>
  hasIcon?: boolean
}
export type LinkItemSize = 'caption' | 'sm' | 'md' | 'lg' | 'xl'

export type colorStyle = LinkItemProps['colorStyle']

export type size = LinkItemProps['size']

export type disabled = LinkItemProps['disabled']
