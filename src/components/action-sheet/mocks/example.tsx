/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentProps, useState } from 'react'
import { StandaloneXmarkRegularIcon } from '@deriv/quill-icons/Standalone'
import ActionSheet from '..'
import Button from 'components/button'

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
      <Button onClick={handleToggle}>Click here</Button>
      <ActionSheet.Root show={show} onClose={handleToggle} {...props}>
        <ActionSheet.Header className="py-400 text-center">
          <div className="relative py-1100">
            <h3 className="ml-auto">Title</h3>
            <button
              aria-label="close"
              className="absolute right-50 top-1/2 -translate-y-800"
              onClick={handleToggle}
            >
              <StandaloneXmarkRegularIcon />
            </button>
          </div>
          <p>Description</p>
        </ActionSheet.Header>
        <ActionSheet.Content className="flex flex-col gap-500 py-800">
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
    </>
  )
}

export default ActionSheetExample
