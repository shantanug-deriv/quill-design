import type { Meta, StoryObj } from '@storybook/react'
import Chip from '.'
import {
  LabelPairedCircleInfoBoldIcon,
  LabelPairedAndroidIcon,
  LabelPairedAppleIcon,
} from '@deriv/quill-icons'

const icons: Record<string, object | null> = {
  sample_1: LabelPairedCircleInfoBoldIcon,
  sample_2: LabelPairedAndroidIcon,
  sample_3: LabelPairedAppleIcon,
  none: null,
}

const meta = {
  title: 'Chips/Dismissible Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Dismissible Chip',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    children: {
      name: 'children',
      control: 'text',
    },
    icon: {
      description: 'Icon to display on the left side of the chip',
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
      },
    },
    onDismiss: {
      description: 'Handler to be called when the chip is dismissed',
      control: false,
      action: 'onDismiss',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const DismissibleChip: Story = {}
