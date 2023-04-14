import { createContext, useContext } from 'react'
import { permissionStore } from '@/domains/permission/store/index.store'

function createStores() {
  return {
    permissionStore,
  }
}

export const stores = createStores()

export const StoresContext = createContext(stores)

export const useStores = () => useContext(StoresContext)
