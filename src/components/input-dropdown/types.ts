import { QuillSvgProps } from '@deriv/quill-icons'
import { VariantProps } from 'class-variance-authority'
import { ForwardRefExoticComponent, SelectHTMLAttributes } from 'react'
import { ExcludeNullAndUndefined } from 'types'
import {
  baseInputVariants,
  baseInputWrapperVariants,
} from './base/base.classnames'

type baseInputWrapperVariantsExcludingNullAndUndefined =
  ExcludeNullAndUndefined<
    VariantProps<typeof baseInputWrapperVariants>,
    'size' | 'status' | 'variant'
  >

type baseInputVariantsExcludingNullAndUndefined = ExcludeNullAndUndefined<
  VariantProps<typeof baseInputVariants>,
  'alignment'
>

export type InputSize =
  baseInputWrapperVariantsExcludingNullAndUndefined['size']

export type InputStatus =
  baseInputWrapperVariantsExcludingNullAndUndefined['status']

export type InputVariant =
  baseInputWrapperVariantsExcludingNullAndUndefined['variant']

export type InputTextAlignment =
  baseInputVariantsExcludingNullAndUndefined['alignment']

export interface BaseSelectDropdownProps
  extends SelectHTMLAttributes<HTMLButtonElement> {
  icon?: ForwardRefExoticComponent<Omit<QuillSvgProps, 'ref'>>
  statusIcon?: ForwardRefExoticComponent<Omit<QuillSvgProps, 'ref'>>
  inputSize?: InputSize
  status?: InputStatus
  variant?: InputVariant
  statusMessage?: string
  textAlignment?: InputTextAlignment
  label?: string
  selected?: boolean
  name?: string
  isDropdownOpen?: boolean
  onInputSelect?: (
    event: React.MouseEvent<HTMLButtonElement>,
    value: boolean,
  ) => void
}

export type TSingleSelectItem = {
  value: number | string
  label: React.ReactNode
}

export interface SingleSelectProps extends BaseSelectDropdownProps {
  options: TSingleSelectItem[]
  defaultOption: TSingleSelectItem
  onSelectionChange: (item: TSingleSelectItem) => void
}
