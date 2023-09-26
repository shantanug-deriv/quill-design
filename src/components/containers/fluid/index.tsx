import qtMerge from 'qtMerge'
import { HtmlHTMLAttributes } from 'react'

export const FluidContainer = ({
  className,
  ...rest
}: HtmlHTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={qtMerge(
        'xl:px-0 max-w-screen-xl mx-auto w-full bg-solid-red-900 px-general-lg md:px-general-xl',
        className,
      )}
      {...rest}
    />
  )
}
export default FluidContainer
