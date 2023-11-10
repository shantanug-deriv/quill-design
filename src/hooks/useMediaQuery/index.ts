import { useWindowSize } from 'usehooks-ts'
import QuillTailwindConfig from '../../../quill-tailwind/tailwind.config.cjs'

export const useMediaQuery = () => {
  const { width } = useWindowSize()

  const isMobile = width < QuillTailwindConfig.screens.sm
  const isTablet =
    width >= QuillTailwindConfig.screens.sm &&
    width < QuillTailwindConfig.screens.lg
  const isDesktop = width >= QuillTailwindConfig.screens.lg

  return {
    isMobile,
    isTablet,
    isDesktop,
  }
}

export default useMediaQuery
