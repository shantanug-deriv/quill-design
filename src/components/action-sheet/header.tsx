import { ComponentPropsWithoutRef, ForwardRefExoticComponent } from 'react'
import { QuillSvgProps } from '@deriv/quill-icons'

type HeaderProps = ComponentPropsWithoutRef<'div'> & {
  title?: string
  icon?: ForwardRefExoticComponent<Omit<QuillSvgProps, 'ref'>>
  description?: string
}

const Header = ({ children }: HeaderProps) => {
  return <div>{children}</div>
}

export default Header
