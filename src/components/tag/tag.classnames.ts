import { VariantProps, cva } from 'class-variance-authority'
import {
  LabelPairedTriangleExclamationBoldIcon,
  LabelPairedCircleExclamationBoldIcon,
  LabelPairedCircleCheckBoldIcon,
  LabelPairedCircleInfoBoldIcon,
  LabelPairedTriangleExclamationRegularIcon,
  LabelPairedCircleExclamationRegularIcon,
  LabelPairedCircleCheckRegularIcon,
  LabelPairedCircleInfoRegularIcon,
} from '@deriv/quill-icons/LabelPaired'
import { ExcludeNull } from 'types'
import { QuillSvgProps } from '@deriv/quill-icons/QuillTypes'

export type BaseTagProps = ExcludeNull<
  VariantProps<typeof TagClassNamesCVA>,
  'colorStyle' | 'isBold' | 'variant'
>
export type BaseTagIconProps = ExcludeNull<
  VariantProps<typeof TagIconFillCVA>,
  'colorStyle'
>
export type BaseTagSizeProps = ExcludeNull<
  VariantProps<typeof TagSizeCVA>,
  'size'
>
export type TagProps = BaseTagProps & BaseTagIconProps & BaseTagSizeProps

export const TagIconFillCVA = cva('', {
  variants: {
    colorStyle: {
      custom: '',
      error: 'fill-status-danger',
      warning: 'fill-status-warning',
      success: 'fill-status-success',
      info: 'fill-status-info',
    },
  },
})

export const TagSizeCVA = cva('', {
  variants: {
    size: {
      xs: 'px-200 py-100 text-50 gap-x-200',
      sm: 'px-400 py-[3px] text-50 gap-x-400',
      md: 'px-600 py-[5px] text-75 gap-x-600',
      lg: 'px-800 py-600 text-100 gap-x-800',
    },
  },
})

export const TagClassNamesCVA = cva(
  'min-w-full rounded-200 inline-flex items-center justify-center',
  {
    variants: {
      colorStyle: {
        custom: '',
        error: 'text-status-danger',
        warning: 'text-status-warning',
        success: 'text-status-success',
        info: 'text-status-info',
      },
      isBold: {
        true: 'font-bold',
      },

      variant: {
        custom: '',
        outline: 'border-75 bg-none',
        fill: 'border-collapse',
      },
    },
    compoundVariants: [
      {
        variant: 'outline',
        colorStyle: 'warning',
        className: 'border-status-warning',
      },
      {
        variant: 'fill',
        colorStyle: 'warning',
        className: 'bg-solid-orange-100',
      },
      {
        variant: 'outline',
        colorStyle: 'error',
        className: 'border-status-danger',
      },
      {
        variant: 'fill',
        colorStyle: 'error',
        className: 'bg-solid-red-100',
      },
      {
        variant: 'outline',
        colorStyle: 'success',
        className: 'border-status-success',
      },
      {
        variant: 'fill',
        colorStyle: 'success',
        className: 'bg-solid-green-100',
      },
      {
        variant: 'outline',
        colorStyle: 'info',
        className: 'border-status-info',
      },
      {
        variant: 'fill',
        colorStyle: 'info',
        className: 'bg-solid-blue-100',
      },
    ],
  },
)

export const TagIcons: Record<
  Exclude<NonNullable<BaseTagProps['colorStyle']>, 'custom'>,
  {
    bold: React.ForwardRefExoticComponent<Omit<QuillSvgProps, 'ref'>>
    regular: React.ForwardRefExoticComponent<Omit<QuillSvgProps, 'ref'>>
  }
> = {
  error: {
    bold: LabelPairedTriangleExclamationBoldIcon,
    regular: LabelPairedTriangleExclamationRegularIcon,
  },
  warning: {
    bold: LabelPairedCircleExclamationBoldIcon,
    regular: LabelPairedCircleExclamationRegularIcon,
  },
  success: {
    bold: LabelPairedCircleCheckBoldIcon,
    regular: LabelPairedCircleCheckRegularIcon,
  },
  info: {
    bold: LabelPairedCircleInfoBoldIcon,
    regular: LabelPairedCircleInfoRegularIcon,
  },
}

export const TagIconSizes: Record<
  NonNullable<BaseTagSizeProps['size']>,
  { width: number; height: number }
> = {
  xs: {
    width: 11,
    height: 18,
  },
  sm: {
    width: 11,
    height: 18,
  },
  md: {
    width: 13,
    height: 22,
  },
  lg: {
    width: 14,
    height: 24,
  },
}
