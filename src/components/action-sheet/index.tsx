import { ReactNode, useContext } from 'react'
import ActionSheetRoot, { ActionSheetContext } from './root'
import ActionSheetHeader from './header'
import ActionSheetContent from './content'
import ActionSheetFooter from './footer'
import ActionSheetHandleBar from './handle-bar'
import ActionSheetTrigger from './trigger'
import ActionSheetPortal from './portal'
import ActionSheetClose from './close'

type ActionSheetType = {
  Root: typeof ActionSheetRoot
  Header: typeof ActionSheetHeader
  Content: typeof ActionSheetContent
  Footer: typeof ActionSheetFooter
  HandleBar: typeof ActionSheetHandleBar
  Trigger: typeof ActionSheetTrigger
  Portal: typeof ActionSheetPortal
  Close: typeof ActionSheetClose
}

export const ActionSheet: ActionSheetType = ({
  children,
}: {
  children: ReactNode
}) => {
  return <>{children}</>
}

ActionSheet.Root = ActionSheetRoot
ActionSheet.Header = ActionSheetHeader
ActionSheet.Content = ActionSheetContent
ActionSheet.Footer = ActionSheetFooter
ActionSheet.HandleBar = ActionSheetHandleBar
ActionSheet.Trigger = ActionSheetTrigger
ActionSheet.Portal = ActionSheetPortal
ActionSheet.Close = ActionSheetClose

// Action Sheet Context Consumer hooks

export const useActionSheet = () => useContext(ActionSheetContext)

export default ActionSheet
