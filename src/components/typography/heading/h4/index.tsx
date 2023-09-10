import { ComponentPropsWithRef, Ref, forwardRef } from 'react'
import clsx from 'clsx'

type HeadingOneProps = ComponentPropsWithRef<'h4'>

const H4 = forwardRef(
  (
    { className, children, ...rest }: HeadingOneProps,
    ref: Ref<HTMLHeadingElement>,
  ) => {
    return (
      <h4
        ref={ref}
        className={clsx(
          'font-ubuntu',
          'text-semantic-heading-h4',
          'font-core-bold',
          'leading-semantic-heading-h4',
          'space-y-semantic-paragraphSpacing-heading-h4',
          'text-semantic-typography-prominent',
          className,
        )}
        {...rest}
      >
        {children}
      </h4>
    )
  },
)

H4.displayName = 'Heading.h4'

export default H4
