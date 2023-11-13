import { createContext } from 'react'

export type ScreenContextValue = {
  isXs: boolean
  isSm: boolean
  isMd: boolean
  isLg: boolean
  isXl: boolean
  isXXl: boolean
}

export const ScreenContext = createContext<ScreenContextValue>({
  isXs: false,
  isSm: false,
  isMd: false,
  isLg: false,
  isXl: false,
  isXXl: false,
})

export default ScreenContext
