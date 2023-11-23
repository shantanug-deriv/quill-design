import type { Meta, StoryObj } from '@storybook/react'
import { FlagAndorraIcon } from '@deriv/quill-icons'
import { LabelPairedCircleInfoBoldIcon } from '@deriv/quill-icons/LabelPaired'
import MockTab from './mocks/example'
import { Tab } from '.'

const meta = {
  title: 'Components/tabs',
  component: MockTab,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Tab>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'md',
    children: 'tabs',
    icon: LabelPairedCircleInfoBoldIcon,
    iconPosition: 'left',
    disabled: false,
  },
}
