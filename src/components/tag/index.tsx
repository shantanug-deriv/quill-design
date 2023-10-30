import qtMerge from 'qtMerge'
import { type QuillSvgProps } from '@deriv/quill-icons'
import {
  TagSizes,
  TagIconSizes,
  TagIcons,
  TagIconColors,
  TagColors,
} from './constants'

export type TagType = 'error' | 'warning' | 'success' | 'info'
export type TagSize = 'xs' | 'sm' | 'md' | 'lg'
export type TagVariant = 'fill' | 'outline'

export interface TagProps {
  caption: string
  type?: TagType
  size?: TagSize
  variant?: TagVariant
  icon?: React.ForwardRefExoticComponent<Omit<QuillSvgProps, 'ref'>>
  className?: string
  bold?: boolean
}

export const Tag = ({
  bold = false,
  caption = 'Label',
  className = '',
  size = 'md',
  type = 'info',
  variant = 'fill',
  icon: Icon = TagIcons[type],
}: TagProps) => {
  return (
    <div
      className={qtMerge(
        'min-w-full',
        'rounded-200',
        'inline-flex items-center justify-center',
        TagSizes[size],
        variant === 'outline' && 'border-75 bg-none',
        TagColors[type][variant],
        bold && 'font-bold',
        className,
      )}
    >
      {Icon && <Icon {...TagIconSizes[size]} className={TagIconColors[type]} />}
      {caption}
    </div>
  )
}

Tag.displayName = 'Tag'
export default Tag
