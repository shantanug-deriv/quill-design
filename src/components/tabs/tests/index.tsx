import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TabContainer, TabList, TabContent, TabPanel, Tab } from '..'

describe('Tab component', () => {
  beforeEach(() => {
    render(
      <TabContainer id="test">
        <TabList>
          <Tab>Forex</Tab>
          <Tab>Derived Indices</Tab>
          <Tab>Stocks</Tab>
        </TabList>
      </TabContainer>,
    )
  })

  const tabs = screen.getAllByRole('tab')
  const forex_tab = screen.getByRole('tab', {
    name: 'Forex',
  })
  const derived_indices = screen.getByRole('tab', {
    name: 'Derived Indices',
  })
  const stocks = screen.getByRole('tab', {
    name: 'Stocks',
  })
  const tabPanel = screen.getAllByRole('tabpanel')

  it('Should render all tab components', async () => {
    expect(forex_tab).toBeInTheDocument()
    expect(derived_indices).toBeInTheDocument()
    expect(stocks).toBeInTheDocument()
  })

  it('Should set aria-selected to be true for the first tab initially', () => {
    expect(forex_tab).toHaveAttribute('aria-selected', 'true')
  })

  it('Should set aria-selected to be false for the non seleted tabs', () => {
    const nonSelectedTab = tabs.slice(1)

    nonSelectedTab.forEach((tab) => {
      expect(tab).toHaveAttribute('aria-selected', 'false')
    })
  })

  it('should render the first tab panel initially', () => {
    expect(tabPanel[0]).toHaveAttribute('aria-labelby', 'test-0-tab')
    expect(tabPanel).toHaveLength(1)
  })

  it('should change the active tab on click of non selected tabs', async () => {
    await userEvent.click(derived_indices)
    expect(derived_indices).toHaveAttribute('aria-selected', 'true')
    expect(forex_tab).toHaveAttribute('aria-selected', 'false')
    expect(tabPanel).toHaveAttribute('aria-labeledby', 'test-1-tab')
  })
})
