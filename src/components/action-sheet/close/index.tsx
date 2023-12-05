import { ComponentProps, useContext } from 'react'
import qtMerge from 'qtMerge'
import { ActionSheetContext } from '../root'

type CloseProps = ComponentProps<'button'>

const Close = ({ className, ...restProps }: CloseProps) => {
  const { handleClose } = useContext(ActionSheetContext)
  return (
    <button
      className={qtMerge(
        'pointer-events-auto absolute right-50 top-800 z-20 hidden cursor-pointer lg:block',
        className,
      )}
      onClick={handleClose}
      {...restProps}
    />
  )
}

Close.displayName = 'Close'

export default Close
