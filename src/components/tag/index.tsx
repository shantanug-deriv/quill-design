import qtMerge from 'qtMerge'
import { type QuillSvgProps } from '@deriv/quill-icons'
import {
  TagSizes,
  TagIconSizes,
  TagIcons,
  TagIconColors,
  TagBaseClassnames,
  TagCustomColors,
  TagColors,
  TagCustomIconColors,
} from './tag.classnames'
import { HTMLAttributes, forwardRef } from 'react'

export type TagType = 'error' | 'warning' | 'success' | 'info' | 'custom'
export type TagSize = 'xs' | 'sm' | 'md' | 'lg'
export type TagVariant = 'fill' | 'outline'
export type TagColor =
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
  type?: TagType
  size?: TagSize
  variant?: TagVariant
  icon?: React.ForwardRefExoticComponent<Omit<QuillSvgProps, 'ref'>>
  className?: string
  bold?: boolean
  color?: TagColor
}

const Tag = forwardRef<HTMLDivElement, TagProps>(
  (
    {
      bold = false,
      children,
      className = '',
      size = 'md',
      type = 'custom',
      variant = 'fill',
      icon: Icon = type !== 'custom' && TagIcons[type][bold ? 'true' : 'false'],
      color = 'slate',
      ...rest
    },
    ref,
  ) => {
    return (
      <div
        className={qtMerge(
          TagBaseClassnames,
          TagSizes[size],
          type === 'custom'
            ? TagCustomColors[color][variant]
            : TagColors[type][variant],
          bold && 'font-bold',
          className,
        )}
        {...rest}
        ref={ref}
      >
        {Icon && (
          <Icon
            {...TagIconSizes[size]}
            className={
              type !== 'custom'
                ? TagIconColors[type]
                : TagCustomIconColors[color]
            }
          />
        )}
        {children}
      </div>
    )
  },
)

Tag.displayName = 'Tag'

export default Tag
