import { Meta, StoryObj } from '@storybook/react'
import TextField from '.'
import { StandaloneCircleCheckBoldIcon } from '@deriv/quill-icons/Standalone'

const meta = {
  title: 'Inputs/Text Field',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
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
    statusIcon: {
      table: {
        disable: true,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultTextField: Story = {
  args: {
    placeholder: 'Placeholder',
  },
}
export const DisabledTextFieldOutline: Story = {
  args: {
    placeholder: 'Placeholder',
    disabled: true,
    variant: 'outline',
  },
}
export const DisabledTextFieldFill: Story = {
  args: {
    placeholder: 'Placeholder',
    disabled: true,
    variant: 'fill',
  },
}
export const SuccessTextFieldOutline: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'outline',
    status: 'success',
  },
}
export const ErrorTextFieldOutline: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'outline',
    status: 'error',
  },
}

export const TextFieldWithLabel: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Label',
  },
}

export const SuccessStatusIconTextField: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'outline',
    status: 'success',
    statusIcon: StandaloneCircleCheckBoldIcon,
  },
  argTypes: {
    status: {
      table: {
        disable: true,
      },
    },
  },
}

export const StatusMessageTextField: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'outline',
    status: 'success',
    leftStatusMessage: 'Message goes here',
  },
}
