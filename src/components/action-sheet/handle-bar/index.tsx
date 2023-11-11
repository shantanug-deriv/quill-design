import { ComponentProps } from 'react'

type BarProps = ComponentProps<'div'>

const HandleBar = (props: BarProps) => {
  return (
    <div
      className="flex touch-none items-center justify-center py-400 lg:hidden"
      data-testid="handle-bar"
      {...props}
    >
      <span className="inline-block h-200 w-2400 rounded-100 bg-solid-slate-200" />
    </div>
  )
}

export default HandleBar
