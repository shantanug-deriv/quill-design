import { captionTextSizeClassnames } from 'components/typography/caption'
import { bodyTextSizeClassnames } from 'components/typography/text'
import qtMerge from 'qtMerge'
import { forwardRef } from 'react'

export type BasicButtonVariant = 'primary' | 'secondary' | 'tertiary'
export type BasicButtonColorStyle = 'coral' | 'black' | 'white'
export type BasicButtonSize = 'sm' | 'md' | 'lg' | 'xl'

export type VariantClassNames<T extends string> = { [key in T]: string }

export type OptionalVariantClassNames<T extends string, U = string> = {
  [key in T]?: U
}

export interface BasicButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: BasicButtonSize
  variant?: BasicButtonVariant
  colorStyle?: BasicButtonColorStyle
  icon?: React.FC<{ width?: number | string; height?: number | string }>
  iconPosition?: 'start' | 'end'
  fullWidth?: boolean
  isLoading?: boolean
}

const sizeClasses: VariantClassNames<BasicButtonSize> = {
  sm: 'h-[24px] min-w-[48px] rounded-400',
  md: 'h-[32px] min-w-[64px] rounded-600',
  lg: 'h-[48px] min-w-[96px] rounded-800',
  xl: 'h-[64px] min-w-[128px] rounded-1200',
}

const paddingClasses: OptionalVariantClassNames<BasicButtonSize> = {
  sm: 'px-400 py-200 gap-200',
  md: 'px-600 py-300 gap-300',
  lg: 'px-800 py-600 gap-400',
  xl: 'px-1200 py-800 gap-600',
}

export const variantClasses: OptionalVariantClassNames<
  BasicButtonVariant,
  OptionalVariantClassNames<BasicButtonColorStyle>
> = {
  primary: {
    coral:
      'bg-solid-coral-700 text-solid-slate-50 hover:bg-solid-coral-800 active:bg-solid-coral-900',
    black:
      'bg-solid-slate-1400 text-solid-slate-50 hover:bg-opacity-black-700 active::bg-opacity-black-800',
    white:
      'bg-solid-slate-50 text-solid-slate-1400 hover:bg-opacity-white-800 active:bg-opacity-white-700',
  },
  secondary: {
    coral:
      'border-75 text-solid-coral-700 hover:bg-solid-coral-100 active:bg-solid-coral-200 border-solid-coral-700',
    black:
      'border-75 text-solid-slate-1400 hover:bg-opacity-black-100 active:bg-opacity-black-200 border-solid-slate-1400',
  },
  tertiary: {
    coral:
      'text-solid-coral-700 hover:bg-solid-coral-100 active:bg-solid-coral-200 underline',
    black:
      'text-solid-slate-1400 hover:bg-opacity-black-100 active:bg-opacity-black-200 underline',
  },
}

const buttonTextSize: VariantClassNames<BasicButtonSize> = {
  sm: captionTextSizeClassnames,
  md: bodyTextSizeClassnames.sm,
  lg: bodyTextSizeClassnames.md,
  xl: bodyTextSizeClassnames.lg,
}

export const BasicButton = forwardRef<HTMLButtonElement, BasicButtonProps>(
  (
    {
      className,
      size = 'lg',
      variant = 'primary',
      colorStyle = 'coral',
      fullWidth = false,
      isLoading = false,
      children,
      icon: Icon,
      iconPosition,
      ...rest
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={qtMerge(
          sizeClasses[size],
          paddingClasses[size],
          variantClasses?.[variant]?.[colorStyle],
          fullWidth && 'w-full',
          'transition-colors duration-150 ease-in-out',
          'font-bold',
          'disabled:opacity-600',
          'flex items-center justify-center',
          isLoading && 'cursor-wait bg-solid-coral-900',
          buttonTextSize[size],
          className,
        )}
        {...rest}
      >
        {iconPosition === 'start' && Icon && <Icon width={28} height={170} />}
        {children}
        {iconPosition === 'end' && Icon && <Icon width={28} height={170} />}
      </button>
    )
  },
)

BasicButton.displayName = 'BasicButton'

export default BasicButton
