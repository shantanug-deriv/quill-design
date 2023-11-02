import { Fragment, forwardRef } from 'react'
import { useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import SelectableChip from '../selectable-chip'
import { MultiSelectChipProps, TSingleSelectItem } from '../types'
import {
  LabelPairedSquareCheckFillIcon,
  LabelPairedSquareRegularIcon,
} from '@deriv/quill-icons'
import {
  chipDropdownClassnames,
  chipDropdownMultiClassnames,
} from '../chip.classnames'
import qtMerge from 'qtMerge'

const Options = ({
  position,
  options,
}: {
  position: number
  options: TSingleSelectItem[]
}) => {
  const item = options[position]
  return (
    <Listbox.Option value={position} as={Fragment} disabled={item.disabled}>
      {({ disabled, selected }) => (
        <li
          className={qtMerge(
            disabled && 'opacity-600',
            chipDropdownMultiClassnames,
          )}
        >
          <span>
            {selected ? (
              <LabelPairedSquareCheckFillIcon />
            ) : (
              <LabelPairedSquareRegularIcon />
            )}
          </span>
          <span>{item.label}</span>
        </li>
      )}
    </Listbox.Option>
  )
}

export const DropdownChipMultiSelect = forwardRef<
  HTMLButtonElement,
  MultiSelectChipProps
>(
  (
    {
      label,
      size,
      icon,
      labelTag,
      disabled,
      options,
      onSelectionChange,
      className,
      ...rest
    },
    ref,
  ) => {
    const [selectedItems, setSelectedItems] = useState<Array<number>>([])

    const handleItemSelect = (items: Array<number>) => {
      setSelectedItems(items)
      const updatedSelectionList = items.map((item) => options[item])
      onSelectionChange?.(updatedSelectionList)
    }

    return (
      <>
        <Listbox value={selectedItems} onChange={handleItemSelect} multiple>
          {({ open }) => (
            <>
              <Listbox.Button as="div">
                <SelectableChip
                  icon={icon}
                  size={size}
                  labelTag={labelTag}
                  ref={ref}
                  dropdown
                  isDropdownOpen={open}
                  disabled={disabled}
                  {...rest}
                >
                  <span>{label}</span>
                  <span>
                    {selectedItems.length > 0 && `(${selectedItems.length})`}
                  </span>
                </SelectableChip>
              </Listbox.Button>
              <Transition
                enter="transition ease-out duration-200 scale transform"
                enterFrom="scale-y-0"
                enterTo="scale-y-full"
                leave="transition ease-out duration-200 scale transform"
                leaveFrom="scale-y-0 translate-y-0"
                leaveTo="scale-y-0 -translate-y-2/4"
              >
                <Listbox.Options
                  className={qtMerge(className, chipDropdownClassnames)}
                >
                  {options.map((item, index) => (
                    <Options
                      position={index}
                      options={options}
                      key={`chip-selectable-item-${item.value}`}
                    />
                  ))}
                </Listbox.Options>
              </Transition>
            </>
          )}
        </Listbox>
      </>
    )
  },
)

DropdownChipMultiSelect.displayName = 'DropdownChipMultiSelect'

export default DropdownChipMultiSelect
