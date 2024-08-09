'use client'
import React from 'react'
import Image from 'next/image'

import UserProfile from './UserPage'
import { useUser } from '@clerk/nextjs'
import Link from 'next/link'
const Navbar = () => {
  const { user } = useUser()
  return (
    <header className="flex justify-between items-center  px-2  bg-teal-700 ">
      <div className="flex items-center gap-3">
        <Image src={'/Logo.png'} width={50} height={50} alt="TalkHub Logo" />
        <h1 className="text-2xl font-bold">TalkHub</h1>
      </div>
      <nav className="flex gap-6 items-center  ">
        {/* <a href="#features" className="hover:text-blue-400">
          Features
        </a>
        <a href="#how-it-works" className="hover:text-blue-400">
          How It Works
        </a>
        <a href="#contact" className="hover:text-blue-400">
          Contact
        </a> */}
        {user ? (
          <UserProfile />
        ) : (
          <Link
            href="/sign-up"
            className=" bg-green-600 rounded-lg px-2 text-sm text-white border-white hover:shadow-sm hover:shadow-green-500"
          >
            Login
          </Link>
        )}
      </nav>
    </header>
  )
}

export default Navbar
