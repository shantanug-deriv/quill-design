import qtMerge from 'qtMerge'
import { type HtmlHTMLAttributes } from 'react'

export const FluidContainer = ({
  className,
  ...rest
}: HtmlHTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={qtMerge(
        'mx-auto w-full max-w-[1232px] bg-background-primary-container px-general-md 2xl:px-general-none',
        className,
      )}
      {...rest}
    />
  )
}
export default FluidContainer
