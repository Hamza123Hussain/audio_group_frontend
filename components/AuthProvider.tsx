// AuthProvider.js
'use client'

import { Auth0Provider, useAuth0 } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'
import LandingPage from './LandingPage'
import Navbar from './Navbar'
import Footer from './Footer'

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [redirectUri, setRedirectUri] = useState('')
  const { isAuthenticated } = useAuth0()
  useEffect(() => {
    // Set redirect URI to the user component
    setRedirectUri(`${window.location.origin}/`)
  }, [])

  if (!redirectUri) {
    return null // or a loading spinner
  }

  return (
    <Auth0Provider
      domain="dev-4q611plcdtbmsn6z.us.auth0.com"
      clientId="Ttiz8xnAzYH36yufQV2d77WRQY2aFf2h"
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
    >
      {' '}
      <div className=" flex flex-col">
        {/* navbar will come here */}
        {/* <Navbar /> */}
        <div>{!isAuthenticated ? <LandingPage /> : children} </div>{' '}
        {/* footer will come here */}
        {/* <Footer /> */}
      </div>
    </Auth0Provider>
  )
}
