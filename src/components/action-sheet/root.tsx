import { ComponentPropsWithoutRef, useState } from 'react'
import { useDrag } from '@use-gesture/react'
import qtMerge from 'qtMerge'
import HandleBar from './handle-bar'

type RootProps = ComponentPropsWithoutRef<'div'> & {
  show: boolean
  onClose: () => void
  position?: 'left' | 'right'
  type?: 'modal' | 'non-modal'
}

const BOTTOM_POINT = window.innerHeight - 30

const Root = ({
  children,
  className,
  show,
  onClose,
  position = 'right',
  type = 'modal',
}: RootProps) => {
  const [pos, setPos] = useState('auto')
  const bindHandle = useDrag((params) => {
    console.log(params)
    if (params.dragging) {
      if (params.xy[1] > 0 && params.xy[1] < BOTTOM_POINT) {
        setPos(`${params.xy[1]}px`)
      }
    } else {
      if (params.xy[1] < BOTTOM_POINT / 2) {
        setPos('0px')
      } else {
        setPos(`${BOTTOM_POINT}px`)
      }
    }
  })

  console.log(pos)

  //  TODO: need to update the transition classes
  return (
    <div
      className={qtMerge(
        'invisible fixed inset-general-none -bottom-full z-10 flex select-none items-end justify-center opacity-50 transition-all duration-[160ms] ease-[cubic-bezier(0.72,_0,_0.24,_1)]',
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
          'mx-auto flex min-w-[320px] max-w-[800px] flex-col rounded-t-800 bg-background-dialog px-800 pb-800 transition-all md:h-full md:max-w-[360px] md:rounded-50',
          position === 'right' && 'md:ml-auto md:mr-50',
          position === 'left' && 'md:ml-50 md:mr-auto',
          className,
        )}
        style={{ height: pos }}
      >
        <HandleBar {...bindHandle()} />
        {children}
      </div>
    </div>
  )
}

export default Root
