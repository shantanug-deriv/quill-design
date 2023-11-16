import { ComponentProps, forwardRef } from 'react'
import Input from '../base'
import { StandaloneSearchBoldIcon } from '@deriv/quill-icons/Standalone'

export type SearchFieldProps = ComponentProps<typeof Input>

export const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
  ({ type = 'search', placeholder = 'Search', ...rest }, ref) => {
    return (
      <Input
        {...rest}
        icon={StandaloneSearchBoldIcon}
        type={type}
        placeholder={placeholder}
        ref={ref}
      />
    )
  },
)

SearchField.displayName = 'SearchField'

export default SearchField
