import qtMerge from 'qtMerge'
import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { basecva } from './badge.classname'
import { type VariantProps } from 'class-variance-authority'
import { ExcludeNull } from 'types'

export type BadgeProps = ComponentPropsWithoutRef<'div'> &
  ExcludeNull<VariantProps<typeof basecva>, 'size' | 'colorStyle'>

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ children, className, size, colorStyle, ...rest }, ref) => {
    return (
      <div
        className={qtMerge(className, basecva({ size, colorStyle }))}
        {...rest}
        ref={ref}
      >
        {children}
      </div>
    )
  },
)

Badge.displayName = 'Badge'

export default Badge
