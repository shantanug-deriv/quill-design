import type { Meta, StoryObj } from '@storybook/react'
import { IllustrativeCommissionIcon } from '@deriv/quill-icons'
import BasicButton from '.'

const meta = {
  title: 'Buttons/Basic',
  component: BasicButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    icon: () => <IllustrativeCommissionIcon />,
    iconPosition: undefined,
    fullWidth: false,
    isLoading: false,
    disabled: false,
    size: 'md',
    children: 'Basic Button',
  },
  argTypes: {
    children: { name: 'Text', control: 'text' },

    icon: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof BasicButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const PrimaryCoral: Story = {
  args: {
    children: 'Primary Coral BasicButton',
    size: 'md',
    variant: 'primary',
    colorStyle: 'coral',
    disabled: false,
  },
}

export const PrimaryBlack: Story = {
  args: {
    children: 'Primary Black BasicButton',
    size: 'md',
    variant: 'primary',
    colorStyle: 'black',
    disabled: false,
  },
}

export const PrimaryWhite: Story = {
  args: {
    children: 'Primary White BasicButton',
    size: 'md',
    variant: 'primary',
    colorStyle: 'white',
    disabled: false,
  },
}

export const SecondaryCoral: Story = {
  args: {
    children: 'Secondary Coral BasicButton',
    size: 'md',
    variant: 'secondary',
    colorStyle: 'coral',
    disabled: false,
  },
}

export const SecondaryBlack: Story = {
  args: {
    children: 'Secondary Black BasicButton',
    size: 'md',
    variant: 'secondary',
    colorStyle: 'black',
    disabled: false,
  },
}

export const SecondaryWhite: Story = {
  args: {
    children: 'Secondary White BasicButton',
    size: 'md',
    variant: 'secondary',
    colorStyle: 'white',
    disabled: false,
  },
}

export const TertiaryCoral: Story = {
  args: {
    children: 'Tertiary Coral BasicButton',
    size: 'md',
    variant: 'tertiary',
    colorStyle: 'coral',
    disabled: false,
  },
}

export const TertiaryBlack: Story = {
  args: {
    children: 'Tertiary Black BasicButton',
    size: 'md',
    variant: 'tertiary',
    colorStyle: 'black',
    disabled: false,
  },
}

export const TertiaryWhite: Story = {
  args: {
    children: 'Tertiary White BasicButton',
    size: 'md',
    variant: 'tertiary',
    colorStyle: 'white',
    disabled: false,
  },
}
