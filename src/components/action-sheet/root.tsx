import { ComponentPropsWithoutRef } from 'react'
import qtMerge from 'qtMerge'

type RootProps = ComponentPropsWithoutRef<'div'> & {
  show: boolean
  onClose: () => void
  position?: 'left' | 'right'
}

const Root = ({
  children,
  className,
  show,
  onClose,
  position = 'right',
}: RootProps) => {
  return (
    <div
      className={qtMerge(
        'invisible fixed inset-general-none -bottom-full z-10 flex items-end justify-center opacity-50 transition-all',
        show && 'visible bottom-50 opacity-1300',
        position === 'right' && 'md:-right-full md:bottom-50',
        position === 'left' && 'md:-left-full md:bottom-50',
        show && position === 'right' && 'md:right-50',
        show && position === 'left' && 'md:left-50',
      )}
    >
      <div
        onClick={onClose}
        className="fixed inset-50 -z-10 bg-opacity-black-500"
      ></div>
      <div
        className={qtMerge(
          'flex min-w-[320px] max-w-[800px] flex-col rounded-t-800 bg-background-dialog px-800 pb-800 md:h-full md:max-w-[360px] md:rounded-50',
          position === 'right' && 'md:ml-auto',
          position === 'left' && 'md:mr-auto',
          className,
        )}
      >
        {children}
      </div>
    </div>
  )
}

export default Root
