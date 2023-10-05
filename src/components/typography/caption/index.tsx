import qtMerge from 'qtMerge'
import { forwardRef } from 'react'
import { BodyTypographyProps } from 'types'

export const CaptionText = forwardRef<
  HTMLParagraphElement,
  Omit<BodyTypographyProps, 'size'>
>(({ bold, italic, underline, className, ...rest }, ref) => {
  return (
    <p
      ref={ref}
      className={qtMerge(
        'text-caption text-typography-prominent',
        bold ? 'font-bold' : 'font-regular',
        italic ? 'italic' : 'not-italic',
        underline && 'underline',
        className,
      )}
      {...rest}
    />
  )
})

CaptionText.displayName = 'CaptionText'

export default CaptionText
