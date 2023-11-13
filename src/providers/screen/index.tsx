import { useMediaQuery } from 'usehooks-ts'
import QuillTailwindConfig from '../../../quill-tailwind/tailwind.config.cjs'
import ScreenContext, { ScreenContextValue } from 'contexts/screen'
import { useMemo } from 'react'

const screens = QuillTailwindConfig!.theme!.screens as Record<string, string>

export interface ScreenProviderProps {
  children: React.ReactNode
}

export const ScreenProvider = ({ children }: ScreenProviderProps) => {
  const isXs = useMediaQuery('(max-width: 639px)')
  const isSm = useMediaQuery(`(min-width: ${screens.sm})`)
  const isMd = useMediaQuery(`(min-width: ${screens.md})`)
  const isLg = useMediaQuery(`(min-width: ${screens.lg})`)
  const isXl = useMediaQuery(`(min-width: ${screens.xl})`)
  const isXXl = useMediaQuery(`(min-width: ${screens['2xl']})`)

  const value: ScreenContextValue = useMemo(() => {
    return {
      isXs,
      isSm,
      isMd,
      isLg,
      isXl,
      isXXl,
    }
  }, [isLg, isMd, isSm, isXXl, isXl, isXs])

  return (
    <ScreenContext.Provider value={value}>{children}</ScreenContext.Provider>
  )
}
