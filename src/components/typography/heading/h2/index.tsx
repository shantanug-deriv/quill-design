import { ComponentPropsWithRef, Ref, forwardRef } from 'react'
import clsx from 'clsx'

type HeadingOneProps = ComponentPropsWithRef<'h2'>

const H2 = forwardRef(
  (
    { className, children, ...rest }: HeadingOneProps,
    ref: Ref<HTMLHeadingElement>,
  ) => {
    return (
      <h2
        ref={ref}
        className={clsx(
          'font-heading',
          'text-semantic-heading-h2',
          'font-core-bold',
          'leading-semantic-heading-h2',
          'space-y-semantic-paragraphSpacing-heading-h2',
          'text-semantic-typography-prominent',
          className,
        )}
        {...rest}
      >
        {children}
      </h2>
    )
  },
)

H2.displayName = 'Heading.h2'

export default H2
