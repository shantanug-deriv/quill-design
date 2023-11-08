import { cva } from 'class-variance-authority'

export const basecva = cva(
  'rounded-pill inline-flex items-center justify-center font-bold text-solid-slate-50 text-center',
  {
    variants: {
      size: {
        sm: 'px-[5px] min-h-[8px] min-w-[8px] text-caption',
        md: 'px-[7px] min-h-[16px] min-w-[16px] text-body-sm',
        lg: 'px-[10.5px] min-h-[24px] min-w-[24px] text-body-md',
      },
      colorStyle: {
        success: 'bg-solid-green-700',
        warning: 'bg-solid-yellow-700',
        danger: ' bg-solid-red-700',
      },
    },
    defaultVariants: {
      size: 'md',
      colorStyle: 'success',
    },
  },
)
