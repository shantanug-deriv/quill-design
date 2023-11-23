import { ComponentProps, useContext, useEffect, useRef, useState } from 'react'
import { TabContext } from '../container'
import qtMerge, { qtJoin } from 'qtMerge'

type TabListProps = ComponentProps<'div'>

export const TabList = ({ children, className }: TabListProps) => {
  return (
    <div
      className={qtJoin('relative flex', className)}
      role="tablist"
      aria-orientation="horizontal"
    >
      {children}
    </div>
  )
}
