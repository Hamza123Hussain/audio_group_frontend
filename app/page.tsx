'use client'
import React, { useState } from 'react'
import SideNav from '@/components/SideNav'
import Home from '@/components/SideComponents/Home'
import Previous from '@/components/SideComponents/Previous'
import Upcoming from '@/components/SideComponents/Upcoming'
import Recording from '@/components/SideComponents/Recording'
import Personal from '@/components/SideComponents/Personal'
import { useIndex } from '@/utils/context'

const LoginButton = () => {
  const { index, setIndex } = useIndex()
  return (
    <div className=" flex">
      <SideNav />
      <div className=" bg-slate-900 flex-1 text-white ">
        {index == 0 ? (
          <Home />
        ) : index == 1 ? (
          <Previous />
        ) : index == 2 ? (
          <Upcoming />
        ) : index == 3 ? (
          <Recording />
        ) : index == 4 ? (
          <Personal />
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default LoginButton
