import clsx from 'clsx'
import { ComponentPropsWithRef, forwardRef } from 'react'

export const FluidContainer = forwardRef<
  HTMLDivElement,
  ComponentPropsWithRef<'div'>
>(({ children, className, ...rest }, ref) => {
  return (
    <div
      ref={ref}
      className={clsx('mx-auto w-full max-w-screen-lg', className)}
      {...rest}
    >
      {children}
    </div>
  )
})
FluidContainer.displayName = 'FluidContainer'

export default FluidContainer
