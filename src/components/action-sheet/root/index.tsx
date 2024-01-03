import { useState, createContext, useEffect, useCallback } from 'react'
import { RootProps } from '../types'

export type ActionSheetContextType = {
  handleOpen?: () => void
  handleClose?: () => void
}

export const ActionSheetContext = createContext<
  ActionSheetContextType & RootProps
>({
  show: false,
})

const Root = ({
  isOpen,
  children,
  className,
  position,
  type = 'modal',
  expandable = true,
  onOpen,
  onClose,
}: RootProps) => {
  const [show, setShow] = useState(isOpen)

  const handleOpen = () => {
    setShow(true)
    onOpen?.()
    document.body.style.overflow = 'hidden'
  }

  const handleClose = useCallback(() => {
    setShow(false)
    onClose?.()
    document.body.style.overflow = 'auto'
  }, [onClose])

  useEffect(() => {
    if (!isOpen) {
      handleClose()
    }
  }, [isOpen, handleClose])

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
