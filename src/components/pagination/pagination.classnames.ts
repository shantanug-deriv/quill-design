import { cva } from 'class-variance-authority'

const paginationBaseClass =
  'focus-visible:outline-offset-2 focus-visible:outline-solid-blue-700 disabled:pointer-events-none flex items-center justify-center group'

export const paginationVariants = cva(paginationBaseClass, {
  variants: {
    variant: {
      number:
        'h-1600 w-1600 rounded-200 hover:bg-opacity-black-100 active:bg-opacity-black-200 data-[state=selected]:bg-solid-slate-1400 data-[state=selected]:hover:bg-solid-slate-1400',
      bullet: 'rounded-pill',
    },
    selected: {
      true: '',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'number',
  },
})
