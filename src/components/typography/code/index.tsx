import qtMerge from 'qtMerge'
import { forwardRef } from 'react'
import { BodyTypographyProps, TextSize } from 'types'

export const codeTextSizeClassnames: Record<TextSize, string> = {
  sm: 'text-code-sm space-y-paragraphSpacing-code-sm leading-code-sm',
  md: 'text-code-md space-y-paragraphSpacing-code-md leading-code-md',
  lg: 'text-code-lg space-y-paragraphSpacing-code-lg leading-code-lg',
  xl: 'text-code-xl space-y-paragraphSpacing-code-xl leading-code-xl',
}

export const CodeText = forwardRef<HTMLParagraphElement, BodyTypographyProps>(
  ({ size = 'md', className, bold, italic, underline, ...rest }, ref) => {
    return (
      <code
        ref={ref}
        className={qtMerge(
          'font-mono',
          codeTextSizeClassnames[size],
          bold ? 'font-bold' : 'font-regular',
          italic ? 'italic' : 'not-italic',
          underline && 'underline',
          className,
        )}
        {...rest}
      />
    )
  },
)

CodeText.displayName = 'CodeText'

export default CodeText
