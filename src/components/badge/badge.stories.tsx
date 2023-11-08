import type { Meta, StoryObj } from '@storybook/react'
import Badge from '.'
const meta = {
  title: 'Badges/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const SuccessBadge: Story = {
  args: {
    children: '1',
    size: 'sm',
    colorStyle: 'success',
  },
}
export const warningBadge: Story = {
  args: {
    children: '2',
    size: 'md',
    colorStyle: 'warning',
  },
}
export const DangerBadge: Story = {
  args: {
    children: '3',
    size: 'lg',
    colorStyle: 'danger',
  },
}
