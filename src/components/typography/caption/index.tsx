import qtMerge from 'qtMerge'
import { forwardRef } from 'react'
import { BodyTypographyProps } from 'types'

export const captionTextSizeClassnames = 'text-caption'

export const CaptionText = forwardRef<
  HTMLParagraphElement,
  Omit<BodyTypographyProps, 'size'>
>(({ bold, italic, underline, className, ...rest }, ref) => {
  return (
    <p
      ref={ref}
      className={qtMerge(
        captionTextSizeClassnames,
        'text-typography-prominent',
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
