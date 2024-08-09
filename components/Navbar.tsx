'use client'
import React from 'react'
import Logo from '../public/Logo.png'
import Image from 'next/image'
import { useAuth0 } from '@auth0/auth0-react'
import UserProfile from './UserPage'
const Navbar = () => {
  const { isAuthenticated } = useAuth0()
  const { loginWithRedirect } = useAuth0()
  return (
    <div className=" py-1 px-2 flex justify-between bg-slate-200 text-black hover:shadow-lg hover:shadow-slate-400 ">
      <div className=" flex items-center ">
        <Image src={Logo} width={30} height={30} alt="" />
        <h1 className=" text-slate-900 font-semibold hover:font-extrabold text-base">
          TalkHub
        </h1>
      </div>
      {isAuthenticated ? (
        <UserProfile />
      ) : (
        <button
          className=" bg-green-400 rounded-lg px-2 text-sm text-white border-white hover:shadow-sm hover:shadow-green-500"
          onClick={() => loginWithRedirect()}
        >
          Log In
        </button>
      )}
    </div>
  )
}

export default Navbar
