import { ComponentPropsWithoutRef, useState } from 'react'
import qtMerge from 'qtMerge'
import HandleBar from './handle-bar'

type RootProps = ComponentPropsWithoutRef<'div'> & {
  show: boolean
  onClose: () => void
  position?: 'left' | 'right'
  type?: 'modal' | 'non-modal'
}

const Root = ({
  children,
  className,
  show,
  onClose,
  position = 'right',
  type = 'modal',
}: RootProps) => {
  const [expanded, setExpanded] = useState(false)

  const handleSwipeUp = () => {
    setExpanded(true)
  }

  const handleSwipeDown = () => {
    setExpanded(false)
  }
  //  TODO: need to update the transition classes
  return (
    <div
      className={qtMerge(
        'invisible fixed inset-general-none -bottom-full z-10 flex items-end justify-center opacity-50 transition-all duration-[160ms] ease-[cubic-bezier(0.72,_0,_0.24,_1)]',
        show && 'visible bottom-50 opacity-1300',
        position === 'right' && 'md:-right-full md:bottom-50',
        position === 'left' && 'md:-left-full md:bottom-50',
        show && position === 'right' && 'md:right-50',
        show && position === 'left' && 'md:left-50',
      )}
    >
      {type === 'modal' && (
        <div
          onClick={onClose}
          className="fixed inset-50 -z-10 bg-opacity-black-500"
        ></div>
      )}
      <div
        className={qtMerge(
          'mx-auto flex min-w-[320px] max-w-[800px] flex-col rounded-t-800 bg-background-dialog px-800 pb-800 md:h-full md:max-w-[360px] md:rounded-50',
          position === 'right' && 'md:ml-auto md:mr-50',
          position === 'left' && 'md:ml-50 md:mr-auto',
          expanded && 'h-full',
          className,
        )}
      >
        <HandleBar onTouchStart={handleSwipeUp} onTouchEnd={handleSwipeDown} />
        {children}
      </div>
    </div>
  )
}

export default Root
