'use client'
import React, { createContext, useState, useContext, ReactNode } from 'react'

// Define the type for the context value
interface IndexContextType {
  index: number
  setIndex: (index: number) => void
}

// Create the context with an initial value of null
const IndexContext = createContext<IndexContextType | null>(null)

// Create a provider component
export const IndexProvider = ({ children }: { children: ReactNode }) => {
  const [index, setIndex] = useState<number>(0)

  return (
    <IndexContext.Provider value={{ index, setIndex }}>
      {children}
    </IndexContext.Provider>
  )
}

// Custom hook to use the IndexContext
export const useIndex = () => {
  const context = useContext(IndexContext)
  if (!context) {
    throw new Error('useIndex must be used within an IndexProvider')
  }
  return context
}
