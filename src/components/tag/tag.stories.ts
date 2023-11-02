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
    bold: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const CustomTagFillWithIcon: Story = {
  args: {
    preset: 'custom',
    variant: 'fill',
    colorStyle: 'slate',
    icon: StandalonePlaceholderRegularIcon,
  },
}

export const CustomTagOutlineWithIcon: Story = {
  args: {
    preset: 'custom',
    variant: 'outline',
    colorStyle: 'slate',
    icon: StandalonePlaceholderRegularIcon,
  },
}

export const CustomTagFillWithoutIcon: Story = {
  args: {
    preset: 'custom',
    variant: 'fill',
    colorStyle: 'slate',
  },
}

export const CustomTagOutlineWithoutIcon: Story = {
  args: {
    preset: 'custom',
    variant: 'outline',
    colorStyle: 'slate',
  },
}

export const ErrorTagFill: Story = {
  args: {
    preset: 'error',
    variant: 'fill',
  },
}

export const WarningTagFill: Story = {
  args: {
    preset: 'warning',
    variant: 'fill',
  },
}

export const SuccessTagFill: Story = {
  args: {
    preset: 'success',
    variant: 'fill',
  },
}

export const InfoTagFill: Story = {
  args: {
    preset: 'info',
    variant: 'fill',
  },
}

export const ErrorTagOutline: Story = {
  args: {
    preset: 'error',
    variant: 'outline',
  },
}

export const WarningTagOutline: Story = {
  args: {
    preset: 'warning',
    variant: 'outline',
  },
}

export const SuccessTagOutline: Story = {
  args: {
    preset: 'success',
    variant: 'outline',
  },
}

export const InfoTagOutline: Story = {
  args: {
    preset: 'info',
    variant: 'outline',
  },
}
