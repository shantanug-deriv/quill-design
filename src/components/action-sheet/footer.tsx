import { ComponentPropsWithoutRef } from 'react'
import qtMerge from 'qtMerge'

type FooterProps = ComponentPropsWithoutRef<'div'>

const Footer = ({ children }: FooterProps) => {
  return <div className={qtMerge('flex')}>{children}</div>
}

export default Footer
