import React from 'react'
import Logo from '../public/Logo.png'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className=" py-1 px-2 flex justify-between bg-slate-200 text-black shadow-lg shadow-slate-400 ">
      <div className=" flex items-center gap-2">
        <Image src={Logo} width={50} height={50} alt="" />
        <h1>TalkHub</h1>
      </div>
      <h2>aaa</h2>
    </div>
  )
}

export default Navbar
