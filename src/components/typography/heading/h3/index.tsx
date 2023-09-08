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
          'text-core-500',
          'font-core-bold',
          'leading-core-auto',
          'space-y-core-paragraphSpacing-500',
          'text-core-solid-slate-1400', // TODO: this should be updated with semantic color tokens
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
