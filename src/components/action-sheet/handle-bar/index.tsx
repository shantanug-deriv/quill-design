import { ComponentProps } from 'react'

type BarProps = ComponentProps<'div'>

const HandleBar = (props: BarProps) => {
  return (
    <div
      className="flex touch-none items-center justify-center py-400 lg:hidden"
      data-testid="handle-bar"
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="4"
        viewBox="0 0 48 4"
        fill="none"
      >
        <rect width="48" height="4" rx="2" fill="black" fillOpacity="0.08" />
      </svg>
    </div>
  )
}

export default HandleBar
