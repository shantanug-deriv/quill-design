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
          'text-core-300',
          'font-core-bold',
          'leading-core-auto',
          'space-y-core-paragraphSpacing-300',
          'text-core-solid-slate-1400', // TODO: this should be updated with semantic color tokens
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
