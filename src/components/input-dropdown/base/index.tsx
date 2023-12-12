import { StandaloneChevronDownRegularIcon } from '@deriv/quill-icons'

import { baseInputWrapperVariants } from 'components/input/base/base.classnames'
import { forwardRef } from 'react'

import {
  baseInputLabelVariants,
  iconSize,
  statusIconColours,
} from './base.classnames'
import qtMerge, { qtJoin } from 'qtMerge'
import { BaseSelectDropdownProps } from '../types'

const InputSelectDropdown = forwardRef<
  HTMLButtonElement,
  BaseSelectDropdownProps
>(
  (
    {
      inputSize = 'md',
      className,
      children,
      status = 'neutral',
      variant = 'outline',
      icon: Icon,
      selected,
      isDropdownOpen,
      //textAlignment = 'left',
      label,
      onInputSelect,
      statusIcon: StatusIcon,
      ...rest
    },
    ref,
  ) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (selected === undefined) {
        const target = event.currentTarget
        const isSelected = target.getAttribute('data-state') === 'selected'
        const selected_state = isSelected ? '' : 'selected'
        target.setAttribute('data-state', selected_state)
        onInputSelect?.(event, !isSelected)
      } else {
        onInputSelect?.(event, selected)
      }
    }
    return (
      <button
        {...rest}
        data-state={selected ? 'selected' : ''}
        ref={ref}
        className={qtMerge(
          baseInputWrapperVariants({
            size: inputSize,
            status: status,
            className,
            variant,
          }),
        )}
        onClick={handleClick}
      >
        <div className="flex w-full flex-row gap-x-400">
          {Icon && (
            <div>
              <Icon {...iconSize[inputSize]} />
            </div>
          )}

          <div className="transition-transform duration-1000 ease-in-out">
            {children}
          </div>
          {label && inputSize === 'md' && (
            <label
              className={qtJoin(
                baseInputLabelVariants({
                  status,
                }),
              )}
            >
              {label}
            </label>
          )}
          {StatusIcon && (
            <div>
              <StatusIcon
                {...iconSize[inputSize]}
                className={qtJoin(statusIconColours[status])}
              />
            </div>
          )}
          <StandaloneChevronDownRegularIcon
            data-state={isDropdownOpen ? 'open' : 'close'}
            className="transition-transform duration-300 data-[state=open]:rotate-180"
            {...iconSize[inputSize]}
          />
        </div>
      </button>
    )
  },
)
InputSelectDropdown.displayName = 'InputSelectDropdown'
export default InputSelectDropdown
