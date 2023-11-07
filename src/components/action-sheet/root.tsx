import { ComponentPropsWithoutRef, useEffect, useRef, useState } from 'react'
import { useDrag } from '@use-gesture/react'
import { type VariantProps } from 'class-variance-authority'
import qtMerge, { qtJoin } from 'qtMerge'
import HandleBar from './handle-bar'
import { actionSheetRootCVA } from './action-sheet.classnames'

type RootProps = ComponentPropsWithoutRef<'div'> &
  VariantProps<typeof actionSheetRootCVA> & {
    onClose: () => void
    type?: 'modal' | 'non-modal'
  }

const windowHeight = window.innerHeight

const Root = ({
  children,
  className,
  show,
  onClose,
  position,
  type = 'modal',
}: RootProps) => {
  const [height, setheight] = useState('auto')
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isLg = window.matchMedia('(min-width: 1024px)').matches
    if (isLg) {
      setheight('100%')
    }
    if (!isLg && show) {
      setheight('auto')
    }
  }, [show])

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
        setheight(`${draggingPoint}px`)
      } else {
        if (!isGoingDown) {
          if (draggingPoint >= 0 && draggingPoint <= windowHeight * 0.3) {
            setheight(`${windowHeight * 0.3}px`)
          } else if (
            draggingPoint >= windowHeight * 0.3 &&
            draggingPoint <= windowHeight * 0.5
          ) {
            setheight(`${windowHeight * 0.5}px`)
          } else {
            setheight(`${windowHeight * 0.7}px`)
          }
        } else {
          if (draggingPoint <= windowHeight * 0.3) {
            setheight('0px')
            onClose()
          } else if (draggingPoint <= windowHeight * 0.5) {
            setheight(`${windowHeight * 0.3}px`)
          } else {
            setheight(`${windowHeight * 0.5}px`)
          }
        }
      }
    },
    { filterTaps: true },
  )

  //  TODO: need to update the transition classes
  return (
    <>
      {type === 'modal' && (
        <div
          onClick={onClose}
          className={qtJoin(
            'fixed inset-50 z-10 bg-opacity-black-500 transition-opacity duration-[160ms] ease-[cubic-bezier(0.72,_0,_0.24,_1)]',
            !show && 'invisible',
          )}
        ></div>
      )}
      <div
        className={qtJoin(
          'pointer-events-none fixed inset-general-none z-10 flex select-none items-end justify-center overflow-x-hidden transition-all duration-[160ms] ease-[cubic-bezier(0.72,_0,_0.24,_1)]',
          !show && 'invisible',
        )}
      >
        <div
          className={qtMerge(actionSheetRootCVA({ show, position, className }))}
          ref={ref}
          style={{ height }}
        >
          <HandleBar {...bindHandle()} />
          {children}
        </div>
      </div>
    </>
  )
}

export default Root
