import { ComponentPropsWithoutRef } from 'react'

type HeaderProps = ComponentPropsWithoutRef<'div'>

const Header = (props: HeaderProps) => {
  return <div {...props} />
}

export default Header
