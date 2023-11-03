import { ComponentPropsWithoutRef } from 'react'

type HeaderProps = ComponentPropsWithoutRef<'div'>

const Header = ({ children }: HeaderProps) => {
  return <div>{children}</div>
}

export default Header
