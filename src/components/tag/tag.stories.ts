import type { Meta, StoryObj } from '@storybook/react'
import { StandalonePlaceholderRegularIcon } from '@deriv/quill-icons'

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
  },
  argTypes: {
    children: {
      name: 'Label',
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

export const CustomTagFillWithIcon: Story = {
  args: {
    type: 'custom',
    variant: 'fill',
    color: 'slate',
    icon: StandalonePlaceholderRegularIcon,
  },
}

export const CustomTagOutlineWithIcon: Story = {
  args: {
    type: 'custom',
    variant: 'outline',
    color: 'slate',
    icon: StandalonePlaceholderRegularIcon,
  },
}

export const CustomTagFillWithoutIcon: Story = {
  args: {
    type: 'custom',
    variant: 'fill',
    color: 'slate',
  },
}

export const CustomTagOutlineWithoutIcon: Story = {
  args: {
    type: 'custom',
    variant: 'outline',
    color: 'slate',
  },
}

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
