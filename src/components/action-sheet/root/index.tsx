import { useState, createContext } from 'react'
import { RootProps } from '../types'

type ActionSheetContextType = RootProps & {
  handleToggle?: () => void
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
  const handleToggle = () => {
    setShow((prev) => !prev)
  }

  return (
    <ActionSheetContext.Provider
      value={{ show, handleToggle, position, type, expandable, className }}
    >
      {children}
    </ActionSheetContext.Provider>
  )
}

export default Root
