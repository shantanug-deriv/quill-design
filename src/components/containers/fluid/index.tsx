import qtMerge from 'qtMerge'
import { HtmlHTMLAttributes } from 'react'

export const FluidContainer = ({
  className,
  ...rest
}: HtmlHTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={qtMerge(
        'xl:px-0 mx-auto w-full max-w-screen-xl bg-background-primary-container px-general-lg md:px-general-xl',
        className,
      )}
      {...rest}
    />
  )
}
export default FluidContainer
