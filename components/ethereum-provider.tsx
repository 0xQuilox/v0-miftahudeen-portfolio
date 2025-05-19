"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

// Create a context to manage ethereum provider access
type EthereumContextType = {
  hasProvider: boolean
  isConnected: boolean
}

const EthereumContext = createContext<EthereumContextType>({
  hasProvider: false,
  isConnected: false,
})

export const useEthereum = () => useContext(EthereumContext)

export function EthereumProvider({ children }: { children: ReactNode }) {
  const [hasProvider, setHasProvider] = useState(false)
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    // Safely check for ethereum provider without trying to redefine it
    const checkForProvider = () => {
      if (typeof window !== "undefined" && window.ethereum) {
        setHasProvider(true)
        setIsConnected(!!window.ethereum.selectedAddress)
      }
    }

    // Check initially
    checkForProvider()

    // Listen for account changes without directly accessing ethereum
    const handleAccountsChanged = () => {
      if (typeof window !== "undefined" && window.ethereum) {
        setIsConnected(!!window.ethereum.selectedAddress)
      }
    }

    // Safely add and remove event listeners
    if (typeof window !== "undefined" && window.ethereum) {
      window.ethereum.on?.("accountsChanged", handleAccountsChanged)
    }

    return () => {
      if (typeof window !== "undefined" && window.ethereum) {
        window.ethereum.removeListener?.("accountsChanged", handleAccountsChanged)
      }
    }
  }, [])

  return <EthereumContext.Provider value={{ hasProvider, isConnected }}>{children}</EthereumContext.Provider>
}
