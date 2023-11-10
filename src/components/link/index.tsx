import qtMerge from 'qt-merge'
import { AnchorHTMLAttributes, ReactNode, Ref, forwardRef } from 'react'
export type LinkVariant = 'primary' | 'secondary'
export type LinkColorStyle = 'black' | 'white'
export type LinkSize = 'caption' | 'sm' | 'md' | 'lg' | 'xl'

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LinkVariant
  colorStyle?: LinkColorStyle
  size?: LinkSize
  disabled?: boolean
  renderLeftIcon?: () => ReactNode
  renderRightIcon?: () => ReactNode
}

export const Link = forwardRef(
  (
    {
      className,
      variant = 'primary',
      colorStyle = 'black',
      size = 'sm',
      renderLeftIcon,
      renderRightIcon,
      children,
      disabled,
      ...rest
    }: LinkProps,
    ref: Ref<HTMLAnchorElement>,
  ) => {
    return (
      <a
        ref={ref}
        {...rest}
        className={qtMerge(
          disabled && 'disabled:opacity-300',
          colorStyle === 'black' && [
            'text-solid-slate-1400',
            'hover:underline',
            'active:underline',
          ],
          colorStyle === 'white' && [
            'text-solid-slate-50',
            'hover:underline',
            'active:underline',
          ],
          size === 'caption' && 'p-400 text-50',
          size === 'sm' && 'p-400 text-50',
          size === 'md' && 'p-600 text-75',
          size === 'lg' && 'p-800 text-100',
          size === 'xl' && 'p-1200 text-300',
          className,
        )}
      >
        {variant === 'primary' && renderLeftIcon?.()}
        {children}
        {variant === 'secondary' && renderRightIcon?.()}
      </a>
    )
  },
)

Link.displayName = 'Link'

export default Link
