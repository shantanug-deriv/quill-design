import { ComponentPropsWithRef, Ref, forwardRef } from 'react'
import clsx from 'clsx'

export type TextSize = 'xl' | 'lg' | 'md' | 'sm'
export type TextVariant = 'regular' | 'italic' | 'bold' | 'bold-italic'
export type TextType = 'regular' | 'underline'

export type TextProps = {
  size?: TextSize
  variant?: TextVariant
  type?: TextType
} & ComponentPropsWithRef<'p'>

export const Text = forwardRef(
  (
    {
      className,
      size = 'md',
      variant = 'regular',
      type = 'regular',
      ...rest
    }: TextProps,
    ref: Ref<HTMLParagraphElement>,
  ) => {
    const componentClassnames = clsx(
      className,
      'font-ibmPlex-sans',
      {
        'text-core-400': size === 'xl', // font-size classes
        'text-core-300': size === 'lg',
        'text-core-100': size === 'md',
        'text-core-75': size === 'sm',
      },
      {
        'space-y-400': size === 'xl', // paragraph spacing classes
        'space-y-300': size === 'lg',
        'space-y-100': size === 'md',
        'space-y-75': size === 'sm',
      },
      {
        'leading-core-700': size === 'xl', // line height classes
        'leading-core-500': size === 'lg',
        'leading-core-300': size === 'md',
        'leading-core-200': size === 'sm',
      },
      {
        'font-core-regular': variant === 'regular',
        italic: variant === 'italic',
        'font-core-bold': variant === 'bold',
        'font-core-bold italic': variant === 'bold-italic',
      },
      { underline: type === 'underline' },
    )

    return (
      <p ref={ref} className={clsx(componentClassnames, className)} {...rest} />
    )
  },
)

Text.displayName = 'Text'

export default Text
