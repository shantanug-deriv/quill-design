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

export const PrimaryBlack: Story = {
  args: {
    children: 'Primary Black Link',
    size: 'md',
    variant: 'primary',
    colorStyle: 'black',
    disabled: false,
  },
}

export const PrimaryWhite: Story = {
  args: {
    children: 'Primary White Link',
    size: 'md',
    variant: 'primary',
    colorStyle: 'white',
    disabled: false,
  },
}

export const SecondaryBlack: Story = {
  args: {
    children: 'Secondary Black Link',
    size: 'md',
    variant: 'secondary',
    colorStyle: 'black',
    disabled: false,
  },
}

export const SecondaryWhite: Story = {
  args: {
    children: 'Secondary White Link',
    size: 'md',
    variant: 'secondary',
    colorStyle: 'white',
    disabled: false,
  },
}
