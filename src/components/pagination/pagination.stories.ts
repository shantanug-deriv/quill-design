import type { Meta, StoryObj } from '@storybook/react'
import Pagination from '.'
import Post from './mocks/Post'
import { MOCK_DATA } from './mocks/sample-data'

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
    renderComponent: {
      control: { type: null },
      description: 'Component to render the data',
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
    renderComponent: Post,
    dataList: MOCK_DATA,
    variant: 'number',
    className: 'p-general-sm',
  },
}

export const BulletPagination: Story = {
  args: {
    contentPerPage: 20,
    renderComponent: Post,
    dataList: MOCK_DATA,
    variant: 'bullet',
    className: 'p-general-sm',
  },
}
