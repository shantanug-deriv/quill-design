type BoxElements = GenericElements<'section' | 'div' | 'article'>

type BoxAsProp<T> = AsProp<T, BoxElements>

type BoxProps<T extends keyof BoxElements = 'div'> = BoxAsProp<T> &
  UnionToIntersection<BoxElements[T]>

export const Box = <T extends keyof BoxElements = 'div'>({
  as,
  ...rest
}: BoxProps<T>) => {
  // @ts-ignore YOLO
  const Component = as || 'div'
  return <Component {...rest} />
}

export default Box
