import { useState, createContext } from 'react'
import { RootProps } from '../types'

type ActionSheetContextType = RootProps & {
  handleOpen?: () => void
  handleClose?: () => void
}

export const ActionSheetContext = createContext<ActionSheetContextType>({
  show: false,
})

const Root = ({
  children,
  className,
  position,
  type = 'modal',
  expandable = true,
}: RootProps) => {
  const [show, setShow] = useState(false)

  const handleOpen = () => {
    setShow(true)
    document.body.style.overflow = 'hidden'
  }

  const handleClose = () => {
    setShow(false)
    document.body.style.overflow = 'auto'
  }

  return (
    <ActionSheetContext.Provider
      value={{
        show,
        handleOpen,
        handleClose,
        position,
        type,
        expandable,
        className,
      }}
    >
      {children}
    </ActionSheetContext.Provider>
  )
}

export default Root
