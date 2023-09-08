import type { Meta, StoryObj } from '@storybook/react'
import H7 from '.'

const meta = {
  title: 'Typography/Heading/h7',
  component: H7,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
  },
} satisfies Meta<typeof H7>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'This is H7 Heading',
  },
}
