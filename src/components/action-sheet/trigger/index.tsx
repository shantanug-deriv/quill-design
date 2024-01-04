import { ComponentProps, useContext } from 'react'
import { Button } from '../../button'
import { ActionSheetContext } from '../root'
import { QuillIconComponent } from 'types'

type TriggerProps = ComponentProps<typeof Button> & {
  iconComponent?: QuillIconComponent
}

const Trigger = ({ iconComponent: Icon, ...restProps }: TriggerProps) => {
  const { handleOpen } = useContext(ActionSheetContext)
  if (Icon) {
    return (
      <button onClick={handleOpen} {...restProps}>
        <Icon data-testid="dt-actionsheet-icon-button" />
      </button>
    )
  }
  return <Button onClick={handleOpen} {...restProps} />
}

Trigger.displayName = 'Trigger'

export default Trigger
