import { ComponentPropsWithoutRef, useRef, useState } from 'react'
import { useDrag } from '@use-gesture/react'
import qtMerge, { qtJoin } from 'qtMerge'
import HandleBar from './handle-bar'

type RootProps = ComponentPropsWithoutRef<'div'> & {
  show: boolean
  onClose: () => void
  position?: 'left' | 'right'
  type?: 'modal' | 'non-modal'
}

const windowHeight = window.innerHeight

const Root = ({
  children,
  className,
  show,
  onClose,
  position = 'right',
  type = 'modal',
}: RootProps) => {
  const [pos, setPos] = useState('auto')
  const ref = useRef<HTMLDivElement>(null)

  const bindHandle = useDrag(
    ({ dragging, distance, initial, xy }) => {
      const clientHeight = ref.current?.clientHeight || 0
      let draggingPoint = clientHeight
      const isGoingDown = initial[1] < xy[1]

      if (isGoingDown) {
        draggingPoint = draggingPoint - distance[1]
      } else {
        draggingPoint = draggingPoint + distance[1]
      }

      if (dragging) {
        setPos(`${draggingPoint}px`)
      } else {
        if (!isGoingDown) {
          if (draggingPoint >= 0 && draggingPoint <= windowHeight * 0.3) {
            setPos(`${windowHeight * 0.3}px`)
          } else if (
            draggingPoint >= windowHeight * 0.3 &&
            draggingPoint <= windowHeight * 0.5
          ) {
            setPos(`${windowHeight * 0.5}px`)
          } else {
            setPos(`${windowHeight * 0.7}px`)
          }
        } else {
          if (draggingPoint <= windowHeight * 0.3) {
            onClose()
          } else if (draggingPoint <= windowHeight * 0.5) {
            setPos(`${windowHeight * 0.3}px`)
          } else {
            setPos(`${windowHeight * 0.5}px`)
          }
        }
      }
    },
    { filterTaps: true },
  )

  //  TODO: need to update the transition classes
  return (
    <div
      className={qtJoin(
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
          'transition-allmd:h-full mx-auto flex min-w-[320px] max-w-[800px] flex-col overflow-y-auto rounded-t-800 bg-background-dialog px-800 pb-800 md:max-w-[360px] md:rounded-50',
          position === 'right' && 'md:ml-auto md:mr-50',
          position === 'left' && 'md:ml-50 md:mr-auto',
          className,
        )}
        ref={ref}
        style={{ height: pos }}
      >
        <HandleBar {...bindHandle()} />
        {children}
      </div>
    </div>
  )
}

export default Root
