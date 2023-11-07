import { ChipSize } from './types'
import { cva } from 'class-variance-authority'

export const chipBaseVariant = cva('chipBaseClassnames', {
  variants: {
    size: {
      sm: ['px-600', 'py-[3px]', 'text-50', 'gap-x-400'],
      md: ['px-800', 'py-[5px]', 'text-75', 'gap-x-400'],
      lg: ['px-1200', 'py-[7px]', 'text-100', 'gap-x-400'],
    },
    dismissible: {
      true: ['cursor-default'],
      false: ['cursor-pointer'],
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const ChipIconSizes: Record<
  ChipSize,
  { width: number; height: number }
> = {
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

export const ChipStandaloneIconSizes: Record<
  ChipSize,
  { width: number; height: number }
> = {
  sm: {
    width: 22,
    height: 22,
  },
  md: {
    width: 24,
    height: 24,
  },
  lg: {
    width: 26,
    height: 26,
  },
}

export const chipBaseClassnames =
  'rounded-4800 hover:bg-opacity-black-100 hover:text-opacity-black-600 font-regular inline-flex items-center justify-center border-75 border-solid-slate-200 disabled:opacity-600'

export const chipSelectionClassnames =
  'data-[state=selected]:bg-solid-slate-1200 data-[state=selected]:fill-solid-slate-50 data-[state=selected]:text-solid-slate-50'

export const chipDropdownClassnames =
  'm-200 max-w-md border-75 border-solid-slate-75 bg-solid-slate-50 p-200 shadow-530'

export const chipDropdownMultiClassnames =
  'px-600 py-[3px] text-75 flex cursor-pointer items-center gap-x-400 rounded-600 p-600 hover:bg-opacity-black-100 hover:text-opacity-black-600'

export const chipDropdownSingleClassnames =
  'cursor-pointer rounded-600 px-600 py-300 hover:bg-opacity-black-100 hover:text-opacity-black-600'
