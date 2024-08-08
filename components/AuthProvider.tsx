// AuthProvider.js
'use client'

import { Auth0Provider } from '@auth0/auth0-react'
import { useEffect, useState } from 'react'

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [redirectUri, setRedirectUri] = useState('')

  useEffect(() => {
    // Set redirect URI to the user component
    setRedirectUri(`${window.location.origin}/Users`)
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
      {children}
    </Auth0Provider>
  )
}
