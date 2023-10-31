import qtMerge from 'qtMerge'
import { type QuillSvgProps } from '@deriv/quill-icons'
import {
  TagSizes,
  TagIconSizes,
  TagIcons,
  TagIconColors,
  TagColors,
  TagBaseClassnames,
} from './tag.classnames'
import { HTMLAttributes, forwardRef } from 'react'

export type TagType = 'error' | 'warning' | 'success' | 'info'
export type TagSize = 'xs' | 'sm' | 'md' | 'lg'
export type TagVariant = 'fill' | 'outline'

export interface TagProps extends HTMLAttributes<HTMLDivElement> {
  type?: TagType
  size?: TagSize
  variant?: TagVariant
  icon?: React.ForwardRefExoticComponent<Omit<QuillSvgProps, 'ref'>>
  className?: string
  bold?: boolean
}

const Tag = forwardRef<HTMLDivElement, TagProps>(
  (
    {
      bold = false,
      children,
      className = '',
      size = 'md',
      type = 'info',
      variant = 'fill',
      icon: Icon = TagIcons[type][bold ? 'true' : 'false'],
      ...rest
    },
    ref,
  ) => {
    return (
      <div
        className={qtMerge(
          TagBaseClassnames,
          TagSizes[size],
          TagColors[type][variant],
          bold && 'font-bold',
          className,
        )}
        {...rest}
        ref={ref}
      >
        {Icon && (
          <Icon {...TagIconSizes[size]} className={TagIconColors[type]} />
        )}
        {children}
      </div>
    )
  },
)

Tag.displayName = 'Tag'

export default Tag
