import { ComponentPropsWithoutRef } from 'react'

type ContentProps = ComponentPropsWithoutRef<'div'>

const Content = ({ children }: ContentProps) => {
  return <div>{children}</div>
}

export default Content
