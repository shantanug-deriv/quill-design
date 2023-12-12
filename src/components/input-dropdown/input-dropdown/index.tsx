import { Fragment, forwardRef, useState } from 'react'
import InputSelectDropdown from '../base'
import { Listbox, Transition } from '@headlessui/react'
import {
  baseStatusMessageVariants,
  chipDropdownPanelClassnames,
  chipDropdownSingleClassnames,
} from '../base/base.classnames'
import qtMerge, { qtJoin } from 'qtMerge'
import { SingleSelectProps, TSingleSelectItem } from '../types'

const Options = ({ item }: { item: TSingleSelectItem }) => {
  return (
    <Listbox.Option value={item} as={Fragment}>
      {({ disabled, selected }) => (
        <li
          className={qtMerge(
            chipDropdownSingleClassnames,
            disabled && 'opacity-600',
            selected &&
              'bg-solid-slate-1400 fill-solid-slate-50 text-solid-slate-50 hover:bg-solid-slate-1400 hover:fill-solid-slate-50 hover:text-solid-slate-50',
          )}
        >
          {item.label}
        </li>
      )}
    </Listbox.Option>
  )
}
export const InputDropDown = forwardRef<HTMLButtonElement, SingleSelectProps>(
  (
    {
      defaultOption,
      size,
      icon,
      label,
      status,
      options,
      onSelectionChange,
      className,
      statusMessage,
      ...rest
    },
    ref,
  ) => {
    const [selectedItem, setSelectedItem] =
      useState<TSingleSelectItem>(defaultOption)

    const handleItemSelect = (item: TSingleSelectItem) => {
      setSelectedItem(item)
      onSelectionChange?.(item)
    }
    return (
      <>
        <Listbox value={selectedItem} onChange={handleItemSelect}>
          {({ open }) => (
            <>
              <Listbox.Button as="div">
                <InputSelectDropdown
                  {...rest}
                  icon={icon}
                  size={size}
                  label={label}
                  selected={selectedItem.value !== defaultOption.value}
                  ref={ref}
                  isDropdownOpen={open}
                >
                  {selectedItem?.label}
                </InputSelectDropdown>
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
                  className={qtMerge(chipDropdownPanelClassnames, className)}
                >
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
        <div className="flex justify-between pt-400">
          {statusMessage && (
            <p
              key={statusMessage}
              className={qtJoin(baseStatusMessageVariants({ status }))}
            >
              {statusMessage}
            </p>
          )}
        </div>
      </>
    )
  },
)
InputDropDown.displayName = 'InputDropDown'
export default InputDropDown
