import { ComponentPropsWithoutRef } from 'react'
import { type VariantProps } from 'class-variance-authority'
import qtMerge from 'qtMerge'
import { Button } from '../button'
import { actionSheetFooterCVA } from './action-sheet.classnames'

type ActionType = {
  content: string
  onAction: () => void
}

type FooterProps = ComponentPropsWithoutRef<'div'> &
  VariantProps<typeof actionSheetFooterCVA> & {
    primaryAction?: ActionType
    secondaryAction?: ActionType
  }

const Footer = ({
  primaryAction,
  secondaryAction,
  alignment,
  className,
}: FooterProps) => {
  return (
    <div className={qtMerge(actionSheetFooterCVA({ alignment, className }))}>
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
