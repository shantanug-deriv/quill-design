import { cva } from 'class-variance-authority'
import {
  LabelPairedTriangleExclamationBoldIcon,
  LabelPairedCircleExclamationBoldIcon,
  LabelPairedCircleCheckBoldIcon,
  LabelPairedCircleInfoBoldIcon,
  LabelPairedTriangleExclamationRegularIcon,
  LabelPairedCircleExclamationRegularIcon,
  LabelPairedCircleCheckRegularIcon,
  LabelPairedCircleInfoRegularIcon,
  QuillSvgProps,
} from '@deriv/quill-icons'
import { TPreset, TSize } from '.'

type TTagIcon = {
  [key in Exclude<TPreset, 'custom'>]: {
    [key in 'true' | 'false']: React.ForwardRefExoticComponent<
      Omit<QuillSvgProps, 'ref'>
    >
  }
}

export const TagIcons: TTagIcon = {
  error: {
    true: LabelPairedTriangleExclamationBoldIcon,
    false: LabelPairedTriangleExclamationRegularIcon,
  },
  warning: {
    true: LabelPairedCircleExclamationBoldIcon,
    false: LabelPairedCircleExclamationRegularIcon,
  },
  success: {
    true: LabelPairedCircleCheckBoldIcon,
    false: LabelPairedCircleCheckRegularIcon,
  },
  info: {
    true: LabelPairedCircleInfoBoldIcon,
    false: LabelPairedCircleInfoRegularIcon,
  },
}

