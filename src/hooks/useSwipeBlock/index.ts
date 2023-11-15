import { useEffect, useRef, useState } from 'react'
import { useDrag } from '@use-gesture/react'
import { useMediaQuery } from 'usehooks-ts'

type SwipeBlockType = {
  show?: boolean
  onClose?: () => void
}

export const useSwipeBlock = ({ show, onClose }: SwipeBlockType) => {
  const [height, setHeight] = useState('auto')
  const containerRef = useRef<HTMLDivElement>(null)

  // TODO: replace this with useScreens when @aizad-deriv is done with it.
  const isLg = useMediaQuery('(min-width: 1024px)')

  useEffect(() => {
    if (isLg) {
      setHeight('100%')
    }
    if (!isLg && show) {
      setHeight('auto')
    }
  }, [show, isLg])

  const bindHandle = useDrag(
    ({ dragging, distance, initial, xy }) => {
      // TODO: @hasan-deriv, we might have to rethink this logic a little bit. for now I'm going to move the windowHeight here
      const windowHeight =
        typeof window !== 'undefined' ? window.innerHeight : 0

      const clientHeight = containerRef.current?.clientHeight || 0
      let draggingPoint = clientHeight
      const isGoingDown = initial[1] < xy[1]

      if (isGoingDown) {
        draggingPoint = draggingPoint - distance[1]
      } else {
        draggingPoint = draggingPoint + distance[1]
      }

      if (dragging) {
        setHeight(`${draggingPoint}px`)
      } else {
        if (!isGoingDown) {
          if (draggingPoint >= 0 && draggingPoint <= windowHeight * 0.3) {
            setHeight(`${windowHeight * 0.3}px`)
          } else if (
            draggingPoint >= windowHeight * 0.3 &&
            draggingPoint <= windowHeight * 0.5
          ) {
            setHeight(`${windowHeight * 0.5}px`)
          } else {
            setHeight(`${windowHeight * 0.7}px`)
          }
        } else {
          if (draggingPoint <= windowHeight * 0.3) {
            setHeight('0px')
            onClose?.()
          } else if (draggingPoint <= windowHeight * 0.5) {
            setHeight(`${windowHeight * 0.3}px`)
          } else {
            setHeight(`${windowHeight * 0.5}px`)
          }
        }
      }
    },
    { filterTaps: true },
  )
  return { height, containerRef, bindHandle }
}
