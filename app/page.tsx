'use client'
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import LandingPage from '@/components/LandingPage'
import SideNav from '@/components/SideNav'

const LoginButton = () => {
  return (
    <div>
      <SideNav />
    </div>
  )
}

export default LoginButton
