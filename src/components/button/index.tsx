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
          'disabled:opacity-core-300',
          'leading-core-100',
          'font-core-bold',
          'font-heading',
          'flex flex-row items-center justify-center gap-semantic-general-md',
          {
            'w-full': fullWidth,
          },
          {
            'border-core-75': variant === 'secondary' && colorStyle !== 'white',
          },
          {
            ['border-core-solid-coral-700']:
              variant === 'secondary' && colorStyle === 'coral',
          },
          {
            ['border-core-solid-slate-1400']:
              variant === 'secondary' && colorStyle === 'black',
          },
          {
            ['border-core-solid-slate-50']:
              variant === 'secondary' && colorStyle === 'white',
          },
          {
            'rounded-core-400 p-core-400 text-core-50': size === 'sm',
          },
          {
            'rounded-core-600 p-core-600 text-core-75': size === 'md',
          },
          {
            'rounded-core-800 p-core-800 text-core-100': size === 'lg',
          },
          {
            'rounded-core-1200 p-core-1200 text-core-300': size === 'xl',
          },
          {
            ['bg-core-solid-coral-700 text-core-solid-slate-50 hover:bg-core-solid-coral-800 active:bg-core-solid-coral-900']:
              variant === 'primary' && colorStyle === 'coral',
          },
          {
            ['bg-core-solid-slate-1400 text-core-solid-slate-50 hover:bg-core-solid-slate-800 active:bg-core-solid-slate-700']:
              variant === 'primary' && colorStyle === 'black',
          },
          {
            ['bg-core-solid-slate-50 text-core-solid-slate-1400 hover:bg-core-opacity-white-800 active:bg-core-opacity-white-700']:
              variant === 'primary' && colorStyle === 'white',
          },

          {
            ['bg-core-solid-red-100 text-core-solid-coral-700 hover:bg-core-solid-red-200 active:bg-core-solid-red-300']:
              variant === 'secondary' && colorStyle === 'coral',
          },
          {
            ['bg-core-solid-slate-50 text-core-solid-slate-1400 hover:bg-core-opacity-black-100 active:bg-core-opacity-black-200']:
              variant === 'secondary' && colorStyle === 'black',
          },
          {
            ['bg-core-solid-slate-50 text-core-solid-slate-1400 hover:bg-core-opacity-white-800 active:bg-core-opacity-white-700']:
              variant === 'secondary' && colorStyle === 'white',
          },

          {
            ['text-core-solid-coral-700']:
              variant === 'tertiary' && colorStyle === 'coral',
          },
          {
            ['text-core-solid-slate-1400']:
              variant === 'tertiary' && colorStyle === 'black',
          },
          {
            ['text-core-solid-slate-50']:
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
