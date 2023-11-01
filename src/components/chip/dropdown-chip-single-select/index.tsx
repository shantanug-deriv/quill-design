import { Fragment, Ref, forwardRef } from 'react'
import { useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import SelectableChip from '../selectable-chip'
import { SingleSelectChipProps, TSingleSelectItem } from '../types'

const Options = ({ item }: { item: TSingleSelectItem }) => {
  return (
    <Listbox.Option value={item} as={Fragment} disabled={item.disabled}>
      {({ disabled, selected }) => (
        <li
          className={`cursor-pointer rounded-600 p-600 ${
            selected
              ? 'bg-solid-slate-1400 text-solid-slate-50'
              : 'hover:bg-opacity-black-100 hover:text-opacity-black-600'
          } ${disabled && 'opacity-600'}`}
        >
          {item.label}
        </li>
      )}
    </Listbox.Option>
  )
}

export const DropdownChipSingleSelect = forwardRef(
  (
    {
      defaultOption,
      size,
      icon,
      labelTag,
      disabled,
      options,
      onChange,
      ...rest
    }: SingleSelectChipProps,
    ref: Ref<HTMLButtonElement>,
  ) => {
    const [selectedItem, setSelectedItem] =
      useState<TSingleSelectItem>(defaultOption)

    const handleItemSelect = (item: TSingleSelectItem) => {
      setSelectedItem(item)
      onChange?.(item)
    }

    return (
      <>
        <Listbox value={selectedItem} onChange={handleItemSelect}>
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
                  {selectedItem?.label}
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
                <Listbox.Options className="m-200 max-w-md border-75 border-solid-slate-75 bg-solid-slate-50 p-200 shadow-530">
                  <Options item={defaultOption} />
                  {options.map((item) => (
                    <Options
                      item={item}
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

DropdownChipSingleSelect.displayName = 'DropdownChipSingleSelect'

export default DropdownChipSingleSelect
