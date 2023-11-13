import { AccordionProps } from '../types'

import Fill from '../fill'
import qtMerge from 'qtMerge'

export const Elevate = ({ className, ...otherProps }: AccordionProps) => {
  return (
    <Fill
      {...otherProps}
      className={qtMerge('shadow-330', className)}
      divider="none"
    />
  )
}

Elevate.displayName = 'AccordionElevate'

export default Elevate
