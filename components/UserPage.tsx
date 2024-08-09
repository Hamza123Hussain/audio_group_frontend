import { UserButton, useUser } from '@clerk/nextjs'
import React from 'react'

const UserProfile = () => {
  const { user } = useUser()
  return (
    <div className=" flex items-center sm:flex-row flex-col  gap-2 mt-1">
      <UserButton />
      <h1>{user?.fullName}</h1>
    </div>
  )
}

export default UserProfile
