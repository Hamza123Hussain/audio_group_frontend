import sideNavItems from '@/utils/SideNavArray'
import { SIDENAV } from '@/utils/SideNavInterface'
import React from 'react'

const SideNav = ({ setindex, index }: { setindex: any; index: any }) => {
  return (
    <div className=" flex bg-gray-500 min-h-screen border-r border-gray-50 ">
      <div className="   bg-slate-800  flex flex-col justify-around ">
        {sideNavItems.map((element: SIDENAV) => (
          <div
            onClick={() => setindex(element.index)}
            key={element.index}
            className={` px-2   text-white items-center flex gap-2 cursor-pointer ${
              index == element.index ? 'text-blue-500' : ''
            } `}
          >
            {' '}
            <element.icon />
            <h1 className=" w-fit text-sm">{element.name}</h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideNav
