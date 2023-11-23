import React, { ComponentProps } from 'react'
import { Tab } from '../tab'
import { TabContainer } from '../container'
import { TabContent, TabList, TabPanel } from '..'

const MockTab = (props: ComponentProps<typeof Tab>) => {
  return (
    <TabContainer id="test">
      <TabList>
        <Tab {...props}>Forex</Tab>
        <Tab {...props}>Derived Indices</Tab>
        <Tab {...props}>Stocks</Tab>
      </TabList>
      <TabContent>
        <TabPanel>Forex Tab</TabPanel>
        <TabPanel>Derived indices Tab</TabPanel>
        <TabPanel>Stocks Tab</TabPanel>
      </TabContent>
    </TabContainer>
  )
}
export default MockTab
