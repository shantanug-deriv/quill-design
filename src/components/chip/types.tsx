import { QuillSvgProps } from '@deriv/quill-icons'
import { ButtonHTMLAttributes } from 'react'
import { chipBaseVariant } from './chip.classnames'
import { type VariantProps } from 'class-variance-authority'

export type ChipSize = 'sm' | 'md' | 'lg'

export interface BaseChipProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Required<Pick<VariantProps<typeof chipBaseVariant>, 'size'>> {
  icon?: React.ForwardRefExoticComponent<Omit<QuillSvgProps, 'ref'>>
  labelTag?: string
  disabled?: boolean
}

export interface SelectableChipProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    BaseChipProps {
  dismissible?: boolean
  isDropdownOpen?: boolean
  dropdown?: boolean
  labelTag?: string
  onChipSelect?: (
    event: React.MouseEvent<HTMLButtonElement>,
    value: boolean,
  ) => void
  onDismiss?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
}

export interface DismissibleChipProps
  extends BaseChipProps,
    ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  onDismiss?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
}

export type TSingleSelectItem = {
  value: number | string
  label: React.ReactNode
  disabled?: boolean
}

export interface SingleSelectChipProps extends BaseChipProps {
  options: TSingleSelectItem[]
  defaultOption: TSingleSelectItem
  onSelectionChange: (item: TSingleSelectItem) => void
}

export interface MultiSelectChipProps extends BaseChipProps {
  options: TSingleSelectItem[]
  label: string
  onSelectionChange: (item: TSingleSelectItem[]) => void
}
