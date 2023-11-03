import { ComponentPropsWithoutRef } from 'react'

type BodyProps = ComponentPropsWithoutRef<'div'>

const Body = ({ children }: BodyProps) => {
  return <div>{children}</div>
}

export default Body
