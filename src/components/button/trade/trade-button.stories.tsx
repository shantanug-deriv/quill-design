import type { Meta, StoryObj } from '@storybook/react'
import {
  LabelPairedPlaceholderRegularIcon,
  QuillSvgProps,
} from '@deriv/quill-icons'
import TradeButton from '.'

const meta = {
  title: 'Buttons/Trade',
  component: TradeButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    icon: LabelPairedPlaceholderRegularIcon as React.ForwardRefExoticComponent<QuillSvgProps>,
    iconPosition: undefined,
    fullWidth: false,
    isLoading: false,
    disabled: false,
    size: 'md',
    children: 'Trade Primary Sell Button',
    variant: 'primary',
    tradeType: 'sell',
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
} satisfies Meta<typeof TradeButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const PrimarySell: Story = {
  args: {
    children: 'Primary Sell TradeButton',
    size: 'md',
    variant: 'primary',
    tradeType: 'sell',
    disabled: false,
  },
}

export const PrimaryBuy: Story = {
  args: {
    children: 'Primary Buy TradeButton',
    size: 'md',
    variant: 'primary',
    tradeType: 'buy',
    disabled: false,
  },
}

export const SecondarySell: Story = {
  args: {
    children: 'Secondary Sell TradeButton',
    size: 'md',
    variant: 'secondary',
    tradeType: 'sell',
    disabled: false,
  },
}

export const SecondaryBuy: Story = {
  args: {
    children: 'Secondary Buy TradeButton',
    size: 'md',
    variant: 'secondary',
    tradeType: 'buy',
    disabled: false,
  },
}

export const TertiarySell: Story = {
  args: {
    children: 'Tertiary Sell TradeButton',
    size: 'md',
    variant: 'tertiary',
    tradeType: 'sell',
    disabled: false,
  },
}

export const TertiaryBuy: Story = {
  args: {
    children: 'Tertiary Buy TradeButton',
    size: 'md',
    variant: 'tertiary',
    tradeType: 'buy',
    disabled: false,
  },
}
