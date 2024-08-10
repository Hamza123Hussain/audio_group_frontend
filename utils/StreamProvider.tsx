import React, { ReactNode, useEffect, useState } from 'react'
import { StreamVideoClient, StreamVideo } from '@stream-io/video-react-sdk'
import { useUser } from '@clerk/nextjs'
import { tokenProvider } from './StreamActions'
const Api = process.env.NEXT_PUBLIC_STREAM_API
const StreamProvider = ({ children }: { children: ReactNode }) => {
  const [videoclient, SetvideoClient] = useState<StreamVideoClient>()
  const { user, isLoaded } = useUser()
  useEffect(() => {
    if (!isLoaded || !user) return
    if (!Api) throw new Error('api key missing')

    const client = new StreamVideoClient({
      apiKey: Api,
      user: {
        id: user?.id,
        name: user?.fullName || user?.id,
        image: user?.imageUrl,
      },
      tokenProvider: tokenProvider,
    })
    SetvideoClient(client)
  }, [user, isLoaded])

  return <StreamVideo client={SetvideoClient}>{children}</StreamVideo>
}

export default StreamProvider
