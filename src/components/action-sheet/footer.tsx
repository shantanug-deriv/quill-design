import { ComponentPropsWithoutRef } from 'react'
import qtMerge from 'qtMerge'
import { Button } from '../button'

type ActionType = {
  content: string
  onAction: () => void
}

type FooterProps = ComponentPropsWithoutRef<'div'> & {
  primaryAction?: ActionType
  secondaryAction?: ActionType
  alignment?: 'vertical' | 'horizontal'
}

const Footer = ({
  primaryAction,
  secondaryAction,
  alignment = 'vertical',
}: FooterProps) => {
  return (
    <div
      className={qtMerge(
        'flex gap-400 pt-800 md:mt-auto',
        alignment === 'vertical' && 'flex-col',
        alignment === 'horizontal' && 'flex-row',
      )}
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
