import { ComponentProps } from 'react'
import { Tab } from '../tab'
import { TabContainer } from '../container'
import { TabContent, TabList, TabPanel } from '..'

const MockTab = ({
  disabled,
  size,
  iconPosition,
  ...props
}: ComponentProps<typeof Tab>) => {
  return (
    <TabContainer id="test" size={size} iconPosition={iconPosition}>
      <TabList>
        <Tab {...props}>Forex</Tab>
        <Tab {...props}>Derived Indices</Tab>
        <Tab disabled={true} {...props}>
          Stocks
        </Tab>
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
