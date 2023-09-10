declare module '*.module.scss'

declare type UnionToIntersection<U> = (
  U extends unknown ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never

declare type AsProp<T, P> = T extends keyof P
  ? { as?: T; className?: string }
  : never
declare type GenericElements<T extends keyof JSX.IntrinsicElements> = Pick<
  JSX.IntrinsicElements,
  T
>
