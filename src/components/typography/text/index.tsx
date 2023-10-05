import { qtMerge } from 'qtMerge'
import { forwardRef } from 'react'
import { BodyTypographyProps, TextSize } from 'types'

export const bodyTextSizeClassnames: Record<TextSize, string> = {
  sm: 'text-body-sm space-y-paragraphSpacing-body-sm leading-body-sm',
  md: 'text-body-md space-y-paragraphSpacing-body-md leading-body-md',
  lg: 'text-body-lg space-y-paragraphSpacing-body-lg leading-body-lg',
  xl: 'text-body-xl space-y-paragraphSpacing-body-xl leading-body-xl',
}

export const Text = forwardRef<HTMLParagraphElement, BodyTypographyProps>(
  (
    {
      size = 'md',
      className,
      bold = false,
      italic = false,
      underline = false,
      ...rest
    },
    ref,
  ) => {
    return (
      <p
        ref={ref}
        className={qtMerge(
          bodyTextSizeClassnames[size],
          bold ? 'font-bold' : 'font-regular',
          italic ? 'italic' : 'not-italic',
          underline && 'underline',
          'text-typography-prominent',
          className,
        )}
        {...rest}
      />
    )
  },
)

Text.displayName = 'Text'

export default Text
