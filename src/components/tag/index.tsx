import React, { forwardRef, HTMLAttributes } from 'react'
import { QuillSvgProps } from '@deriv/quill-icons'
import {
  TagClassNames,
  TagCustomIconColors,
  TagIconColors,
  TagIcons,
  TagIconSizes,
} from './tag.classnames'

export type TPreset = 'custom' | 'success' | 'error' | 'warning' | 'info'
export type TSize = 'xs' | 'sm' | 'md' | 'lg'
export type TColorStyle =
  | 'red'
  | 'orange'
  | 'yellow'
  | 'mustard'
  | 'olive'
  | 'green'
  | 'tiffany'
  | 'teal'
  | 'seawater'
  | 'blue'
  | 'sapphire'
  | 'blueberry'
  | 'grape'
  | 'magenta'
  | 'slate'

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
  icon?: React.ForwardRefExoticComponent<Omit<QuillSvgProps, 'ref'>>
  variant?: 'fill' | 'outline'
  size?: TSize
  preset?: TPreset
  colorStyle?: TColorStyle
  bold?: boolean
}

const Tag = forwardRef<HTMLDivElement, TagProps>(
  (
    {
      children,
      className,
      variant,
      size = 'md',
      preset = 'custom',
      colorStyle = 'slate',
      bold = false,
      icon: Icon = preset !== 'custom' &&
        TagIcons[preset][bold ? 'true' : 'false'],
      ...rest
    },
    ref,
  ) => (
    <div
      className={TagClassNames({
        variant,
        size,
        preset,
        className,
        colorStyle,
        bold,
      })}
      {...rest}
      ref={ref}
    >
      {Icon && (
        <Icon
          {...TagIconSizes[size]}
          className={
            preset !== 'custom'
              ? TagIconColors[preset]
              : TagCustomIconColors[colorStyle]
          }
        />
      )}
      {children}
    </div>
  ),
)

Tag.displayName = 'Tag'

export default Tag
