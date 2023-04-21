import { createContext, useContext } from 'react'
import {
  permissionStore,
  permissionKey,
} from '@/domains/permission/store/index.store'
import { roleStore, roleStoreKey } from '@/domains/role/stores/index.store'
function createStores() {
  return {
    [permissionKey]: permissionStore,
    [roleStoreKey]: roleStore,
  }
}

export const stores = createStores()

export const StoresContext = createContext(stores)

export const useStores = () => useContext(StoresContext)
