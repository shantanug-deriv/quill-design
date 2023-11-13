import ScreenContext from 'contexts/screen'
import { useContext } from 'react'

export const useScreen = () => {
  const screens = useContext(ScreenContext)
  return screens
}

export default useScreen
