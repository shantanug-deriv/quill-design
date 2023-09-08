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
          'text-core-100',
          'font-core-bold',
          'leading-core-auto',
          'space-y-core-paragraphSpacing-100',
          'text-core-solid-slate-1400', // TODO: this should be updated with semantic color tokens
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
