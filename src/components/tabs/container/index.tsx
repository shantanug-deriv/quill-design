import { ComponentProps, ReactNode, createContext, useState } from 'react'

export type TabProps = ComponentProps<'div'> & {
  id: string
}

type TabContextType = TabProps & {
  handleToggle?: (idx: number) => void
  activeTab: number
}

export const TabContext = createContext<TabContextType>({
  activeTab: 0,
  id: 'example-tab',
})

export const TabContainer = ({ children, id }: TabProps) => {
  const [activeTab, setActiveTab] = useState(0)
  const handleToggle = (index: number) => {
    setActiveTab(index)
  }

  return (
    <TabContext.Provider value={{ activeTab, handleToggle, id }}>
      <div>{children}</div>
    </TabContext.Provider>
  )
}
