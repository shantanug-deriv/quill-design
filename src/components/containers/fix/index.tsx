import clsx from 'clsx'
import { HtmlHTMLAttributes } from 'react'

export const FixContainer = ({
  children,
  className,
  ...rest
}: HtmlHTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={clsx('w-full', className)} {...rest}>
      {children}
    </div>
  )
}

export default FixContainer
