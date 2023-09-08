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
          'font-ubuntu',
          'text-core-700',
          'font-core-bold',
          'leading-core-auto',
          'space-y-core-paragraphSpacing-700',
          'text-core-solid-slate-1400', // TODO: this should be updated with semantic color tokens
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
