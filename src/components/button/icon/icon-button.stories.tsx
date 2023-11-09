import type { Meta, StoryObj } from '@storybook/react'
import {
  LabelPairedPlaceholderRegularIcon,
  QuillSvgProps,
} from '@deriv/quill-icons'
import IconButton from '.'

const meta = {
  title: 'Buttons/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    fullWidth: false,
    isLoading: false,
    disabled: false,
    size: 'md',
    icon: LabelPairedPlaceholderRegularIcon as React.ForwardRefExoticComponent<QuillSvgProps>,
    variant: 'primary',
    colorStyle: 'coral',
  },
  argTypes: {
    icon: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="flex min-h-[256px] min-w-[512px] items-center justify-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const PrimaryCoral: Story = {
  args: {
    size: 'md',
    variant: 'primary',
    colorStyle: 'coral',
    disabled: false,
  },
}

export const PrimaryBlack: Story = {
  args: {
    size: 'md',
    variant: 'primary',
    colorStyle: 'black',
    disabled: false,
  },
}

export const PrimaryWhite: Story = {
  args: {
    size: 'md',
    variant: 'primary',
    colorStyle: 'white',
    disabled: false,
  },
}

export const SecondaryCoral: Story = {
  args: {
    size: 'md',
    variant: 'secondary',
    colorStyle: 'coral',
    disabled: false,
  },
}

export const SecondaryBlack: Story = {
  args: {
    size: 'md',
    variant: 'secondary',
    colorStyle: 'black',
    disabled: false,
  },
}

export const SecondaryWhite: Story = {
  args: {
    size: 'md',
    variant: 'secondary',
    colorStyle: 'white',
    disabled: false,
  },
}

export const TertiaryCoral: Story = {
  args: {
    size: 'md',
    variant: 'tertiary',
    colorStyle: 'coral',
    disabled: false,
  },
}

export const TertiaryBlack: Story = {
  args: {
    size: 'md',
    variant: 'tertiary',
    colorStyle: 'black',
    disabled: false,
  },
}

export const TertiaryWhite: Story = {
  args: {
    size: 'md',
    variant: 'tertiary',
    colorStyle: 'white',
    disabled: false,
  },
}
