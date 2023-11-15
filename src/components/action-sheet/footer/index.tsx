import qtMerge from 'qtMerge'
import { actionSheetFooterCVA } from '../action-sheet.classnames'
import { FooterProps } from '../types'
import Button from '../../button/basic'

const Footer = ({
  primaryAction,
  secondaryAction,
  alignment,
  className,
  ...restProps
}: FooterProps) => {
  if (!primaryAction && !secondaryAction) return null
  return (
    <div
      className={qtMerge(actionSheetFooterCVA({ alignment, className }))}
      {...restProps}
    >
      {primaryAction && (
        <Button
          onClick={primaryAction.onAction}
          colorStyle="black"
          size="lg"
          fullWidth
        >
          {primaryAction.content}
        </Button>
      )}
      {secondaryAction && (
        <Button
          onClick={secondaryAction.onAction}
          variant="secondary"
          colorStyle="black"
          size="lg"
          fullWidth
        >
          {secondaryAction.content}
        </Button>
      )}
    </div>
  )
}

export default Footer
