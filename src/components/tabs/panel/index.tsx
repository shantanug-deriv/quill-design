import { ComponentProps, useContext } from 'react'
import { TabContext } from '../container'
// import { cn } from 'Utils/cn';

type PaneProps = ComponentProps<'div'>

export const TabPanel = ({ children, className, id }: PaneProps) => {
  const { activeTab } = useContext(TabContext)

  return (
    <div
      role="tabpanel"
      id={`${id}-panel`}
      aria-labelledby={`${id}-trigger-${activeTab}`}
    >
      {children}
    </div>
  )
}

TabPanel.displayName = 'TabPanel'
