import { ComponentPropsWithRef, Ref, forwardRef } from 'react'
import clsx from 'clsx'

type HeadingOneProps = ComponentPropsWithRef<'h6'>

const H7 = forwardRef(
  (
    { className, children, ...rest }: HeadingOneProps,
    ref: Ref<HTMLHeadingElement>,
  ) => {
    return (
      <h6
        ref={ref}
        className={clsx(
          'font-heading',
          'text-semantic-heading-h7',
          'font-core-bold',
          'leading-semantic-heading-h7',
          'space-y-semantic-paragraphSpacing-heading-h7',
          'text-semantic-typography-prominent',
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
