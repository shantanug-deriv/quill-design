import { ReactNode } from 'react'
import HeroHeading from './hero'
import H1 from './h1'
import H2 from './h2'
import H3 from './h3'
import H4 from './h4'
import H5 from './h5'
import H6 from './h6'
import H7 from './h7'

type HeadingVariants = {
  hero: typeof HeroHeading
  h1: typeof H1
  h2: typeof H2
  h3: typeof H3
  h4: typeof H4
  h5: typeof H5
  h6: typeof H6
  h7: typeof H7
}

export const Heading: HeadingVariants = ({
  children,
}: {
  children: ReactNode
}) => {
  return <>{children}</>
}

Heading.hero = HeroHeading
Heading.h1 = H1
Heading.h2 = H2
Heading.h3 = H3
Heading.h4 = H4
Heading.h5 = H5
Heading.h6 = H6
Heading.h7 = H7

export default Heading
