'use client'
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import LandingPage from '@/components/LandingPage'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()
  // side nav will added here as no layout needed as sidenav needed on home pg only
  // we use usestate and index to modidy what appears on the right side of our sidenav
  // this page will only be shown if user is authenticated
  // landing page to made first
  // do all the above and then move to the next part of the video
  return <LandingPage />
}

export default LoginButton
