import { type VariantProps } from 'class-variance-authority'
import { ExcludeNull } from 'types'
import { QuillSvgProps } from '@deriv/quill-icons/QuillTypes'
import { AnchorHTMLAttributes } from 'react'
import { linkCva } from './link.classnames'

export interface LinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    ExcludeNull<
      VariantProps<typeof linkCva>,
      'colorStyle' | 'size' | 'disabled'
    > {
  icon?: React.ForwardRefExoticComponent<Omit<QuillSvgProps, 'ref'>>
  hasIcon?: boolean
}

export type colorStyle = LinkProps['colorStyle']

export type size = LinkProps['size']

export type disabled = LinkProps['disabled']
