/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentProps, useState } from 'react'
import { IllustrativeCloseAccountIcon } from '@deriv/quill-icons'
import ActionSheet from '..'

const ActionSheetExample = ({
  show: _show,
  onClose: _onClose,
  primaryAction,
  secondaryAction,
  alignment,
  ...props
}: ComponentProps<typeof ActionSheet.Root> &
  ComponentProps<typeof ActionSheet.Footer>) => {
  const [show, setShow] = useState(false)
  const handleToggle = () => {
    setShow((prev) => !prev)
  }
  return (
    <>
      <div className="h-[600px] min-w-[360px] max-w-full md:w-[700px]">
        <button onClick={handleToggle}>Show Action Sheet</button>
        <ActionSheet.Root show={show} onClose={handleToggle} {...props}>
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
            primaryAction={primaryAction}
            secondaryAction={secondaryAction}
            alignment={alignment}
          />
        </ActionSheet.Root>
      </div>
    </>
  )
}

export default ActionSheetExample
