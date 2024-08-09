import sideNavItems from '@/utils/SideNavArray'
import React from 'react'

const SideNav = () => {
  return (
    <div className=" flex bg-gray-500 min-h-screen ">
      <div className="   bg-slate-800  flex flex-col justify-around">
        {sideNavItems.map((element: any) => (
          <div
            key={element.name}
            className=" px-2   text-white items-center flex gap-2"
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
