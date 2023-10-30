import { TagType, TagSize, TagVariant } from '.'
import {
  LabelPairedTriangleExclamationBoldIcon,
  LabelPairedCircleExclamationBoldIcon,
  LabelPairedCircleCheckBoldIcon,
  LabelPairedCircleInfoBoldIcon,
  QuillSvgProps,
} from '@deriv/quill-icons'

type TypeTagColor = {
  [key in TagType]: {
    [key in TagVariant]: string
  }
}

export const TagColors: TypeTagColor = {
  error: {
    fill: 'bg-solid-red-100 text-solid-red-800',
    outline: 'border-75 border-solid-red-700 text-solid-red-800',
  },
  warning: {
    fill: 'bg-solid-orange-100 text-solid-orange-800',
    outline: 'border-75 border-solid-orange-700 text-solid-orange-800',
  },
  info: {
    fill: 'bg-solid-blue-100 text-solid-blue-800',
    outline: 'border-75 border-solid-blue-700 text-solid-blue-800',
  },
  success: {
    fill: 'bg-solid-green-100 text-solid-green-800',
    outline: 'border-75 border-solid-green-700 text-solid-green-800',
  },
}

export const TagSizes: Record<TagSize, string> = {
  xs: 'px-200 py-100 text-50 gap-x-200',
  sm: 'px-400 py-[3px] text-50 gap-x-400',
  md: 'px-600 py-[5px] text-75 gap-x-600',
  lg: 'px-800 py-600 text-100 gap-x-800',
}

export const TagIcons: Record<
  TagType,
  React.ForwardRefExoticComponent<Omit<QuillSvgProps, 'ref'>>
> = {
  error: LabelPairedTriangleExclamationBoldIcon,
  warning: LabelPairedCircleExclamationBoldIcon,
  success: LabelPairedCircleCheckBoldIcon,
  info: LabelPairedCircleInfoBoldIcon,
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

export const TagIconColors: Record<TagType, string> = {
  error: 'fill-solid-red-800',
  warning: 'fill-solid-orange-800',
  success: 'fill-solid-green-800',
  info: 'fill-solid-blue-800',
}

export const tagBaseClassnames =
  'min-w-full rounded-200 inline-flex items-center justify-center'
