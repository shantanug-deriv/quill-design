import { ComponentProps, useContext } from 'react'
import { Button } from '../../button'
import { ActionSheetContext } from '../root'

type TriggerProps = ComponentProps<typeof Button>

const Trigger = (props: TriggerProps) => {
  const { handleToggle } = useContext(ActionSheetContext)
  return <Button onClick={handleToggle} {...props} />
}

Trigger.displayName = 'Trigger'

export default Trigger
