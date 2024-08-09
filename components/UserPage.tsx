import { UserButton, useUser } from '@clerk/nextjs'
import React from 'react'

const UserProfile = () => {
  const { user } = useUser()
  return (
    <div className=" flex items-center gap-2">
      <h1>{user?.fullName}</h1>
      <button className=" text-sm  border-white px-2 rounded-lg text-white hover:shadow-sm hover:shadow-slate-900">
        <UserButton />
      </button>
    </div>
  )
}

export default UserProfile