export const TagIconSizes: Record<TSize, { width: number; height: number }> = {
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

export const TagIconColors = {
  error: 'fill-status-danger',
  warning: 'fill-status-warning',
  success: 'fill-status-success',
  info: 'fill-status-info',
}

export const TagCustomIconColors = {
  red: 'fill-solid-red-1200',
  orange: 'fill-solid-orange-1200',
  yellow: 'fill-solid-yellow-1200',
  mustard: 'fill-solid-mustard-1200',
  olive: 'fill-solid-olive-1200',
  green: 'fill-solid-green-1200',
  tiffany: 'fill-solid-tiffany-1200',
  teal: 'fill-solid-teal-1200',
  seawater: 'fill-solid-seawater-1200',
  blue: 'fill-solid-blue-1200',
  sapphire: 'fill-solid-sapphire-1200',
  blueberry: 'fill-solid-blueberry-1200',
  grape: 'fill-solid-grape-1200',
  magenta: 'fill-solid-magenta-1200',
  slate: 'fill-solid-slate-1200',
}

export const TagClassNames = cva(
  'min-w-full rounded-200 inline-flex items-center justify-center',
  {
    variants: {
      colorStyle: {
        red: 'text-solid-red-1200',
        orange: 'text-solid-orange-1200',
        yellow: 'text-solid-yellow-1200',
        mustard: 'text-solid-mustard-1200',
        olive: 'text-solid-olive-1200',
        green: 'text-solid-green-1200',
        tiffany: 'text-solid-tiffany-1200',
        teal: 'text-solid-teal-1200',
        seawater: 'text-solid-seawater-1200',
        blue: 'text-solid-blue-1200',
        sapphire: 'text-solid-sapphire-1200',
        blueberry: 'text-solid-blueberry-1200',
        grape: 'text-solid-grape-1200',
        magenta: 'text-solid-magenta-1200',
        slate: 'text-solid-slate-1200',
      },
      bold: {
        true: 'font-bold',
      },
      preset: {
        custom: '',
        success: 'text-status-success',
        error: 'text-status-danger',
        warning: 'text-status-warning',
        info: 'text-status-info',
      },
      size: {
        xs: 'px-200 py-100 text-50 gap-x-200',
        sm: 'px-400 py-[3px] text-50 gap-x-400',
        md: 'px-600 py-[5px] text-75 gap-x-600',
        lg: 'px-800 py-600 text-100 gap-x-800',
      },
      variant: {
        outline: 'border-75 bg-none',
        fill: 'border-collapse',
      },
    },
    compoundVariants: [
      {
        preset: 'custom',
        variant: 'outline',
        colorStyle: 'red',
        className: 'border-solid-red-800',
      },
      {
        preset: 'custom',
        variant: 'fill',
        colorStyle: 'red',
        className: 'bg-solid-red-100',
      },
      {
        preset: 'custom',
        variant: 'outline',
        colorStyle: 'orange',
        className: 'border-solid-orange-800',
      },
      {
        preset: 'custom',
        variant: 'fill',
        colorStyle: 'orange',
        className: 'bg-solid-orange-100',
      },
      {
        preset: 'custom',
        variant: 'outline',
        colorStyle: 'yellow',
        className: 'border-solid-yellow-800',
      },
      {
        preset: 'custom',
        variant: 'fill',
        colorStyle: 'yellow',
        className: 'bg-solid-yellow-100',
      },
      {
        preset: 'custom',
        variant: 'outline',
        colorStyle: 'mustard',
        className: 'border-solid-mustard-800',
      },
      {
        preset: 'custom',
        variant: 'fill',
        colorStyle: 'mustard',
        className: 'bg-solid-mustard-100',
      },
      {
        preset: 'custom',
        variant: 'outline',
        colorStyle: 'olive',
        className: 'border-solid-olive-800',
      },
      {
        preset: 'custom',
        variant: 'fill',
        colorStyle: 'olive',
        className: 'bg-solid-olive-100',
      },
      {
        preset: 'custom',

        variant: 'outline',
        colorStyle: 'green',
        className: 'border-solid-green-800',
      },
      {
        preset: 'custom',
        variant: 'fill',
        colorStyle: 'green',
        className: 'bg-solid-green-100',
      },
      {
        preset: 'custom',
        variant: 'outline',
        colorStyle: 'tiffany',
        className: 'border-solid-tiffany-800',
      },
      {
        preset: 'custom',
        variant: 'fill',
        colorStyle: 'tiffany',
        className: 'bg-solid-tiffany-100',
      },
      {
        preset: 'custom',
        variant: 'outline',
        colorStyle: 'teal',
        className: 'border-solid-teal-800',
      },
      {
        preset: 'custom',
        variant: 'fill',
        colorStyle: 'teal',
        className: 'bg-solid-teal-100',
      },
      {
        preset: 'custom',
        variant: 'outline',
        colorStyle: 'seawater',
        className: 'border-solid-seawater-800',
      },
      {
        preset: 'custom',
        variant: 'fill',
        colorStyle: 'seawater',
        className: 'bg-solid-seawater-100',
      },
      {
        preset: 'custom',
        variant: 'outline',
        colorStyle: 'blue',
        className: 'border-solid-blue-800',
      },
      {
        preset: 'custom',
        variant: 'fill',
        colorStyle: 'blue',
        className: 'bg-solid-blue-100',
      },
      {
        preset: 'custom',
        variant: 'outline',
        colorStyle: 'sapphire',
        className: 'border-solid-sapphire-800',
      },
      {
        preset: 'custom',
        variant: 'fill',
        colorStyle: 'sapphire',
        className: 'bg-solid-sapphire-100',
      },
      {
        preset: 'custom',
        variant: 'outline',
        colorStyle: 'blueberry',
        className: 'border-solid-blueberry-800',
      },
      {
        preset: 'custom',
        variant: 'fill',
        colorStyle: 'blueberry',
        className: 'bg-solid-blueberry-100',
      },
      {
        preset: 'custom',
        variant: 'outline',
        colorStyle: 'grape',
        className: 'border-solid-grape-800',
      },
      {
        preset: 'custom',
        variant: 'fill',
        colorStyle: 'grape',
        className: 'bg-solid-grape-100',
      },
      {
        preset: 'custom',
        variant: 'outline',
        colorStyle: 'magenta',
        className: 'border-solid-magenta-800',
      },
      {
        preset: 'custom',
        variant: 'fill',
        colorStyle: 'magenta',
        className: 'bg-solid-magenta-100',
      },
      {
        preset: 'custom',
        variant: 'outline',
        colorStyle: 'slate',
        className: 'border-solid-slate-800',
      },
      {
        preset: 'custom',
        variant: 'fill',
        colorStyle: 'slate',
        className: 'bg-solid-slate-100',
      },
      {
        preset: 'custom',
        variant: 'fill',
        colorStyle: 'slate',
        className: 'bg-solid-slate-100',
      },
      {
        variant: 'outline',
        preset: 'warning',
        className: 'border-status-warning',
      },
      {
        variant: 'fill',
        preset: 'warning',
        className: 'bg-solid-orange-100',
      },
      {
        variant: 'outline',
        preset: 'error',
        className: 'border-status-danger',
      },
      {
        variant: 'fill',
        preset: 'error',
        className: 'bg-solid-red-100',
      },
      {
        variant: 'outline',
        preset: 'success',
        className: 'border-status-success',
      },
      {
        variant: 'fill',
        preset: 'success',
        className: 'bg-solid-green-100',
      },
      {
        variant: 'outline',
        preset: 'info',
        className: 'border-status-info',
      },
      {
        variant: 'fill',
        preset: 'info',
        className: 'bg-solid-blue-100',
      },
    ],
    defaultVariants: {
      variant: 'fill',
      size: 'md',
      bold: false,
      preset: 'custom',
      colorStyle: 'slate',
    },
  },
)
