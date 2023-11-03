import qtMerge from 'qtMerge'
import Content from './content'
import Footer from './footer'
import Header from './header'

const ActionSheet = () => {
  return (
    <div
      className={qtMerge(
        'h-auto w-full rounded-t-800 bg-background-dialog px-800 pb-800',
      )}
    >
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </div>
  )
}

export default ActionSheet
