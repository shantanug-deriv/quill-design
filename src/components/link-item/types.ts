import { type VariantProps } from 'class-variance-authority'
import { ExcludeNull, QuillIconComponent } from 'types'
import { HTMLAttributes } from 'react'
import { linkItemCva } from './link-item.classnames'

export interface LinkItemProps
  extends HTMLAttributes<HTMLSpanElement>,
    ExcludeNull<
      VariantProps<typeof linkItemCva>,
      'colorStyle' | 'size' | 'disabled'
    > {
  icon?: QuillIconComponent
  hasIcon?: boolean
}
export type LinkItemSize = 'caption' | 'sm' | 'md' | 'lg' | 'xl'

export type colorStyle = LinkItemProps['colorStyle']

export type LinkItemTestSize = LinkItemProps['size']

export type LinkItemDisabled = LinkItemProps['disabled']
