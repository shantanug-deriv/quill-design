import { TagSize, TagVariant, TagType, TagColor } from '.'
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

type TypeTagColor = {
  [key in Exclude<TagType, 'custom'>]: {
    [key in TagVariant]: string
  }
}

export const TagColors: TypeTagColor = {
  error: {
    fill: 'bg-solid-red-100 text-status-danger',
    outline: 'border-75 border-status-danger text-status-danger',
  },
  warning: {
    fill: 'bg-solid-orange-100 text-status-warning',
    outline: 'border-75 border-status-warning text-status-warning',
  },
  info: {
    fill: 'bg-solid-blue-100 text-status-info',
    outline: 'border-75 border-status-info text-status-info',
  },
  success: {
    fill: 'bg-solid-green-100 text-status-success',
    outline: 'border-75 border-status-success text-status-success',
  },
}

type TypeTagCustomColor = {
  [key in TagColor]: {
    [key in TagVariant]: string
  }
}

export const TagCustomColors: TypeTagCustomColor = {
  red: {
    fill: 'bg-solid-red-100 text-solid-red-1200',
    outline: 'border-75 border-solid-red-800 text-solid-red-1200',
  },
  orange: {
    fill: 'bg-solid-orange-100 text-solid-orange-1200',
    outline: 'border-75 border-solid-orange-800 text-solid-orange-1200',
  },
  yellow: {
    fill: 'bg-solid-yellow-100 text-solid-yellow-1200',
    outline: 'border-75 border-solid-yellow-800 text-solid-yellow-1200',
  },
  mustard: {
    fill: 'bg-solid-mustard-100 text-solid-mustard-1200',
    outline: 'border-75 border-solid-mustard-800 text-solid-mustard-1200',
  },
  olive: {
    fill: 'bg-solid-olive-100 text-solid-olive-1200',
    outline: 'border-75 border-solid-olive-800 text-solid-olive-1200',
  },
  green: {
    fill: 'bg-solid-green-100 text-solid-green-1200',
    outline: 'border-75 border-solid-green-800 text-solid-green-1200',
  },
  tiffany: {
    fill: 'bg-solid-tiffany-100 text-solid-tiffany-1200',
    outline: 'border-75 border-solid-tiffany-800 text-solid-tiffany-1200',
  },
  teal: {
    fill: 'bg-solid-teal-100 text-solid-teal-1200',
    outline: 'border-75 border-solid-teal-800 text-solid-teal-1200',
  },
  seawater: {
    fill: 'bg-solid-seawater-100 text-solid-seawater-1200',
    outline: 'border-75 border-solid-seawater-800 text-solid-seawater-1200',
  },
  blue: {
    fill: 'bg-solid-blue-100 text-solid-blue-1200',
    outline: 'border-75 border-solid-blue-800 text-solid-blue-1200',
  },
  sapphire: {
    fill: 'bg-solid-sapphire-100 text-solid-sapphire-1200',
    outline: 'border-75 border-solid-sapphire-800 text-solid-sapphire-1200',
  },
  blueberry: {
    fill: 'bg-solid-blueberry-100 text-solid-blueberry-1200',
    outline: 'border-75 border-solid-blueberry-800 text-solid-blueberry-1200',
  },
  grape: {
    fill: 'bg-solid-grape-100 text-solid-grape-1200',
    outline: 'border-75 border-solid-grape-800 text-solid-grape-1200',
  },
  magenta: {
    fill: 'bg-solid-magenta-100 text-solid-magenta-1200',
    outline: 'border-75 border-solid-magenta-800 text-solid-magenta-1200',
  },
  slate: {
    fill: 'bg-solid-slate-100 text-solid-slate-1200',
    outline: 'border-75 border-solid-slate-800 text-solid-slate-1200',
  },
}

export const TagSizes: Record<TagSize, string> = {
  xs: 'px-200 py-100 text-50 gap-x-200',
  sm: 'px-400 py-[3px] text-50 gap-x-400',
  md: 'px-600 py-[5px] text-75 gap-x-600',
  lg: 'px-800 py-600 text-100 gap-x-800',
}

type TagIcons = {
  [key in Exclude<TagType, 'custom'>]: {
    [key in 'true' | 'false']: React.ForwardRefExoticComponent<
      Omit<QuillSvgProps, 'ref'>
    >
  }
}

export const TagIcons: TagIcons = {
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

export const TagIconSizes: Record<TagSize, { width: number; height: number }> =
  {
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

export const TagIconColors: Record<Exclude<TagType, 'custom'>, string> = {
  error: 'fill-status-danger',
  warning: 'fill-status-warning',
  success: 'fill-status-success',
  info: 'fill-status-info',
}

export const TagCustomIconColors: Record<TagColor, string> = {
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

export const TagBaseClassnames =
  'min-w-full rounded-200 inline-flex items-center justify-center'
