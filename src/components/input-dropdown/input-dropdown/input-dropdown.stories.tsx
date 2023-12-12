import {
  StandaloneCircleCheckBoldIcon,
  StandalonePlaceholderRegularIcon,
} from '@deriv/quill-icons/Standalone'
import InputDropDown from '.'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Inputs/Input Dropdown',
  component: InputDropDown,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof InputDropDown>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultInputDropDown: Story = {
  args: {
    defaultOption: { value: '', label: 'Dropdown Chip Single Select' },
    icon: StandalonePlaceholderRegularIcon,
    statusIcon: StandaloneCircleCheckBoldIcon,
    options: [
      { value: '1', label: 'Sample Item 1' },
      { value: '3', label: 'Sample Item 3' },
      { value: '4', label: 'Sample Item 4' },
    ],
  },
}
