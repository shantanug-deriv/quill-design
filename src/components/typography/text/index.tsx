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
      'text-semantic-typography-prominent',
      {
        'text-semantic-body-xl': size === 'xl', // font-size classes
        'text-semantic-body-lg': size === 'lg',
        'text-semantic-body-md': size === 'md',
        'text-semantic-body-sm': size === 'sm',
      },
      {
        'space-y-semantic-paragraphSpacing-body-xl': size === 'xl', // paragraph spacing classes
        'space-y-semantic-paragraphSpacing-body-lg': size === 'lg',
        'space-y-semantic-paragraphSpacing-body-md': size === 'md',
        'space-y-semantic-paragraphSpacing-body-sm': size === 'sm',
      },
      {
        'leading-semantic-body-xl': size === 'xl', // line height classes
        'leading-semantic-body-lg': size === 'lg',
        'leading-semantic-body-md': size === 'md',
        'leading-semantic-body-sm': size === 'sm',
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
