export type Theme = 'dark' | 'light'

export type UnionToIntersection<U> = (
  U extends unknown ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never

export type AsProp<T, P> = T extends keyof P
  ? { as?: T; className?: string }
  : never
export type GenericElements<T extends keyof JSX.IntrinsicElements> = Pick<
  JSX.IntrinsicElements,
  T
>
