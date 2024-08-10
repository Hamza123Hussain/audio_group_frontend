'use server'

import { currentUser } from '@clerk/nextjs/server'
import { StreamClient } from '@stream-io/node-sdk'

import { error } from 'console'
const Api = process.env.NEXT_PUBLIC_STREAM_API
const Api_Secret = process.env.STREAM_Secret
export const tokenProvider = async () => {
  const user = await currentUser()

  if (!user) throw new Error('User Not Logged In')
  if (!Api) throw new Error(' No Key Found')
  if (!Api_Secret) throw new Error('NO SECRET')

  const client = new StreamClient(Api, Api_Secret)
  const issues = Math.floor(Date.now() / 1000) - 60

  // exp is optional (by default the token is valid for an hour)
  const exp = Math.round(new Date().getTime() / 1000) + 60 * 60

  const token = client.createToken(user?.id, exp, issues)
  return token
}
