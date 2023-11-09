import { VariantProps } from 'class-variance-authority'
import { ComponentPropsWithoutRef } from 'react'
import { actionSheetFooterCVA } from './action-sheet.classnames'

type ActionType = {
  content: string
  onAction: () => void
}

export type FooterProps = ComponentPropsWithoutRef<'div'> &
  VariantProps<typeof actionSheetFooterCVA> & {
    primaryAction?: ActionType
    secondaryAction?: ActionType
  }

export type FooterAlignment = FooterProps['alignment']
