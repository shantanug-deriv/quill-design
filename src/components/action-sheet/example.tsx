import { useState } from 'react'
import { IllustrativeCloseAccountIcon } from '@deriv/quill-icons'
import ActionSheet from '.'

const ActionSheetExample = () => {
  const [show, setShow] = useState(true)
  const handleToggle = () => {
    setShow((prev) => !prev)
  }
  return (
    <>
      <button onClick={handleToggle}>Show Action Sheet</button>
      <div className="h-[600px] w-[700px] max-w-full">
        <ActionSheet.Root
          className="max-w-sm"
          show={show}
          onClose={handleToggle}
        >
          <ActionSheet.Header>
            <div>
              <h3>Title</h3>
              <IllustrativeCloseAccountIcon />
            </div>
            <p>Description</p>
          </ActionSheet.Header>
          <ActionSheet.Content>
            <p>
              Bottom sheet is a surface fixed at the bottom of the screen which
              includes content related to the previous screen.
            </p>
            <p>
              Bottom sheet is a surface fixed at the bottom of the screen which
              includes content related to the previous screen.
            </p>
            <p>
              Bottom sheet is a surface fixed at the bottom of the screen which
              includes content related to the previous screen.
            </p>
            <p>
              Bottom sheet is a surface fixed at the bottom of the screen which
              includes content related to the previous screen.
            </p>
          </ActionSheet.Content>
          <ActionSheet.Footer
            primaryAction={{ content: 'Primary Action', onAction: () => null }}
            secondaryAction={{
              content: 'Secondary Action',
              onAction: () => null,
            }}
          />
        </ActionSheet.Root>
      </div>
    </>
  )
}

export default ActionSheetExample
