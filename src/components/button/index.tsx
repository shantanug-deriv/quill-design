import clsx from 'clsx'
import { ButtonHTMLAttributes, ReactNode, Ref, forwardRef } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary'
export type ButtonColorStyle = 'coral' | 'black' | 'white'
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  colorStyle?: ButtonColorStyle
  size?: ButtonSize
  fullWidth?: boolean
  renderLeftIcon?: () => ReactNode
  renderRightIcon?: () => ReactNode
}

export const Button = forwardRef(
  (
    {
      className,
      variant = 'primary',
      colorStyle = 'coral',
      size = 'sm',
      renderLeftIcon,
      renderRightIcon,
      children,
      fullWidth,
      ...rest
    }: ButtonProps,
    ref: Ref<HTMLButtonElement>,
  ) => {
    return (
      <button
        className={clsx(
          'disabled:opacity-300',
          'leading-100',
          'font-bold',
          'font-heading',
          'flex flex-row items-center justify-center gap-general-md',
          {
            'w-full': fullWidth,
          },
          {
            'border-75': variant === 'secondary' && colorStyle !== 'white',
          },
          {
            ['border-solid-coral-700']:
              variant === 'secondary' && colorStyle === 'coral',
          },
          {
            ['border-solid-slate-1400']:
              variant === 'secondary' && colorStyle === 'black',
          },
          {
            ['border-solid-slate-50']:
              variant === 'secondary' && colorStyle === 'white',
          },
          {
            'rounded-400 p-400 text-50': size === 'sm',
          },
          {
            'rounded-600 p-600 text-75': size === 'md',
          },
          {
            'rounded-800 p-800 text-100': size === 'lg',
          },
          {
            'rounded-1200 p-1200 text-300': size === 'xl',
          },
          {
            ['bg-solid-coral-700 text-solid-slate-50 hover:bg-solid-coral-800 active:bg-solid-coral-900']:
              variant === 'primary' && colorStyle === 'coral',
          },
          {
            ['bg-solid-slate-1400 text-solid-slate-50 hover:bg-solid-slate-800 active:bg-solid-slate-700']:
              variant === 'primary' && colorStyle === 'black',
          },
          {
            ['bg-solid-slate-50 text-solid-slate-1400 hover:bg-opacity-white-800 active:bg-opacity-white-700']:
              variant === 'primary' && colorStyle === 'white',
          },

          {
            ['bg-solid-red-100 text-solid-coral-700 hover:bg-solid-red-200 active:bg-solid-red-300']:
              variant === 'secondary' && colorStyle === 'coral',
          },
          {
            ['bg-solid-slate-50 text-solid-slate-1400 hover:bg-opacity-black-100 active:bg-opacity-black-200']:
              variant === 'secondary' && colorStyle === 'black',
          },
          {
            ['bg-solid-slate-50 text-solid-slate-1400 hover:bg-opacity-white-800 active:bg-opacity-white-700']:
              variant === 'secondary' && colorStyle === 'white',
          },

          {
            ['text-solid-coral-700']:
              variant === 'tertiary' && colorStyle === 'coral',
          },
          {
            ['text-solid-slate-1400']:
              variant === 'tertiary' && colorStyle === 'black',
          },
          {
            ['text-solid-slate-50']:
              variant === 'tertiary' && colorStyle === 'white',
          },
          className,
        )}
        ref={ref}
        {...rest}
      >
        {renderLeftIcon?.()}
        {children}
        {renderRightIcon?.()}
      </button>
    )
  },
)

Button.displayName = 'Button'

export default Button
