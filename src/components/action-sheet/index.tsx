import { ReactNode } from 'react'
import ActionSheetRoot from './root'
import ActionSheetHeader from './header'
import ActionSheetContent from './content'
import ActionSheetFooter from './footer'
import ActionSheetHandleBar from './handle-bar'

type ActionSheetType = {
  Root: typeof ActionSheetRoot
  Header: typeof ActionSheetHeader
  Content: typeof ActionSheetContent
  Footer: typeof ActionSheetFooter
  HandleBar: typeof ActionSheetHandleBar
}

const ActionSheet: ActionSheetType = ({
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

export default ActionSheet
