import type { Meta, StoryObj } from '@storybook/react'
import ActionSheet from '.'

const meta = {
  title: 'Action Sheet',
  component: ActionSheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { name: 'Text', control: 'text' },
  },
  args: {},
} satisfies Meta<typeof ActionSheet>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
