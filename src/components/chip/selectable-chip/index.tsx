import {
  StandaloneChevronDownRegularIcon,
  StandaloneCircleXmarkRegularIcon,
} from '@deriv/quill-icons/Standalone'
import { forwardRef } from 'react'
import {
  ChipIconSizes,
  chipBaseClassnames,
  ChipStandaloneIconSizes,
  chipBaseVariant,
  chipBaseTextColorClassnames,
} from '../chip.classnames'
import type { SelectableChipProps } from '../types'
import qtMerge from 'qtMerge'

export const SelectableChip = forwardRef<
  HTMLButtonElement,
  SelectableChipProps
>(
  (
    {
      className,
      children,
      dismissible = false,
      icon: Icon,
      isDropdownOpen,
      dropdown = false,
      dropdownItemSelected = false,
      labelTag,
      onChipSelect,
      onDismiss,
      size = 'md',
      ...rest
    },
    ref,
  ) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (dismissible || dropdown) return
      const target = event.currentTarget
      const isSelected = target.getAttribute('data-state') === 'selected'
      const selected_state = isSelected ? '' : 'selected'
      target.setAttribute('data-state', selected_state)
      onChipSelect?.(event, !isSelected)
    }

    const handleDismiss = (
      event: React.MouseEvent<SVGSVGElement, MouseEvent>,
    ) => {
      onDismiss?.(event)
    }
    return (
      <button
        {...rest}
        className={chipBaseVariant({
          dismissible,
          size,
          className: qtMerge(
            chipBaseClassnames,
            chipBaseTextColorClassnames,
            className,
          ),
        })}
        data-state={dropdownItemSelected ? 'selected' : ''}
        ref={ref}
        onClick={handleClick}
      >
        {Icon && <Icon {...ChipIconSizes[size]} />}
        <div className="transition-transform duration-1000 ease-in-out">
          {children}
        </div>
        {labelTag && (
          <span className={`font-bold ${chipBaseTextColorClassnames}`}>
            {labelTag}
          </span>
        )}
        {dismissible && (
          <StandaloneCircleXmarkRegularIcon
            {...ChipStandaloneIconSizes[size]}
            onClick={handleDismiss}
            data-testid="dt-chip-dismissable-btn"
            className="cursor-pointer"
          />
        )}
        {dropdown && (
          <>
            <StandaloneChevronDownRegularIcon
              data-state={isDropdownOpen ? 'open' : 'close'}
              className="transition-transform duration-300 data-[state=open]:rotate-180"
              {...ChipStandaloneIconSizes[size]}
            />
          </>
        )}
      </button>
    )
  },
)

SelectableChip.displayName = 'SelectableChip'

export default SelectableChip
