import { createContext } from 'react'

export type BreakpointContextValue = {
  isXs: boolean
  isSm: boolean
  isMd: boolean
  isLg: boolean
  isXl: boolean
  isXXl: boolean
}

export const BreakpointContext = createContext<BreakpointContextValue>({
  isXs: false,
  isSm: false,
  isMd: false,
  isLg: false,
  isXl: false,
  isXXl: false,
})

export default BreakpointContext
