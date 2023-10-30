import type { Meta, StoryObj } from '@storybook/react'
import Tag from '.'
const meta = {
  title: 'Tags/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

const Caption = 'Label'

export const ErrorTagFill: Story = {
  args: {
    caption: Caption,
    type: 'error',
    size: 'sm',
    variant: 'fill',
  },
}

export const WarningTagFill: Story = {
  args: {
    caption: Caption,
    type: 'warning',
    size: 'sm',
    variant: 'fill',
  },
}

export const SuccessTagFill: Story = {
  args: {
    caption: Caption,
    type: 'success',
    size: 'sm',
    variant: 'fill',
  },
}

export const InfoTagFill: Story = {
  args: {
    caption: Caption,
    type: 'info',
    size: 'sm',
    variant: 'fill',
  },
}

export const ErrorTagOutline: Story = {
  args: {
    caption: Caption,
    type: 'error',
    size: 'sm',
    variant: 'outline',
  },
}

export const WarningTagOutline: Story = {
  args: {
    caption: Caption,
    type: 'warning',
    size: 'sm',
    variant: 'outline',
  },
}

export const SuccessTagOutline: Story = {
  args: {
    caption: Caption,
    type: 'success',
    size: 'sm',
    variant: 'outline',
  },
}

export const InfoTagOutline: Story = {
  args: {
    caption: Caption,
    type: 'info',
    size: 'sm',
    variant: 'outline',
  },
}
