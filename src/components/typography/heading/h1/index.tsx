import { ComponentPropsWithRef, Ref, forwardRef } from 'react'
import clsx from 'clsx'

export type HeadingOneProps = ComponentPropsWithRef<'h1'>

const H1 = forwardRef(
  (
    { className, children, ...rest }: HeadingOneProps,
    ref: Ref<HTMLHeadingElement>,
  ) => {
    return (
      <h1
        ref={ref}
        className={clsx(
          'font-heading',
          'text-semantic-heading-h1',
          'font-core-bold',
          'leading-semantic-heading-h1',
          'space-y-semantic-paragraphSpacing-heading-h1',
          'text-semantic-typography-prominent',
          className,
        )}
        {...rest}
      >
        {children}
      </h1>
    )
  },
)

H1.displayName = 'Heading.h1'

export default H1
