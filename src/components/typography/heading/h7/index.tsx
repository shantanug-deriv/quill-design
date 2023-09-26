import qtMerge from 'qtMerge'
import { ComponentPropsWithRef, Ref, forwardRef } from 'react'

type HeadingOneProps = ComponentPropsWithRef<'h6'>

const H7 = forwardRef(
  (
    { className, children, ...rest }: HeadingOneProps,
    ref: Ref<HTMLHeadingElement>,
  ) => {
    return (
      <h6
        ref={ref}
        className={qtMerge(
          'font-heading',
          'text-heading-h7',
          'font-bold',
          'leading-heading-h7',
          'space-y-paragraphSpacing-heading-h7',
          'text-typography-prominent',
          className,
        )}
        {...rest}
      >
        {children}
      </h6>
    )
  },
)

H7.displayName = 'Heading.h7'

export default H7
