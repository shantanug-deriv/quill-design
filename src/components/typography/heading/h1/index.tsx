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
          'font-ubuntu',
          'text-core-800',
          'font-core-bold',
          'leading-core-auto',
          'space-y-core-paragraphSpacing-800',
          'text-core-solid-slate-1400', // TODO: this should be updated with semantic color tokens
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
