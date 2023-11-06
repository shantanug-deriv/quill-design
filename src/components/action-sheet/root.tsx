import { ComponentPropsWithoutRef } from 'react'
import qtMerge from 'qtMerge'

type RootProps = ComponentPropsWithoutRef<'div'> & {
  show: boolean
  onClose: () => void
}

const Root = ({ children, className, show, onClose }: RootProps) => {
  return (
    <div
      className={qtMerge(
        'invisible fixed inset-general-none z-10 flex items-end justify-center opacity-50',
        show && 'visible opacity-1300',
      )}
    >
      <div
        onClick={onClose}
        className="fixed inset-50 -z-10 bg-opacity-black-500"
      ></div>
      <div
        className={qtMerge(
          'min-w-[320px] max-w-[800px] rounded-t-800 bg-background-dialog px-800 pb-800',
          className,
        )}
      >
        {children}
      </div>
    </div>
  )
}

export default Root
