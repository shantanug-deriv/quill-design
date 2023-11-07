import type { Meta, StoryObj } from '@storybook/react'
import Pagination from '.'
import { MOCK_DATA } from './mocks/sample-data'
import { configureMockChild } from './mocks/Post'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['number', 'bullet'],
      control: { type: 'select' },
      description: 'Type of pagination',
      table: {
        defaultValue: { summary: 'number' },
      },
    },
    contentPerPage: {
      control: { type: 'number', min: 1 },
      description: 'List of data to be rendered per page',
      table: {
        defaultValue: { summary: 1 },
      },
    },
    dataList: {
      control: 'object',
      description: 'Data set that is to be displayed',
    },
  },
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const NumberPagination: Story = {
  args: {
    contentPerPage: 5,
    dataList: MOCK_DATA,
    variant: 'number',
    className: 'p-general-sm',
    children: configureMockChild,
  },
}

export const BulletPagination: Story = {
  args: {
    contentPerPage: 20,
    children: configureMockChild,
    dataList: MOCK_DATA,
    variant: 'bullet',
    className: 'p-general-sm',
  },
}
