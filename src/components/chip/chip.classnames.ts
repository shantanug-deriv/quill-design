import { ChipSize } from './types'
import { cva } from 'class-variance-authority'

export const chipBaseVariant = cva('', {
  variants: {
    size: {
      sm: ['px-600', 'py-[3px]', 'text-50', 'gap-x-400', 'max-h-1200'],
      md: ['px-800', 'py-[5px]', 'text-75', 'gap-x-400', 'max-h-1600'],
      lg: ['px-1200', 'py-[7px]', 'text-100', 'gap-x-400', 'max-h-2400'],
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
  'disabled:bg-opacity-black-0 text-opacity-black-600 disabled:text-opacity-black-300 disabled:fill-opacity-black-300 rounded-4800 font-regular inline-flex items-center justify-center border-75 border-solid-slate-200 data-[state=selected]:border-solid-slate-1200 enabled:hover:bg-opacity-black-100 enabled:hover:text-opacity-black-600 data-[state=selected]:enabled:bg-solid-slate-1200'

export const chipBaseTextColorClassnames =
  'data-[state=selected]:enabled:text-solid-slate-50 data-[state=selected]:enabled:fill-solid-slate-50'

export const chipDropdownPanelClassnames =
  'cursor-pointer absolute min-w-[350px] m-200 max-w-md border-75 border-solid-slate-75 bg-solid-slate-50 p-200 shadow-530'

export const chipDropdownMultiClassnames =
  'hover:bg-opacity-black-100 hover:text-opacity-black-600 px-600 py-[3px] text-75 flex  items-center gap-x-400 rounded-[8px] p-600 my-300'

export const chipDropdownSingleClassnames =
  'hover:bg-opacity-black-100 hover:text-opacity-black-600 rounded-[8px] px-600 py-300 my-300'
