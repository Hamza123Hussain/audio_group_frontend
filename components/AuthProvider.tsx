// AuthProvider.js
'use client'
import { useUser } from '@clerk/nextjs'
import LandingPage from './LandingPage'

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { user } = useUser()
  return (
    <div className=" flex flex-col">
      <div className=" flex-grow">{!user ? <LandingPage /> : children} </div>{' '}
    </div>
  )
}
