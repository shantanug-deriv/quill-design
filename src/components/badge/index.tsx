import { HTMLAttributes, ReactNode, forwardRef } from 'react'
import {
  BadgeBaseCVA,
  EmptyBadgeSizeCVA,
  LabelBadgeSizeCVA,
  BadgeEmptyClassProps,
  BadgeLabelClassProps,
} from './badge.classname'
import qtMerge from 'qtMerge'

export interface EmptyBadgeProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'>,
    BadgeEmptyClassProps {}

export interface LabelBadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    BadgeLabelClassProps {}

export const EmptyBadge = forwardRef<HTMLDivElement, EmptyBadgeProps>(
  ({ size, className, colorStyle, ...rest }, ref) => {
    return (
      <span
        className={qtMerge(
          BadgeBaseCVA({
            colorStyle,
          }),
          EmptyBadgeSizeCVA({ size }),
          className,
        )}
        ref={ref}
        {...rest}
      />
    )
  },
)

EmptyBadge.displayName = 'EmptyBadge'

export const LabelBadge = forwardRef<HTMLSpanElement, LabelBadgeProps>(
  ({ children, size, colorStyle, className, ...rest }, ref) => {
    return (
      <span
        className={qtMerge(
          BadgeBaseCVA({
            colorStyle,
          }),
          LabelBadgeSizeCVA({ size }),
          className,
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </span>
    )
  },
)

LabelBadge.displayName = 'LabelBadge'

type BadgeVariants = {
  Empty: typeof EmptyBadge
  Label: typeof LabelBadge
}

export const Badge: BadgeVariants = ({ children }: { children: ReactNode }) => {
  return <>{children}</>
}

Badge.Empty = EmptyBadge
Badge.Label = LabelBadge

export default Badge
