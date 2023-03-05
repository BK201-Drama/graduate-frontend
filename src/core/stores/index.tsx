import { createContext, useContext } from 'react'

function createStores() {
  return {
  }
}

export const stores = createStores()

export const StoresContext = createContext(stores)

export const useStores = () => useContext(StoresContext)
