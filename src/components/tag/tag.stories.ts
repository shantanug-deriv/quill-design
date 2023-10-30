import type { Meta, StoryObj } from '@storybook/react'
import Tag from '.'
const meta = {
  title: 'Tags/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Label',
    size: 'md',
    bold: false,
    type: 'error',
  },
  argTypes: {
    children: {
      name: 'Caption',
      control: 'text',
    },
    icon: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const ErrorTagFill: Story = {
  args: {
    type: 'error',
    variant: 'fill',
  },
}

export const WarningTagFill: Story = {
  args: {
    type: 'warning',
    variant: 'fill',
  },
}

export const SuccessTagFill: Story = {
  args: {
    type: 'success',
    variant: 'fill',
  },
}

export const InfoTagFill: Story = {
  args: {
    type: 'info',
    variant: 'fill',
  },
}

export const ErrorTagOutline: Story = {
  args: {
    type: 'error',
    variant: 'outline',
  },
}

export const WarningTagOutline: Story = {
  args: {
    type: 'warning',
    variant: 'outline',
  },
}

export const SuccessTagOutline: Story = {
  args: {
    type: 'success',
    variant: 'outline',
  },
}

export const InfoTagOutline: Story = {
  args: {
    type: 'info',
    variant: 'outline',
  },
}
