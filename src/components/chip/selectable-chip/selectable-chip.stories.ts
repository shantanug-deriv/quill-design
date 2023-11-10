import type { Meta, StoryObj } from '@storybook/react'
import Chip from '.'
import {
  LabelPairedCircleInfoBoldIcon,
  LabelPairedAndroidIcon,
  LabelPairedAppleIcon,
} from '@deriv/quill-icons/LabelPaired'

const icons: Record<string, object | null> = {
  sample_1: LabelPairedCircleInfoBoldIcon,
  sample_2: LabelPairedAndroidIcon,
  sample_3: LabelPairedAppleIcon,
  none: null,
}

const meta = {
  title: 'Chips/Selectable Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
    controls: {
      exclude: [
        'dismissible',
        'onDismiss',
        'isDropdownOpen',
        'dropdown',
        'dropdownItemSelected',
      ],
    },
  },
  args: {
    children: 'Selectable Chip',
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
    onChipSelect: { action: 'onChipSelect' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const SelectableChip: Story = {}
