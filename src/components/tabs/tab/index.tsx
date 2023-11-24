import { useContext, useEffect, MouseEvent, useRef } from 'react'
import qtMerge, { qtJoin } from 'qt-merge'
import { IconSize, tabIconFillCVA, tabVariants } from '../tab.classnames'
import { TabTriggerProps } from '../types'
import { TabContext } from '../container'
import { iconSize } from 'components/input/base/base.classnames'

export const Tab = ({
  children,
  icon: Icon,
  className,
  ...rest
}: TabTriggerProps) => {
  const { activeTab, handleToggle, id, size, iconPosition } =
    useContext(TabContext)

  const onClickTab = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.parentElement) {
      const idx = Array.from(e.currentTarget.parentElement.children).indexOf(
        e.currentTarget,
      )
      handleToggle?.(idx)
    }
  }
  const ref = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    // to set default aria-selected
    if (ref.current && ref.current?.parentElement) {
      const items = Array.from(ref.current.parentElement?.children)
      const idx = items.indexOf(ref.current)
      // Set aria-selected
      if (activeTab === idx) {
        ref.current.setAttribute('aria-selected', 'true')
      } else {
        ref.current.setAttribute('aria-selected', 'false')
      }
      // Set unique ID
      items.forEach((item, i) => {
        item.id = `${id}-trigger-${i}`
      })
    }
  }, [activeTab, id])

  return (
    <button
      onClick={onClickTab}
      className={qtMerge(tabVariants({ size, iconPosition, className }))}
      role="tab"
      ref={ref}
      {...rest}
    >
      {Icon && size && iconPosition && (
        <Icon
          {...(IconSize[size], iconSize[iconPosition])}
          className={qtJoin(tabIconFillCVA())}
        />
      )}
      {children}
    </button>
  )
}

Tab.displayName = 'Tab'
