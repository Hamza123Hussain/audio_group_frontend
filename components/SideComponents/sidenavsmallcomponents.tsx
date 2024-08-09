import { useIndex } from '@/utils/context'
import sideNavItems from '@/utils/SideNavArray'
import { SIDENAV } from '@/utils/SideNavInterface'
import React from 'react'

const SideNavCompoentsSmall = () => {
  const { index, setIndex } = useIndex()
  return (
    <div className="  flex flex-col gap-8  min-h-screen ">
      {sideNavItems.map((element: SIDENAV) => (
        <div
          onClick={() => setIndex(element.index)}
          key={element.index}
          className={` px-2   text-white items-center flex gap-2 cursor-pointer w-full  ${
            index == element.index ? 'text-green-600' : ''
          } `}
        >
          {' '}
          <element.icon />
          <h1 className=" w-fit text-sm">{element.name}</h1>
        </div>
      ))}
    </div>
  )
}

export default SideNavCompoentsSmall
