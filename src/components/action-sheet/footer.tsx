import { ComponentPropsWithoutRef } from 'react'

type FooterProps = ComponentPropsWithoutRef<'div'>

const Footer = ({ children }: FooterProps) => {
  return <div>{children}</div>
}

export default Footer
