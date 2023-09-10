import { ComponentPropsWithRef, Ref, forwardRef } from 'react'
import clsx from 'clsx'

type HeadingOneProps = ComponentPropsWithRef<'h3'>

const H3 = forwardRef(
  (
    { className, children, ...rest }: HeadingOneProps,
    ref: Ref<HTMLHeadingElement>,
  ) => {
    return (
      <h3
        ref={ref}
        className={clsx(
          'font-ubuntu',
          'text-semantic-heading-h3',
          'font-core-bold',
          'leading-semantic-heading-h3',
          'space-y-semantic-paragraphSpacing-heading-h3',
          'text-semantic-typography-prominent',
          className,
        )}
        {...rest}
      >
        {children}
      </h3>
    )
  },
)

H3.displayName = 'Heading.h3'

export default H3
