import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UserProfile = () => {
  const { user, isLoading, logout } = useAuth0()

  if (isLoading) {
    return <div>Loading ...</div>
  }

  return (
    <div className=" flex items-center gap-2">
      <h2 className=" text-sm">{user?.name}</h2>
      <button
        className=" text-sm bg-black border-white px-2 rounded-lg text-white hover:shadow-sm hover:shadow-slate-900"
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </button>
    </div>
  )
}

export default UserProfile
