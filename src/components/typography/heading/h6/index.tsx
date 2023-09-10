import { ComponentPropsWithRef, Ref, forwardRef } from 'react'
import clsx from 'clsx'

type HeadingOneProps = ComponentPropsWithRef<'h6'>

const H6 = forwardRef(
  (
    { className, children, ...rest }: HeadingOneProps,
    ref: Ref<HTMLHeadingElement>,
  ) => {
    return (
      <h6
        ref={ref}
        className={clsx(
          'font-ubuntu',
          'text-semantic-heading-h6',
          'font-core-bold',
          'leading-semantic-heading-h6',
          'space-y-semantic-paragraphSpacing-heading-h6',
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

H6.displayName = 'Heading.h6'

export default H6
