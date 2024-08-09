import sideNavItems from '@/utils/SideNavArray'
import { SIDENAV } from '@/utils/SideNavInterface'
import React from 'react'
import SidenavSmall from './sidenavforsmall'
import SideNavcomponents from './SideComponents/SideNavcomponents'
import { useIndex } from '@/utils/context'

const SideNav = () => {
  return (
    <>
      <div className=" hidden min-h-screen   sm:flex bg-gray-500  border-r border-gray-50 ">
        <SideNavcomponents />
      </div>
      <SidenavSmall />
    </>
  )
}

export default SideNav
