// Add TypeScript definitions for window.ethereum
interface Window {
  ethereum?: {
    isMetaMask?: boolean
    selectedAddress?: string
    on?: (event: string, callback: (...args: any[]) => void) => void
    removeListener?: (event: string, callback: (...args: any[]) => void) => void
  }
}
