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
  title: 'Chips/Dropdown Chip Multi Select',
  component: Chip,
  parameters: {},
  args: {
    label: 'Dropdown Chip Multi Select',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    label: {
      name: 'defaultOption',
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
    onSelectionChange: { action: 'onChange' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const DropdownChipMultiSelect: Story = {
  args: {
    options: [
      { value: '1', label: 'Sample Item 1' },
      { value: '2', label: 'Sample Item 2' },
      {
        value: '3',
        label: 'Sample Item 3 - which is disabled',
        disabled: true,
      },
      { value: '4', label: 'Sample Item 4' },
    ],
  },
}
