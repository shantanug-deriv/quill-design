import type { Meta, StoryObj } from '@storybook/react'
import Link from '.'
const meta = {
  title: 'Links/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const BlackLink: Story = {
  args: {
    children: ' Black Link',
    size: 'md',
    colorStyle: 'black',
    disabled: false,
  },
}

export const WhiteLink: Story = {
  args: {
    children: ' White Link',
    size: 'md',
    colorStyle: 'white',
    disabled: false,
  },
}
