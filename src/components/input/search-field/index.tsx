import { ComponentProps, forwardRef } from 'react'
import Input from '../base'
import { StandaloneSearchRegularIcon } from '@deriv/quill-icons'

export type SearchFieldProps = ComponentProps<typeof Input>

const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
  ({ type = 'search', ...rest }, ref) => {
    return (
      <Input
        {...rest}
        icon={StandaloneSearchRegularIcon}
        type={type}
        placeholder="Search"
        ref={ref}
      />
    )
  },
)

SearchField.displayName = 'SearchField'

export default SearchField
