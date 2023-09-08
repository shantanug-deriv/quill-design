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
          'text-core-400',
          'font-core-bold',
          'leading-core-auto',
          'space-y-core-paragraphSpacing-400',
          'text-core-solid-slate-1400', // TODO: this should be updated with semantic color tokens
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
