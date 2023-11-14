import { HTMLAttributes, forwardRef } from 'react'
import qtMerge from 'qtMerge'
import {
  BadgeBaseCVA,
  BadgeLabelClassProps,
  LabelBadgeSizeCVA,
} from '../badge.classname'

export interface LabelBadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    BadgeLabelClassProps {}

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
