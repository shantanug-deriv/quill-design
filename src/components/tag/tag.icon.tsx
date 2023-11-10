import { QuillSvgProps } from '@deriv/quill-icons/QuillTypes'
import {
  BaseTagIconProps,
  BaseTagProps,
  BaseTagSizeProps,
  TagIconFillCVA,
  TagIconSizes,
  TagIcons,
} from './tag.classnames'

export interface TagIconProps extends BaseTagSizeProps, BaseTagIconProps {
  icon?: React.ForwardRefExoticComponent<Omit<QuillSvgProps, 'ref'>>
  className?: string
  isBold: BaseTagProps['isBold']
}

export const TagIcon = ({
  icon: Icon,
  size,
  className,
  isBold,
  colorStyle,
}: TagIconProps) => {
  let IconComponent:
    | React.ForwardRefExoticComponent<Omit<QuillSvgProps, 'ref'>>
    | null
    | undefined = null
  if (colorStyle === 'custom') {
    IconComponent = Icon
  } else {
    IconComponent =
      TagIcons[colorStyle ?? 'success'][isBold ? 'bold' : 'regular']
  }
  return (
    <>
      {Icon && colorStyle === 'custom' ? (
        <Icon className={className} {...TagIconSizes[size ?? 'md']} />
      ) : (
        <>
          {IconComponent && (
            <IconComponent
              className={TagIconFillCVA({ colorStyle })}
              {...TagIconSizes[size ?? 'md']}
            />
          )}
        </>
      )}
    </>
  )
}

export default TagIcon
