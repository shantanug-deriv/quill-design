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
          'text-semantic-heading-hero',
          'font-core-bold',
          'leading-semantic-heading-hero',
          'space-y-semantic-paragraphSpacing-heading-hero',
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

HeroHeading.displayName = 'Heading.hero'

export default HeroHeading
