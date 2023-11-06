import { ReactNode } from 'react'
import ActionSheetRoot from './root'
import ActionSheetHeader from './header'
import ActionSheetContent from './content'
import ActionSheetFooter from './footer'

type ActionSheetType = {
  Root: typeof ActionSheetRoot
  Header: typeof ActionSheetHeader
  Content: typeof ActionSheetContent
  Footer: typeof ActionSheetFooter
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

export default ActionSheet
