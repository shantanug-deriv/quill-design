import { ComponentPropsWithRef, Ref, forwardRef } from 'react'
import clsx from 'clsx'

export type TextSize = 'xl' | 'lg' | 'md' | 'sm'
export type TextVariant = 'regular' | 'bold'
export type TextType = 'regular' | 'underline' | 'italic'

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
      'font-sans',
      'text-typography-prominent',
      {
        'text-body-xl': size === 'xl', // font-size classes
        'text-body-lg': size === 'lg',
        'text-body-md': size === 'md',
        'text-body-sm': size === 'sm',
      },
      {
        'space-y-paragraphSpacing-body-xl': size === 'xl', // paragraph spacing classes
        'space-y-paragraphSpacing-body-lg': size === 'lg',
        'space-y-paragraphSpacing-body-md': size === 'md',
        'space-y-paragraphSpacing-body-sm': size === 'sm',
      },
      {
        'leading-body-xl': size === 'xl', // line height classes
        'leading-body-lg': size === 'lg',
        'leading-body-md': size === 'md',
        'leading-body-sm': size === 'sm',
      },
      {
        'font-regular': variant === 'regular',
        'font-bold': variant === 'bold',
      },
      { underline: type === 'underline', italic: type === 'italic' },
    )
    return (
      <p ref={ref} className={clsx(componentClassnames, className)} {...rest} />
    )
  },
)

Text.displayName = 'Text'

export default Text
