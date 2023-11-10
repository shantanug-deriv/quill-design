import { cva } from 'class-variance-authority'

export const linkCva = cva('', {
  variants: {
    colorStyle: {
      black: ['text-solid-slate-1400', 'hover:underline', 'active:underline'],
      white: ['text-solid-slate-50', 'hover:underline', 'active:underline'],
    },
    size: {
      caption: 'p-400 text-50',
      sm: 'p-400 text-50',
      md: 'p-600 text-75',
      lg: 'p-800 text-100',
      xl: 'p-1200 text-300',
    },
    disabled: {
      true: 'opacity-300 cursor-none pointer-events-none',
    },
  },
})
