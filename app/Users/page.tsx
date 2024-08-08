import UserProfile from '@/components/UserPage'
import React from 'react'

const USERS = () => {
  return (
    <div>
      {/* this componenet will be shifted to the home page as it contains the info needed to show whne the user is auth */}
      <UserProfile />
    </div>
  )
}

export default USERS
