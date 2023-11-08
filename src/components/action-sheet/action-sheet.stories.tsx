import type { Meta, StoryObj } from '@storybook/react'

import ActionSheetExample from './mocks/example'

const meta: Meta = {
  title: 'Action Sheet',
  component: ActionSheetExample,
  tags: ['autodocs'],
  argTypes: {
    show: {
      description:
        'This is the value that the developer will provide to `ActionSheet.Root` in order to toggle the component.',
    },
    onClose: {
      description: 'Function for invoking the `onClose` action.',
    },
    expandable: {
      control: { type: 'boolean' },
      description: 'This prop controls the expandability of the bottom sheet.',
    },
    type: {
      options: ['modal', 'non-modal'],
      control: { type: 'radio' },
      description:
        'This property is used to specify the type, which offers two options: `modal` and `non-modal`. When set to `modal`, it adds an overlay over the entire body, and clicking on it will close the action sheet. On the other hand, when set to `non-modal`, the area outside of the action sheet remains interactive and no overlay.',
    },
    position: {
      options: ['left', 'right'],
      control: { type: 'radio' },
      description: 'This prop will make bottom sheet expandable',
    },
    primaryAction: {
      control: {
        type: 'object',
      },
      description:
        'This prop is meant for `ActionSheet.Footer`. It accepts two property: `Content`, which accepts a string, and `onAction`, which takes a function.',
    },
    secondaryAction: {
      control: {
        type: 'object',
      },
      description: 'Same as `primaryAction`',
    },
    alignment: {
      control: {
        type: 'radio',
      },
      options: ['vertical', 'horizontal'],
      description: 'This prop is for `ActionSheet.Footer` buttons alignment',
    },
  },
} satisfies Meta<typeof ActionSheetExample>

export default meta
type Story = StoryObj<typeof ActionSheetExample>

export const Primary: Story = {
  args: {
    expandable: true,
    type: 'modal',
    position: 'right',
    primaryAction: {
      content: 'Primary Action',
      onAction: () => null,
    },
    secondaryAction: {
      content: 'Secondary Action',
      onAction: () => null,
    },
    alignment: 'vertical',
  },
}
