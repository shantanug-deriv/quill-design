import { useEffect, useRef, useState } from 'react'
import { useDrag } from '@use-gesture/react'

const windowHeight = window.innerHeight

type SwipeBlockType = {
  show: boolean
  onClose: () => void
}

export const useSwipeBlock = ({ show, onClose }: SwipeBlockType) => {
  const [height, setheight] = useState('auto')
  const containerRef = useRef<HTMLDivElement>(null)

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
      const clientHeight = containerRef.current?.clientHeight || 0
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
  return { height, containerRef, bindHandle }
}
