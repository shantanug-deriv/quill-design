import clsx from 'clsx'

type SectionElements = GenericElements<'section' | 'div' | 'article'>

type SectionAsProp<T> = AsProp<T, SectionElements>

type SectionProps<T extends keyof SectionElements = 'section'> =
  SectionAsProp<T> & UnionToIntersection<SectionElements[T]>

export const Section = <T extends keyof SectionElements = 'section'>({
  as,
  className,
  ...rest
}: SectionProps<T>) => {
  const Component = as || 'section'
  return <Component className={clsx('w-full', className)} {...rest} />
}

export default Section
