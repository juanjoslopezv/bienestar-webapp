import React from 'react'
import { AuthProvider } from './AuthProvider'
import { EstatesProvider } from './EstatesProvider'

const ContextProvider = ({ children }: { children: JSX.Element }) => {
  return (
    <AuthProvider>
      <EstatesProvider>
        {children}
      </EstatesProvider>
    </AuthProvider>
  )
}

export default ContextProvider