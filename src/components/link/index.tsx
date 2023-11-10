import qtMerge from 'qt-merge'
import { AnchorHTMLAttributes, ReactNode, Ref, forwardRef } from 'react'
import { linkCva } from './link.classnames'
import { type VariantProps } from 'class-variance-authority'
import { ExcludeNull } from 'types'

export interface LinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    ExcludeNull<
      VariantProps<typeof linkCva>,
      'colorStyle' | 'size' | 'disabled'
    > {
  renderLeftIcon?: () => ReactNode
  renderRightIcon?: () => ReactNode
}

export const Link = forwardRef(
  (
    {
      className,
      colorStyle = 'black',
      size = 'sm',
      disabled,
      // renderLeftIcon,
      // renderRightIcon,
      children,
      ...rest
    }: LinkProps,
    ref: Ref<HTMLAnchorElement>,
  ) => {
    return (
      <a
        ref={ref}
        href="/"
        {...rest}
        className={qtMerge(linkCva({ colorStyle, size, disabled, className }))}
      >
        {/* {renderLeftIcon?.()} */}
        {children}
        {/* {renderRightIcon?.()} */}
      </a>
    )
  },
)

Link.displayName = 'Link'

export default Link
