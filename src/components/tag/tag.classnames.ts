import { TagType, TagSize, TagVariant } from '.'
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
  [key in TagType]: {
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

export const TagSizes: Record<TagSize, string> = {
  xs: 'px-200 py-100 text-50 gap-x-200',
  sm: 'px-400 py-[3px] text-50 gap-x-400',
  md: 'px-600 py-[5px] text-75 gap-x-600',
  lg: 'px-800 py-600 text-100 gap-x-800',
}

type TagIcons = {
  [key in TagType]: {
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

export const TagIconColors: Record<TagType, string> = {
  error: 'fill-status-danger',
  warning: 'fill-status-warning',
  success: 'fill-status-success',
  info: 'fill-status-info',
}

export const TagBaseClassnames =
  'min-w-full rounded-200 inline-flex items-center justify-center'
