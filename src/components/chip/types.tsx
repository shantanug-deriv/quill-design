import { QuillSvgProps } from '@deriv/quill-icons'
import { ButtonHTMLAttributes } from 'react'

export type ChipSize = 'sm' | 'md' | 'lg'

export interface BaseChipProps {
  icon?: React.ForwardRefExoticComponent<Omit<QuillSvgProps, 'ref'>>
  labelTag?: string
  size?: ChipSize
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
  label: React.ReactNode | string
  disabled?: boolean
}

export interface SingleSelectChipProps extends BaseChipProps {
  options: TSingleSelectItem[]
  defaultOption: TSingleSelectItem
  onChange: (item: TSingleSelectItem) => void
}

export interface MultiSelectChipProps extends BaseChipProps {
  options: TSingleSelectItem[]
  label: string
  onChange: (item: TSingleSelectItem[]) => void
}
