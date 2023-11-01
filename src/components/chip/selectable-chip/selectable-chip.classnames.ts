import { ChipSize } from '../types'

export const ChipSizes: Record<ChipSize, string> = {
  sm: 'rounded-4800 px-600 py-[3px] text-50 gap-x-400',
  md: 'rounded-4800 px-800 py-[5px] text-75 gap-x-600',
  lg: 'rounded-4800 px-1200 py-[7px] text-100 gap-x-800',
}

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
  'hover:bg-opacity-black-100 hover:text-opacity-black-600 font-regular inline-flex items-center justify-center border-75 border-solid-slate-200 disabled:opacity-600'

export const chipSelectedClassnames =
  'data-[state=selected]:bg-solid-slate-1200 data-[state=selected]:fill-solid-slate-50 data-[state=selected]:text-solid-slate-50'
