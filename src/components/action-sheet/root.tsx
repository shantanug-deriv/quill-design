import { ComponentPropsWithoutRef } from 'react'
import { type VariantProps } from 'class-variance-authority'
import qtMerge, { qtJoin } from 'qtMerge'
import HandleBar from './handle-bar'
import { actionSheetRootCVA } from './action-sheet.classnames'
import { useSwipeBlock } from 'hooks'

type RootProps = ComponentPropsWithoutRef<'div'> &
  VariantProps<typeof actionSheetRootCVA> & {
    onClose: () => void
    type?: 'modal' | 'non-modal'
  }

const Root = ({
  children,
  className,
  show,
  onClose,
  position,
  type = 'modal',
}: RootProps) => {
  const { height, containerRef, bindHandle } = useSwipeBlock({ show, onClose })
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
          ref={containerRef}
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
