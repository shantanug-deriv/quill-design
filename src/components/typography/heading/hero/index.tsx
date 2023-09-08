import { ComponentPropsWithRef, Ref, forwardRef } from 'react'
import clsx from 'clsx'

type HeroProps = ComponentPropsWithRef<'h1'>

const HeroHeading = forwardRef(
  (
    { className, children, ...rest }: HeroProps,
    ref: Ref<HTMLHeadingElement>,
  ) => {
    return (
      <h1
        ref={ref}
        className={clsx(
          'font-ubuntu',
          'text-core-900',
          'font-core-bold',
          'leading-core-auto',
          'space-y-core-paragraphSpacing-900',
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

HeroHeading.displayName = 'Heading.hero'

export default HeroHeading
