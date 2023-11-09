import type { Meta, StoryObj } from '@storybook/react'
import {
  LabelPairedPlaceholderRegularIcon,
  QuillSvgProps,
} from '@deriv/quill-icons'
import LinkButton from '.'

const meta = {
  title: 'Buttons/LinkButton',
  component: LinkButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    icon: LabelPairedPlaceholderRegularIcon as React.ForwardRefExoticComponent<QuillSvgProps>,
    iconPosition: undefined,
    fullWidth: false,
    isLoading: false,
    size: 'md',
    children: 'Basic Button',
    variant: 'primary',
    colorStyle: 'coral',
  },
  argTypes: {
    children: { name: 'Text', control: 'text' },

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
} satisfies Meta<typeof LinkButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const PrimaryCoral: Story = {
  args: {
    children: 'Primary Coral LinkButton',
    size: 'md',
    variant: 'primary',
    colorStyle: 'coral',
  },
}

export const PrimaryBlack: Story = {
  args: {
    children: 'Primary Black LinkButton',
    size: 'md',
    variant: 'primary',
    colorStyle: 'black',
  },
}

export const PrimaryWhite: Story = {
  args: {
    children: 'Primary White LinkButton',
    size: 'md',
    variant: 'primary',
    colorStyle: 'white',
  },
}

export const SecondaryCoral: Story = {
  args: {
    children: 'Secondary Coral LinkButton',
    size: 'md',
    variant: 'secondary',
    colorStyle: 'coral',
  },
}

export const SecondaryBlack: Story = {
  args: {
    children: 'Secondary Black LinkButton',
    size: 'md',
    variant: 'secondary',
    colorStyle: 'black',
  },
}

export const SecondaryWhite: Story = {
  args: {
    children: 'Secondary White LinkButton',
    size: 'md',
    variant: 'secondary',
    colorStyle: 'white',
  },
}

export const TertiaryCoral: Story = {
  args: {
    children: 'Tertiary Coral LinkButton',
    size: 'md',
    variant: 'tertiary',
    colorStyle: 'coral',
  },
}

export const TertiaryBlack: Story = {
  args: {
    children: 'Tertiary Black LinkButton',
    size: 'md',
    variant: 'tertiary',
    colorStyle: 'black',
  },
}

export const TertiaryWhite: Story = {
  args: {
    children: 'Tertiary White LinkButton',
    size: 'md',
    variant: 'tertiary',
    colorStyle: 'white',
  },
}
