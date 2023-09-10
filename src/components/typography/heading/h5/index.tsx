import { ComponentPropsWithRef, Ref, forwardRef } from 'react'
import clsx from 'clsx'

type HeadingOneProps = ComponentPropsWithRef<'h5'>

const H5 = forwardRef(
  (
    { className, children, ...rest }: HeadingOneProps,
    ref: Ref<HTMLHeadingElement>,
  ) => {
    return (
      <h5
        ref={ref}
        className={clsx(
          'font-ubuntu',
          'text-semantic-heading-h5',
          'font-core-bold',
          'leading-semantic-heading-h5',
          'space-y-semantic-paragraphSpacing-heading-h5',
          'text-semantic-typography-prominent',
          className,
        )}
        {...rest}
      >
        {children}
      </h5>
    )
  },
)

H5.displayName = 'Heading.h5'

export default H5
