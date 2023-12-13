import { ComponentProps, useContext } from 'react'
import { Button } from '../../button'
import { ActionSheetContext } from '../root'

type TriggerProps = ComponentProps<typeof Button>

const Trigger = (props: TriggerProps) => {
  const { handleOpen } = useContext(ActionSheetContext)
  return <Button onClick={handleOpen} {...props} />
}

Trigger.displayName = 'Trigger'

export default Trigger
