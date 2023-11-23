import { ExcludeAllNull, QuillIconComponent } from 'types'
import { VariantProps } from 'class-variance-authority'
import { ComponentProps } from 'react'
import { tabVariants } from './tab.classnames'

export type TabTriggerProps = ComponentProps<'button'> &
  ExcludeAllNull<VariantProps<typeof tabVariants>> & {
    icon?: QuillIconComponent
    onClick?: () => void
    isActive?: boolean
    colorStyle?: any
    variant?: any
  }

export type TabSize = NonNullable<TabTriggerProps['size']>
