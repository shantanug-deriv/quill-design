import { Meta, StoryObj } from '@storybook/react'
import SearchField from '.'
import {
  StandaloneCircleCheckBoldIcon,
  StandaloneTriangleExclamationBoldIcon,
} from '@deriv/quill-icons'

const meta = {
  title: 'Inputs/Search Field',
  component: SearchField,
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
} satisfies Meta<typeof SearchField>

export default meta

type Story = StoryObj<typeof meta>

export const DefaultSearchField: Story = {
  args: {
    placeholder: 'Placeholder',
  },
}

export const DisabledSearchFieldOutline: Story = {
  args: {
    placeholder: 'Placeholder',
    disabled: true,
    variant: 'outline',
  },
}

export const DisabledSearchFieldFill: Story = {
  args: {
    placeholder: 'Placeholder',
    disabled: true,
    variant: 'fill',
  },
}

export const SuccessSearchFieldOutline: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'outline',
    status: 'success',
  },
}
export const SuccessMessageSearchFieldOutline: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'outline',
    status: 'success',
    leftStatusMessage: 'Success message goes here',
  },
}
export const SuccessMessageSearchFieldFill: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'outline',
    status: 'success',
    leftStatusMessage: 'Success message goes here',
  },
}
export const ErrorSearchFieldOutline: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'outline',
    status: 'error',
  },
}
export const StatusMessageSearchFieldOutline: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'outline',
    status: 'success',
    leftStatusMessage: 'Fail message goes here',
    rightStatusMessage: '0/0',
  },
}

export const SuccessStatusIconSearchField: Story = {
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

export const ErrorStatusIconSearchField: Story = {
  args: {
    placeholder: 'Placeholder',
    variant: 'outline',
    status: 'error',
    statusIcon: StandaloneTriangleExclamationBoldIcon,
  },
  argTypes: {
    status: {
      table: {
        disable: true,
      },
    },
  },
}
