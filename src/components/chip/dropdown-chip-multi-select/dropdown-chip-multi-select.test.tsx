import { render, screen } from 'test-utils'
import userEvent from '@testing-library/user-event'
import DropdownChipMultiSelect from '.'

const mockOptions = [
  { value: '1', label: 'Sample Item 1' },
  {
    value: '2',
    label: 'Sample Item 2',
  },
  { value: '3', label: 'Sample Item 3' },
  { value: '4', label: 'Sample Item 4' },
]

describe('Dropdown Chip Multi Select', () => {
  const onSelectionChange = jest.fn()
  it('should render label', async () => {
    render(
      <DropdownChipMultiSelect
        size={'sm'}
        onSelectionChange={onSelectionChange}
        options={mockOptions}
        label="Sample Label"
      />,
    )
    const label = screen.getByText('Sample Label')
    expect(label).toBeInTheDocument()
  })

  it('should handle onSelectionChange event', async () => {
    render(
      <DropdownChipMultiSelect
        size={'sm'}
        onSelectionChange={onSelectionChange}
        options={mockOptions}
        label="Sample Label"
      />,
    )
    const label = screen.getByText('Sample Label')
    await userEvent.click(label)
    const item = screen.getByText('Sample Item 3')
    await userEvent.click(item)
    expect(onSelectionChange).toBeCalled()
  })

  it('should handle multiple items selection', async () => {
    render(
      <DropdownChipMultiSelect
        size={'sm'}
        onSelectionChange={onSelectionChange}
        options={mockOptions}
        label="Sample Label"
      />,
    )
    const label = screen.getByText('Sample Label')
    await userEvent.click(label)
    const item1 = screen.getByText('Sample Item 2')
    await userEvent.click(item1)
    const item2 = screen.getByText('Sample Item 3')
    await userEvent.click(item2)
    expect(onSelectionChange).toBeCalledWith([mockOptions[1], mockOptions[2]])
  })
})
